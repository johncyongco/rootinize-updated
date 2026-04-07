import { Hero } from '@/components/hero'
import { LogoLoopWrapper } from '@/components/logo-loop-wrapper'
import { Services } from '@/components/services'
import { WorkShowcase } from '@/components/work-showcase'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { WhyChooseUs } from '@/components/why-choose-us'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoLoopWrapper />
      <Services />
      <WorkShowcase />
      <Process />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </>
  )
}
