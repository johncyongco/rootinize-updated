'use client'

import { Zap, Users, Target, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ShinyText } from './shiny-text'

const benefits = [
  {
    icon: Zap,
    title: 'Speed to Value',
    description: 'Working prototypes in weeks, not months. We focus on delivering immediate operational improvements.',
    metrics: ['2-4 week sprints', 'Rapid iteration', 'Quick ROI'],
  },
  {
    icon: Users,
    title: 'Partnership Approach',
    description: 'We become an extension of your team, deeply understanding your business to build the right solutions.',
    metrics: ['Dedicated team', 'Regular syncs', 'Transparent process'],
  },
  {
    icon: Target,
    title: 'Measurable Results',
    description: 'Every project includes clear KPIs and ROI tracking. We build systems that demonstrate tangible value.',
    metrics: ['Clear metrics', 'ROI tracking', 'Performance reports'],
  },
  {
    icon: Shield,
    title: 'Technical Excellence',
    description: 'Modern stack, clean architecture, and enterprise-grade security built into every solution.',
    metrics: ['Best practices', 'Security first', 'Scalable design'],
  },
]

export function WhyChooseUs() {
  return (
     <section id="why" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
            Why Choose Rootinize
          </h2>
          <p className="text-xl text-[#8A8C96]">
            We deliver results, not just software
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={cn(
                "group relative p-8 rounded-3xl bg-card border border-border",
                "transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl",
                "animate-fade-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
              </div>

               {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading text-[#F5F5F2]">
                  {benefit.title}
                </h3>
                <p className="text-[#8A8C96]">{benefit.description}</p>
                
                {/* Metrics */}
                <div className="space-y-2 pt-4 border-t border-[#1C1E24]/50">
                  {benefit.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#3A2A6C]/50" />
                      <span className="text-sm text-[#8A8C96] font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

               {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#3A2A6C]/20 rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Differentiator */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#3A2A6C]/5 to-[#3A2A6C]/10 border border-[#3A2A6C]/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading mb-4 text-[#F5F5F2]">
                Not just developers — strategic partners
              </h3>
              <p className="text-[#8A8C96]">
                We combine technical expertise with business acumen to deliver solutions that drive real growth. 
                Our focus is on understanding your unique challenges and building systems that solve them.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Business Analysis', value: '100%' },
                { label: 'Technical Strategy', value: '100%' },
                { label: 'Implementation', value: '100%' },
                { label: 'Ongoing Support', value: '100%' },
              ].map((item) => (
                 <div key={item.label} className="text-center p-4 rounded-xl backdrop-blur-xl bg-[#0A1429]/50 border border-[#1C2A4A]/50">
                   <div className="text-2xl font-bold text-[#6F86B6] mb-1">{item.value}</div>
                  <div className="text-sm text-[#8A8C96] font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
