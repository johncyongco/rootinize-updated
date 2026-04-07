'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { MapPin, Phone, Mail } from 'lucide-react'

const steps = [
  { id: 1, label: 'Full Name', field: 'name' },
  { id: 2, label: 'Email', field: 'email' },
  { id: 3, label: 'Industry', field: 'industry' },
  { id: 4, label: 'Message', field: 'message' },
]

const industries = [
  'Technology',
  'Retail & E-commerce',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Professional Services',
  'Education',
  'Other',
]

export function Contact() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: '',
  })

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Full Name
              </label>
               <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-[#1C1E24] focus:border-[#6F86B6] focus:outline-none transition-colors text-[#F5F5F2]"
                placeholder="Enter your full name"
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Email Address
              </label>
               <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-[#1C1E24] focus:border-[#6F86B6] focus:outline-none transition-colors text-[#F5F5F2]"
                placeholder="you@company.com"
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Industry
              </label>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((industry) => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => handleInputChange('industry', industry)}
                     className={cn(
                      "px-4 py-3 rounded-xl border transition-all duration-300 text-left",
                      formData.industry === industry
                        ? "border-[#6F86B6] bg-[#3A2A6C]/10 text-[#6F86B6]"
                        : "border-[#1C1E24] hover:border-[#6F86B6]/50 hover:bg-[#3A2A6C]/5 text-[#8A8C96]"
                    )}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Your Message
              </label>
               <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0D0E11] border border-[#1C1E24] focus:border-[#6F86B6] focus:outline-none transition-colors min-h-[150px] text-[#F5F5F2]"
                placeholder="Tell us about your automation needs..."
              />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
     <section id="contact" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
             <div>
              <h2 className="text-4xl md:text-5xl font-heading mb-6 text-[#F5F5F2]">
                Contact Us
              </h2>
              <p className="text-xl text-[#8A8C96] mb-8">
                Here's how you can contact us for any questions or concerns.
              </p>
            </div>

            <div className="space-y-6">
               <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3A2A6C]/10 border border-[#3A2A6C]/20">
                  <MapPin className="h-6 w-6 text-[#6F86B6]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1 text-[#F5F5F2]">Address</h3>
                  <p className="text-[#8A8C96]">
                    Cebu City, Philippines, 6000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3A2A6C]/10 border border-[#3A2A6C]/20">
                  <Phone className="h-6 w-6 text-[#6F86B6]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1 text-[#F5F5F2]">Phone</h3>
                  <p className="text-[#8A8C96]">
                    +639553624405
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#3A2A6C]/10 border border-[#3A2A6C]/20">
                  <Mail className="h-6 w-6 text-[#6F86B6]" />
                </div>
                <div>
                  <h3 className="font-heading text-lg mb-1 text-[#F5F5F2]">Email</h3>
                  <p className="text-[#8A8C96]">
                    contact@rootinize.team
                  </p>
                </div>
              </div>
            </div>

             {/* Background decoration */}
            <div className="relative mt-12">
               <div className="absolute -inset-4 bg-gradient-to-r from-[#3A2A6C]/10 via-[#6F86B6]/5 to-[#3A2A6C]/10 rounded-2xl blur-xl" />
               <div className="relative p-6 rounded-xl backdrop-blur-xl bg-[#0A1429]/50 border border-[#1C2A4A]/50">
                <p className="text-sm text-[#8A8C96]">
                  We typically respond within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Stepper Form */}
          <div className="space-y-8">
            {/* Stepper Progress */}
            <div className="flex items-center justify-between mb-8">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center">
                   <div className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300",
                    currentStep >= step.id
                      ? "border-[#6F86B6] bg-[#6F86B6] text-white"
                      : "border-[#1C1E24] text-[#8A8C96]"
                  )}>
                    {step.id}
                  </div>
                  {step.id < steps.length && (
                     <div className={cn(
                      "w-16 h-0.5 transition-all duration-300",
                      currentStep > step.id ? "bg-[#6F86B6]" : "bg-[#1C1E24]"
                    )} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Labels */}
            <div className="flex justify-between mb-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                   className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    currentStep >= step.id ? "text-[#6F86B6]" : "text-[#8A8C96]"
                  )}
                >
                  {step.label}
                </div>
              ))}
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="min-h-[200px]">
                {renderStepContent()}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-border">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                     className="px-6 py-3 rounded-xl border border-[#1C1E24] hover:border-[#6F86B6]/50 hover:bg-[#3A2A6C]/5 transition-all duration-300 text-[#8A8C96]"
                  >
                    Back
                  </button>
                ) : (
                  <div /> // Empty div for spacing
                )}

                 {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300"
                  >
                    Continue
                  </button>
                 ) : (
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>

            {/* Progress indicator */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Step {currentStep} of {steps.length}</span>
                <span>{Math.round((currentStep / steps.length) * 100)}% complete</span>
              </div>
               <div className="mt-2 h-2 bg-[#1C1E24] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] transition-all duration-500"
                  style={{ width: `${(currentStep / steps.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
