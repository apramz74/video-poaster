'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Newspaper, Type, Wand2 } from 'lucide-react'

export function ArticleInput() {
  const [url, setUrl] = useState('')
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/process-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, text }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to process article')
      }
      
      const data = await response.json()
      console.log(data) // Handle the response data
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-card rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-center text-primary">Transform News into Video Magic!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Tabs defaultValue="url" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="url" className="flex items-center justify-center">
                <Newspaper className="w-4 h-4 mr-2" />
                URL
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center justify-center">
                <Type className="w-4 h-4 mr-2" />
                Text
              </TabsTrigger>
            </TabsList>
            <TabsContent value="url" className="mt-4">
              <div className="relative">
                <Input
                  type="url"
                  placeholder="Paste your article URL here"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pr-10"
                  required
                />
                <Newspaper className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
            </TabsContent>
            <TabsContent value="text" className="mt-4">
              <Textarea
                placeholder="Paste your article text here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-[100px]"
                required
              />
            </TabsContent>
          </Tabs>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Convert to Video
                </span>
              )}
            </Button>
          </motion.div>
        </form>
      </div>
      <div className="bg-muted p-4 text-center text-sm text-muted-foreground">
        <p>Powered by AI - Turn any article into a captivating short video!</p>
      </div>
    </motion.div>
  )
}

