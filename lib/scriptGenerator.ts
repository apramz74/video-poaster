import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateScript(summary: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant that generates short video scripts based on news article summaries. The script should be about 30-40 words long and suitable for a 15-second video."
      },
      {
        role: "user",
        content: `Generate a short video script based on this summary:\n\n${summary}`
      }
    ],
    max_tokens: 60,
  })

  return response.choices[0].message.content || ''
}

