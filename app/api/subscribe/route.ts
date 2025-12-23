import { NextRequest, NextResponse } from 'next/server'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const databaseId = process.env.NOTION_DATABASE_ID!

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Debug logging
    console.log('Environment check:', {
      hasToken: !!process.env.NOTION_TOKEN,
      hasDbId: !!process.env.NOTION_DATABASE_ID,
      tokenLength: process.env.NOTION_TOKEN?.length,
      dbId: process.env.NOTION_DATABASE_ID
    })

    if (!process.env.NOTION_TOKEN) {
      console.error('NOTION_TOKEN is missing')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    if (!process.env.NOTION_DATABASE_ID) {
      console.error('NOTION_DATABASE_ID is missing')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    console.log('Attempting to create page with email:', email)

    // Add new subscriber (skip duplicate check for now)
    const result = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        'Subscribed Date': {
          date: {
            start: new Date().toISOString().split('T')[0],
          },
        },
        Status: {
          select: {
            name: 'Active',
          },
        },
        Source: {
          select: {
            name: source || 'Unknown',
          },
        },
      },
    })

    console.log('Successfully created page:', result.id)

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    
    // Check if it's a duplicate error from Notion
    if (error instanceof Error && error.message.includes('already exists')) {
      return NextResponse.json(
        { error: 'Email already subscribed' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}