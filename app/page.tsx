import BlogPreview from '@/components/blog-preview'
import ContactForm from '@/components/contact-form'
import Features from '@/components/featured'
import Header from '@/components/header'
import Hero from '@/components/hero'
import ImageTiles from '@/components/image-tiles'
import SimpleCTA from '@/components/simple-cta'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/auth'
import Footer from '@/components/footer'


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Header session={session} />
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
