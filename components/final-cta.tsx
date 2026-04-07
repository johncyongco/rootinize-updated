'use client'

import { Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FinalCTA() {
  return (
      <section id="contact" className="section-padding relative overflow-hidden">
      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative">
             {/* Main Card */}
             <div className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50 shadow-2xl shadow-black/30">
              <div className="text-center space-y-8">
                {/* Header */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg bg-[#3A2A6C]/20 border border-[#1C2A4A]/50">
                    <Calendar className="h-4 w-4 text-[#6F86B6]" />
                    <span className="text-sm font-medium text-[#6F86B6]">Free Strategy Session</span>
                  </div>
                   
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-[#F5F5F2]">
                    Ready to Transform Your Operations?
                  </h2>
                   
                  <p className="text-xl text-[#8A8C96] max-w-2xl mx-auto">
                    Book a free strategy session to explore how AI automation can save time, 
                    reduce costs, and scale your business.
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  {[
                    'No obligation',
                    '30-minute consultation',
                    'Custom roadmap included',
                    'ROI analysis',
                    'Technical assessment',
                    'Next steps plan',
                  ].map((benefit) => (
                     <div
                      key={benefit}
                      className="flex items-center gap-2 p-3 rounded-xl bg-[#0A0A0B]/50 border border-[#3A2A6C]/20"
                    >
                      <CheckCircle className="h-4 w-4 text-[#6F86B6] flex-shrink-0" />
                      <span className="text-sm font-medium text-[#F5F5F2]">{benefit}</span>
                    </div>
                  ))}
                </div>

                 {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      // In a real app, this would open a calendar booking modal
                      alert('Booking modal would open here. In production, connect to Cal.com or similar.')
                    }}
                     className={cn(
                      "group inline-flex items-center justify-center gap-3",
                      "px-10 py-5 rounded-2xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white",
                      "font-semibold text-lg hover:shadow-2xl hover:shadow-[#3A2A6C]/30",
                      "transition-all duration-300 hover:-translate-y-1",
                      "animate-fade-up"
                    )}
                  >
                    <Calendar className="h-6 w-6" />
                    Book Your Strategy Call
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                  {/* Trust Note */}
                 <div className="pt-8 border-t border-[#3A2A6C]/20">
                   <p className="text-sm text-[#8A8C96]">
                     Join 40+ businesses that transformed their operations with Rootinize
                   </p>
                 </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
