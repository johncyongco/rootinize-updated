'use client'

import { useState } from 'react'
import { ChevronDown, Clock, DollarSign, Users, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'We deliver working prototypes in 2-4 weeks. Full implementation typically takes 6-12 weeks depending on complexity. Most clients see ROI within the first month of deployment.',
    icon: Clock,
  },
  {
    question: "What's your pricing model?",
    answer: 'We offer project-based pricing with clear deliverables. Most engagements range from $25k-$100k depending on scope. We provide detailed proposals with transparent pricing before starting any work.',
    icon: DollarSign,
  },
  {
    question: 'Do you work with non-technical teams?',
    answer: 'Absolutely. We specialize in translating business needs into technical solutions, guiding you through every step. Our process includes regular check-ins and plain-language explanations.',
    icon: Users,
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Yes. We build solutions that work with your current tech stack, whether it\'s CRM, ERP, or custom databases. We have experience with most major platforms and custom APIs.',
    icon: Cpu,
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#8A8C96]">
            Common questions about our AI automation services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            
            return (
              <div
                key={faq.question}
                className={cn(
                  "group rounded-2xl bg-card border border-border",
                  "transition-all duration-300",
                  isOpen ? "border-primary/50 shadow-lg" : "hover:border-border/80"
                )}
              >
                 <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2 rounded-lg transition-colors",
                      isOpen ? "bg-[#3A2A6C]/20" : "bg-[#0A0A0B]/50"
                    )}>
                      <faq.icon className={cn(
                        "h-5 w-5 transition-colors",
                        isOpen ? "text-[#6F86B6]" : "text-[#8A8C96]"
                      )} />
                    </div>
                     <h3 className="text-lg font-heading text-[#F5F5F2]">{faq.question}</h3>
                  </div>
                  <ChevronDown className={cn(
                    "h-5 w-5 text-[#8A8C96] transition-transform duration-300",
                    isOpen && "rotate-180 text-[#6F86B6]"
                  )} />
                </button>
                
                 <div
                   className={cn(
                     "overflow-hidden transition-all duration-500",
                     isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                   )}
                 >
                   <div className="px-6 pb-6">
                     <div className="pl-12 border-l-2 border-[#3A2A6C]/30 relative">
                        {/* Animated line effect */}
                        <div className={cn(
                          "absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[#6F86B6] to-transparent",
                          "transition-all duration-500",
                          isOpen ? "opacity-100" : "opacity-0"
                        )} />
                        <p className="text-[#8A8C96] leading-relaxed pl-4">{faq.answer}</p>
                      </div>
                   </div>
                 </div>
              </div>
            )
          })}
        </div>

         {/* Additional Help */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-3xl bg-gradient-to-r from-[#3A2A6C]/5 to-[#3A2A6C]/10 border border-[#3A2A6C]/20">
            <div className="text-left">
              <h3 className="text-xl font-heading mb-2 text-[#F5F5F2]">Still have questions?</h3>
              <p className="text-[#8A8C96]">
                Schedule a free consultation to discuss your specific needs
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#3A2A6C]/25 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
