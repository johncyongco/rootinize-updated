'use client'

import { useState, useEffect } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    quote: "Rootinize automated our inventory management, saving 20 hours weekly and reducing stockouts by 65%. The ROI was immediate.",
    author: "Sarah Chen",
    role: "COO, Retail Chain",
    results: [
      { label: "Time Saved", value: "20h/week" },
      { label: "Stockouts", value: "-65%" },
      { label: "ROI", value: "3.2x" },
    ],
  },
  {
    quote: "Their custom dashboard gave us visibility we never had. We now make data-driven decisions that improved operational efficiency by 40%.",
    author: "Marcus Johnson",
    role: "Founder, SaaS Company",
    results: [
      { label: "Efficiency", value: "+40%" },
      { label: "Decision Speed", value: "2x faster" },
      { label: "Accuracy", value: "99.5%" },
    ],
  },
  {
    quote: "The AI chatbot handles 80% of customer inquiries, freeing our team to focus on complex issues. Customer satisfaction increased by 35%.",
    author: "Elena Rodriguez",
    role: "Customer Success Director",
    results: [
      { label: "Inquiries Handled", value: "80%" },
      { label: "Satisfaction", value: "+35%" },
      { label: "Response Time", value: "< 30s" },
    ],
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Auto-rotate effect
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isHovering])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
     <section className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
            Client Results
          </h2>
          <p className="text-xl text-[#8A8C96]">
            Businesses that transformed with Rootinize automation
          </p>
        </div>

        {/* Active Testimonial Display */}
        <div className="max-w-3xl mx-auto">
             <div className="relative p-8 rounded-3xl backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50 shadow-lg shadow-black/20">
              {/* Navigation arrows */}
              <button
                onClick={handlePrev}
                 className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50 hover:border-[#6F86B6] hover:bg-[#6F86B6]/10 transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-[#6F86B6]" />
              </button>
              
              <button
                onClick={handleNext}
                 className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50 hover:border-[#6F86B6] hover:bg-[#6F86B6]/10 transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-[#6F86B6]" />
              </button>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-[#6F86B6]" />
              </div>

            {/* Current Testimonial */}
            <div className="text-center space-y-8">
                <div className="relative">
                  <p className="text-xl text-[#DDDDE3]/90 leading-relaxed italic px-8">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  {testimonials[currentIndex].results.map((result) => (
                     <div key={result.label} className="text-center p-4 rounded-xl backdrop-blur-xl bg-[#0A1429]/50 border border-[#1C2A4A]/50">
                      <div className="text-2xl font-bold text-[#6F86B6] mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-[#666A73] font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 pt-6 border-t border-[#1C1E24]">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6]">
                    {testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-heading text-[#DDDDE3]">{testimonials[currentIndex].author}</div>
                    <div className="text-sm text-[#666A73]">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                  }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      index === currentIndex ? "w-8 bg-[#6F86B6]" : "w-2 bg-[#1C1E24] hover:bg-[#6F86B6]/50"
                    )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
