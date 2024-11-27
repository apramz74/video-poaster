1. Project Context & Goals
   This app aims to convert news articles into 15-second videos with AI-generated summaries, voiceovers, and visuals, enabling users to publish seamlessly to platforms like YouTube, TikTok, and Instagram Reels. Target users include social media managers, content creators, and news agencies looking to scale video production and engagement.
2. Requirements
   Input & Content Processing
   Input:
   User provides a news article URL.
   Option to paste raw text or upload a document.
   Content Extraction:
   Parse and clean article text to extract main content using a tool like BeautifulSoup or Newspaper3k.
   Summarization
   Use AI models (e.g., GPT, BART) to generate a concise summary.
   Limit the summary to key points suitable for a ~15-second video.
   Script Generation
   Refine the summary into a script (~30-40 words).
   Allow customization of tone (e.g., formal, conversational) and language.
   Voiceover Creation
   Generate a voiceover using an AI text-to-speech API (e.g., ElevenLabs, Google TTS).
   Offer multiple voice styles (e.g., male/female, accents).
   Visual Content Generation
   Create AI-generated images based on script keywords using tools like DALL·E or Stable Diffusion.
   Fetch relevant stock footage/images from platforms like Pexels or Unsplash.
   Apply transitions and overlays to synchronize with the script and voiceover.
   Video Compilation
   Combine voiceover, visuals, and text overlays programmatically using a video processing library (e.g., MoviePy, FFmpeg).
   Format video based on platform requirements (e.g., 9:16 for TikTok/Instagram Reels, 16:9 for YouTube).
   Publishing Integration
   Authenticate user accounts via OAuth for YouTube, TikTok, and Instagram.
   Automatically publish videos with user-defined metadata (title, description, hashtags).
   Allow scheduling of uploads.
3. Milestones
   Phase 1: Core Content Processing

   - Set up project infrastructure and basic API endpoints
   - Implement article parsing and content extraction
   - Integrate AI summarization model and script generation
   - Build basic user interface for article input and script preview

   Phase 2: Audio & Visual Generation

   - Integrate text-to-speech API and voice selection
   - Implement image/footage generation and curation system
   - Develop visual asset management and processing pipeline
   - Create video composition engine with basic templates

   Phase 3: Video Production & Enhancement

   - Build automated video compilation system
   - Implement multi-format video export (9:16, 16:9)
   - Add customization options (transitions, overlays, text styles)
   - Optimize video processing performance and quality

   Phase 4: Platform Integration & Publishing

   - Implement OAuth authentication for social platforms
   - Develop publishing API integrations
   - Create scheduling system and queue management
   - Build analytics dashboard for upload status and performance
