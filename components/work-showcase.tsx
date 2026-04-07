'use client'

import { BarChart3, MessageSquare, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { RotatingText } from './rotating-text'

const projects = [
  {
    icon: BarChart3,
    title: 'Inventory Management AI',
    description: 'Predictive system that automates stock ordering, reduces waste by 40%, and integrates with existing POS systems.',
    results: [
      { label: 'Waste Reduction', value: '40%' },
      { label: 'Stock Accuracy', value: '99.2%' },
      { label: 'Time Saved', value: '65h/week' },
    ],
    tags: ['Automation', 'AI', 'Inventory'],
    color: 'from-[#3A2A6C]/10 to-[#6F86B6]/5',
  },
  {
    icon: MessageSquare,
    title: 'Customer Support Bot',
    description: '24/7 AI assistant that handles 80% of common inquiries, reducing support ticket volume and improving response time.',
    results: [
      { label: 'Inquiries Handled', value: '80%' },
      { label: 'Response Time', value: '< 2s' },
      { label: 'Satisfaction', value: '95%' },
    ],
    tags: ['Chatbot', 'Support', 'AI'],
    color: 'from-[#6F86B6]/10 to-[#3A2A6C]/5',
  },
  {
    icon: TrendingUp,
    title: 'Operations Dashboard',
    description: 'Centralized command center that visualizes KPIs, automates reporting, and provides real-time operational insights.',
    results: [
      { label: 'Efficiency Gain', value: '40%' },
      { label: 'Report Time', value: '90% faster' },
      { label: 'Data Accuracy', value: '99.8%' },
    ],
    tags: ['Dashboard', 'Analytics', 'Tools'],
    color: 'from-[#3A2A6C]/10 via-[#6F86B6]/8 to-[#3A2A6C]/5',
  },
]

export function WorkShowcase() {
  return (
     <section id="work" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
         {/* Section Header with Rotating Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="mb-8">
            <RotatingText 
              words={['Build', 'Refine', 'Scale']}
              interval={3000}
            />
          </div>
          <p className="text-xl text-[#8A8C96]">
            Real solutions for operational efficiency and business growth
          </p>
        </div>

        {/* Projects Grid with Star Border Effects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl",
                "transition-all duration-500 hover:-translate-y-2",
                "animate-fade-up",
                 // Card border
                "border border-[#1C1E24] hover:border-[#6F86B6]/30",
                "transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >


                 {/* Card content */}
               <div className="relative p-8 space-y-6 backdrop-blur-xl bg-[#0A1429]/70 rounded-3xl border border-[#1C2A4A]/50 shadow-lg shadow-black/20">
                {/* Placeholder image */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#3A2A6C]/5 via-[#6F86B6]/3 to-[#3A2A6C]/5" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                       <project.icon className="h-16 w-16 text-[#6F86B6]/50 mx-auto mb-4" />
                      <div className="text-lg font-heading text-[#DDDDE3]/70">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  {/* Modern UI elements overlay */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                     <div className="h-2 w-16 bg-[#6F86B6]/20 rounded-full" />
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-[#6F86B6]/30 rounded-full" />
                      <div className="h-2 w-2 bg-[#6F86B6]/30 rounded-full" />
                      <div className="h-2 w-2 bg-[#6F86B6]/30 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                     <div className="h-3 w-full bg-[#6F86B6]/10 rounded-full" />
                  </div>
                </div>

                 {/* Icon */}
                <div className="inline-flex p-4 rounded-2xl bg-[#3A2A6C]/10 border border-[#1C1E24]">
                  <project.icon className="h-8 w-8 text-[#6F86B6]" />
                </div>

                 {/* Title & Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading text-[#DDDDE3] group-hover:text-[#6F86B6] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-[#8A8C96] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                 {/* Results */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1C1E24]">
                  {project.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="text-2xl font-bold text-[#6F86B6] mb-1">
                        {result.value}
                      </div>
                      <div className="text-xs text-[#666A73] font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                 {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-[#1C1E24]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-[#3A2A6C]/10 text-[#6F86B6] text-sm font-medium border border-[#1C1E24]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          ))}
        </div>

         {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D0E11] border border-[#1C1E24]">
            <div className="flex gap-1">
              <div className="h-2 w-2 bg-[#6F86B6] rounded-full animate-pulse" />
              <div className="h-2 w-2 bg-[#6F86B6] rounded-full animate-pulse delay-150" />
              <div className="h-2 w-2 bg-[#6F86B6] rounded-full animate-pulse delay-300" />
            </div>
            <span className="text-sm font-medium text-[#666A73]">
              More case studies available upon request
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
