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

    // Add new subscriber (skip duplicate check for now)
    await notion.pages.create({
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