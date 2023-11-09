import { authOptions } from '@/auth'
import BlogPreview from '@/components/blog-preview'
import ContactForm from '@/components/contact-form'
import Features from '@/components/featured'
import Hero from '@/components/hero'
import ImageTiles from '@/components/image-tiles'
import SimpleCTA from '@/components/simple-cta'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  return (
    <main>
      <Hero />
      <Features />
      <ImageTiles />
      <BlogPreview />
      <SimpleCTA />
      <ContactForm />
    </main>
  )
}
