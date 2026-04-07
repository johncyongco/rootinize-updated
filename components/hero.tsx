'use client'

import { ArrowRight, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GradientText } from './gradient-text'
import { CountUp } from './count-up'
import { PrismWrapper } from './prism-wrapper'

const stats = [
  { value: '40+', label: 'Automated Processes' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '6', label: 'Weeks Delivery' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden section-padding">
        {/* Background */}
       <div className="absolute inset-0 overflow-hidden min-h-[500px]">
         <div className="absolute inset-0 bg-gradient-to-br from-[#141827]/10 to-transparent" />
         {/* Prism Background */}
         <div className="absolute inset-0 opacity-50">
           <PrismWrapper 
             animationType="3drotate"
             glow={0.9}
             scale={2.8}
             hueShift={30}
             colorFrequency={1.3}
             bloom={1.3}
             timeScale={0.25}
             noise={0.3}
           />
         </div>

       </div>

      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">

              
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading tracking-tight text-[#F5F5F2]">
                 Intelligent Automation for <span className="italic font-light">Modern</span><br/>
                 Operations
               </h1>
              
              <p className="text-xl text-[#8A8C96] max-w-2xl mx-auto">
                Rootinize builds custom AI systems that automate manual processes, deploy chatbots, 
                and create internal tools for businesses ready to scale efficiently.
              </p>
            </div>

             {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#3A2A6C]/20 transition-all duration-300 hover:-translate-y-1"
              >
                Book Strategy Session
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 border border-[#1C1E24] rounded-xl font-semibold text-[#DDDDE3] hover:border-[#6F86B6] hover:bg-[#6F86B6]/5 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>

             {/* Stats */}
            <div className="pt-8 border-t border-[#1C1E24] max-w-md mx-auto">
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className={cn(
                      "text-center",
                      index < 2 && "border-r border-[#1C1E24]"
                    )}
                  >
                    <div className="text-3xl font-bold text-[#F5F5F2] mb-1">
                      <CountUp 
                        end={stat.value === '40+' ? 40 : stat.value === '98%' ? 98 : 6} 
                        suffix={stat.value.includes('%') ? '%' : stat.value.includes('+') ? '+' : ''}
                        duration={2000}
                      />
                    </div>
                    <div className="text-sm text-[#666A73] font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
