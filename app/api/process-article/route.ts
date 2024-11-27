import { NextResponse } from 'next/server'
import { extractContent } from '../../../lib/contentExtractor'
import { summarizeContent } from '../../../lib/summarizer'
import { generateScript } from '../../../lib/scriptGenerator'

export async function POST(req: Request) {
  try {
    const { url, text } = await req.json()
    
    // Extract content
    const content = await extractContent(url, text)
    
    // Summarize content
    const summary = await summarizeContent(content)
    
    // Generate script
    const script = await generateScript(summary)
    
    return NextResponse.json({ script })
  } catch (error) {
    console.error('Error processing article:', error)
    return NextResponse.json({ error: 'Failed to process article' }, { status: 500 })
  }
}

