import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function summarizeContent(content: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that summarizes news articles. Provide a concise summary suitable for a 15-second video."
      },
      {
        role: "user",
        content: `Summarize the following article:\n\n${content}`
      }
    ],
    max_tokens: 100,
  })

  return response.choices[0].message.content || ''
}

