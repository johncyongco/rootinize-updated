'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Our Work', href: '#work' },
  { label: 'Why Us', href: '#why' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'glass py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/logo.png" 
              alt="Rootinize" 
              className="h-8 w-auto"
            />
             <span className="text-2xl font-heading text-[#F5F5F2] hidden sm:block">
               Rootinize
             </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                   className="text-sm font-medium text-[#8A8C96] hover:text-[#F5F5F2] transition-colors relative group"
                 >
                   {item.label}
                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <a
               href="#contact"
               className="px-6 py-2.5 bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                   className="py-2 text-base font-medium text-[#8A8C96] hover:text-[#F5F5F2] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                 href="#contact"
                 onClick={() => setIsOpen(false)}
                 className="mt-2 px-6 py-3 bg-gradient-to-r from-[#3A2A6C] to-[#6F86B6] text-white font-semibold rounded-lg text-center hover:shadow-lg hover:shadow-[#3A2A6C]/20 transition-all duration-300"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
