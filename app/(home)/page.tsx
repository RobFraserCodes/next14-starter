import BlogPreview from '@/components/blog-preview'
import ContactForm from '@/components/contact-form'
import Features from '@/components/featured'
import Hero from '@/components/hero'
import ImageTiles from '@/components/image-tiles'
import SimpleCTA from '@/components/simple-cta'
import Footer from '@/components/footer'

export default async function Home() {

  return (
    <main>
      <Hero />
      <Features />
      <ImageTiles />
      <BlogPreview />
      <SimpleCTA />
      <ContactForm />
      <Footer />
    </main>
  )
}
