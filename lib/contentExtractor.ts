import cheerio from 'cheerio'

export async function extractContent(url: string, text: string): Promise<string> {
  if (text) {
    return text // If text is provided, use it directly
  }
  
  if (url) {
    const response = await fetch(url)
    const html = await response.text()
    const $ = cheerio.load(html)
    
    // Remove script tags, style tags, and comments
    $('script, style, comment').remove()
    
    // Extract text from paragraphs
    const paragraphs = $('p').map((_, el) => $(el).text()).get()
    return paragraphs.join('\n\n')
  }
  
  throw new Error('No content provided')
}

