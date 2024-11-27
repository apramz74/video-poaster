import { ArticleInput } from '../components/ArticleInput'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-primary">AI News-to-Video Converter</h1>
      <ArticleInput />
    </main>
  )
}

