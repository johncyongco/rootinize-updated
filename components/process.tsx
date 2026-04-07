'use client'

import { Search, Code, Zap, BarChart } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We analyze your workflows, identify automation opportunities, and define clear success metrics.',
    details: ['Process audit', 'ROI analysis', 'Solution design', 'Timeline planning'],
  },
  {
    number: '02',
    icon: Code,
    title: 'Rapid Prototyping',
    description: 'Build a working MVP in 2-4 weeks to validate the solution and gather feedback.',
    details: ['MVP development', 'User testing', 'Feedback integration', 'Iteration cycles'],
  },
  {
    number: '03',
    icon: Zap,
    title: 'Development & Integration',
    description: 'Full implementation with your existing systems, ensuring seamless operation.',
    details: ['System integration', 'Data migration', 'Quality assurance', 'Team training'],
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Launch & Optimization',
    description: 'Deployment, training, and ongoing optimization to ensure maximum ROI.',
    details: ['Production launch', 'Performance monitoring', 'Continuous improvement', 'Support & maintenance'],
  },
]

export function Process() {
  return (
     <section id="process" className="section-padding relative overflow-hidden">

      
      <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
         {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
            Our Process
          </h2>
          <p className="text-xl text-[#8A8C96]">
            A structured approach to delivering value quickly and efficiently
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
           {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1C1E24] via-[#6F86B6]/20 to-[#1C1E24] -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                 {/* Step Card */}
                <div
                   className={cn(
                    "relative p-8 rounded-3xl backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50",
                    "transition-all duration-500 hover:-translate-y-2 hover:border-[#6F86B6]/50",
                    "animate-fade-up",
                    "shadow-lg shadow-black/20"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] flex items-center justify-center">
                          <span className="text-xl font-heading text-white">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-heading text-[#DDDDE3]">{step.title}</h3>
                        <p className="text-[#8A8C96] mt-2">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-[#1C1E24]">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#6F86B6]" />
                          <span className="text-sm text-[#666A73]">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                 {/* Connector Dots */}
                {index < steps.length - 1 && (
                  <>
                    <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-4 bg-[#6F86B6] rounded-full -translate-y-1/2 translate-x-1/2 z-10" />
                    <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-4 bg-[#6F86B6]/20 rounded-full -translate-y-1/2 translate-x-1/2 animate-ping" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

         {/* Timeline Note */}
        <div className="text-center mt-16">
           <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl backdrop-blur-xl bg-[#0A1429]/70 border border-[#1C2A4A]/50 shadow-lg shadow-black/20">
            <div className="text-3xl font-bold text-[#6F86B6]">2-4 weeks</div>
            <div className="text-left">
              <div className="font-semibold text-[#DDDDE3]">Average time to working prototype</div>
              <div className="text-sm text-[#666A73]">Most clients see ROI within the first month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
