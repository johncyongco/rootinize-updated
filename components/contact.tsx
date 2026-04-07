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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault() // Prevent form submission for click events
    }
    
    if (currentStep < steps.length) {
      // Validate current step before proceeding
      let isValid = true
      let errorMessage = ''
      
      switch (currentStep) {
        case 1:
          isValid = formData.name.trim() !== ''
          errorMessage = 'Please enter your name before continuing.'
          break
        case 2:
          isValid = formData.email.trim() !== '' && /\S+@\S+\.\S+/.test(formData.email)
          errorMessage = 'Please enter a valid email address before continuing.'
          break
        case 3:
          isValid = formData.industry.trim() !== ''
          errorMessage = 'Please select an industry before continuing.'
          break
        case 4:
          // No validation needed for message during navigation
          isValid = true
          break
      }
      
      if (isValid) {
        setCurrentStep(currentStep + 1)
      } else {
        alert(errorMessage)
      }
    }
  }

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent form submission
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    
    // Final validation before submission
    if (!formData.name.trim() || !formData.email.trim() || !formData.industry.trim() || !formData.message.trim()) {
      alert('Please fill in all fields before submitting.')
      return
    }
    
    // Validate email format
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send data to webhook
      const response = await fetch('https://n8n.rootinize.team/webhook/contact-me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          industry: formData.industry,
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: 'rootinize-website'
        }),
      })

      console.log('Response status:', response.status)
      console.log('Response headers:', response.headers)
      
      if (response.ok) {
        console.log('Form data sent successfully to webhook')
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          industry: '',
          message: '',
        })
        setCurrentStep(1)
      } else {
        console.error('Failed to send form data. Status:', response.status)
        const errorText = await response.text()
        console.error('Error response:', errorText)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending form data:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
                 onKeyDown={(e) => {
                   if (e.key === 'Enter') {
                     e.preventDefault()
                     handleNext()
                   }
                 }}
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
                 onKeyDown={(e) => {
                   if (e.key === 'Enter') {
                     e.preventDefault()
                     handleNext()
                   }
                 }}
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
                     onClick={() => {
                       handleInputChange('industry', industry)
                       // Auto-proceed after selection
                       setTimeout(() => {
                         if (formData.industry !== industry) {
                           handleNext()
                         }
                       }, 100)
                     }}
                     onKeyDown={(e) => {
                       if (e.key === 'Enter') {
                         e.preventDefault()
                         handleInputChange('industry', industry)
                         handleNext()
                       }
                     }}
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
                 onKeyDown={(e) => {
                   if (e.key === 'Enter' && !e.shiftKey) {
                     e.preventDefault()
                     if (currentStep === steps.length) {
                       // On last step, submit the form
                       handleSubmit(e as any)
                     }
                   }
                 }}
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
         <div className={cn(
           "relative p-8 md:p-12 rounded-3xl",
           "backdrop-blur-xl bg-[#0A1429]/70",
           "border border-[#1C2A4A]/50",
           "shadow-2xl shadow-black/30",
           "overflow-hidden"
         )}>
           {/* Background decoration */}
           <div className="absolute inset-0 -z-10">
             <div className="absolute -inset-4 bg-gradient-to-r from-[#3A2A6C]/10 via-[#6F86B6]/5 to-[#3A2A6C]/10 rounded-3xl blur-xl" />
           </div>
           
           <div className="grid lg:grid-cols-2 gap-12 relative z-10">
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
                     onClick={(e) => handleBack(e)}
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
                     onClick={(e) => handleNext(e)}
                     className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300"
                   >
                     Continue
                   </button>
                 ) : (
                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className={cn(
                       "px-6 py-3 rounded-xl bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300",
                       isSubmitting && "opacity-70 cursor-not-allowed"
                     )}
                   >
                     {isSubmitting ? 'Sending...' : 'Submit'}
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

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <div className="mt-6 p-4 rounded-xl bg-green-900/20 border border-green-800/30">
                  <p className="text-green-300 text-sm">
                    ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-6 p-4 rounded-xl bg-red-900/20 border border-red-800/30">
                  <p className="text-red-300 text-sm">
                    ✗ Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
              </div>
            </div>
          </div>
         </div> {/* Close the new container div */}
        </div>
      </section>
  )
}
