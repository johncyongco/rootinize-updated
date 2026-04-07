'use client'

import { Bot, Wrench, MessageSquare, Code } from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Bot,
    title: 'Process Automation',
    description: 'Eliminate manual workflows with intelligent automation systems that handle repetitive tasks, data entry, and complex business logic.',
    features: ['Workflow automation', 'Data processing', 'System integration', 'Error reduction'],
  },
  {
    icon: Wrench,
    title: 'Internal Tools',
    description: 'Custom dashboards, admin panels, and operational tools that give your team superpowers without the enterprise software price tag.',
    features: ['Custom dashboards', 'Admin panels', 'Reporting tools', 'Data visualization'],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents for customer support, lead qualification, and internal knowledge management.',
    features: ['24/7 support', 'Lead qualification', 'Knowledge base', 'Multi-language'],
  },
  {
    icon: Code,
    title: 'Custom Development',
    description: 'Tailored software solutions that integrate AI capabilities into your existing systems and workflows.',
    features: ['API integration', 'Custom software', 'Legacy modernization', 'Scalable architecture'],
  },
]

export function Services() {
  return (
      <section id="services" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
            Specialized AI Solutions
          </h2>
          <p className="text-xl text-[#8A8C96]">
            We build custom systems that solve specific operational challenges with intelligent automation
          </p>
        </div>

         {/* Services Grid */}
        <div className="relative">
          {/* Bento grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
               <div
                key={service.title}
                className={cn(
                  "group relative p-6 rounded-2xl",
                  "backdrop-blur-xl bg-[#0A1429]/70",
                  "border border-[#1C2A4A]/50 hover:border-[#6F86B6]/50",
                  "transition-all duration-500 hover:-translate-y-2",
                  "animate-fade-up",
                  "overflow-hidden",
                  "shadow-lg shadow-black/20"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                 {/* Icon */}
                <div className="mb-6">
                   <div className="inline-flex p-3 rounded-xl backdrop-blur-lg bg-[#3A2A6C]/20 border border-[#1C2A4A]/50 group-hover:border-[#6F86B6] transition-colors">
                    <service.icon className="h-8 w-8 text-[#6F86B6]" />
                  </div>
                </div>

                 {/* Content */}
                <div className="space-y-4">
                   <h3 className="text-xl font-heading text-[#DDDDE3] group-hover:text-[#6F86B6] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#8A8C96]">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-[#1C1E24]">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#6F86B6]" />
                        <span className="text-sm text-[#666A73]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More link */}
                  <div className="pt-4">
                    <span className="text-sm font-medium text-[#6F86B6]">
                      Learn More →
                    </span>
                  </div>
                </div>


              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
