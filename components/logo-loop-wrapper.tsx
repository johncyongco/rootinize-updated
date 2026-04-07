'use client'

import LogoLoop, { LogoItem } from './logo-loop'
import Image from 'next/image'

// Helper function to create logo items with actual white logo images
const createLogoItem = (src: string, title: string, alt: string, customWidth?: number, customHeight?: number): LogoItem => ({
  src,
  alt,
  title,
  width: customWidth || 20, // Reduced from 24 (about 17% smaller)
  height: customHeight || 20 // Reduced from 24 (about 17% smaller)
})

// Top row: Slack, Microsoft Teams, Jira, Notion (right to left) - ACTUAL WHITE LOGOS
const topRowLogos: LogoItem[] = [
  // Slack Logo - White version
  createLogoItem(
    '/logos/Slack.png',
    'Slack',
    'Slack'
  ),
  // Microsoft Teams Logo - White version
  createLogoItem(
    '/logos/MS Teams.png',
    'Microsoft Teams',
    'Microsoft Teams'
  ),
  // Jira Logo - White version
  createLogoItem(
    '/logos/Jira.png',
    'Jira',
    'Jira'
  ),
  // Notion Logo - White version (moved from middle row since we have the file)
  createLogoItem(
    '/logos/Notion.png',
    'Notion',
    'Notion'
  ),
]

// Middle row: N8N, Zapier, Confluence, Hubspot (left to right) - ACTUAL WHITE LOGOS
const middleRowLogos: LogoItem[] = [
  // N8N Logo - White version (adjust sizing to match container)
  createLogoItem(
    '/logos/N8N.png',
    'N8N',
    'N8N',
    25, // Reduced from 32 (about 22% smaller)
    25  // Reduced from 32 (about 22% smaller)
  ),
  // Zapier Logo - White version
  createLogoItem(
    '/logos/Zapier.png',
    'Zapier',
    'Zapier'
  ),
  // Confluence Logo - White version
  createLogoItem(
    '/logos/Confluence.png',
    'Confluence',
    'Confluence'
  ),
  // Hubspot Logo - White version (moved from bottom row)
  createLogoItem(
    '/logos/Hubspot.png',
    'Hubspot',
    'Hubspot'
  ),
]

// Bottom row: ChatGPT, Claude, Salesforce, Asana (right to left) - ACTUAL WHITE LOGOS
const bottomRowLogos: LogoItem[] = [
  // ChatGPT Logo - White version
  createLogoItem(
    '/logos/chatGPT.png',
    'ChatGPT',
    'ChatGPT'
  ),
  // Claude Logo - White version
  createLogoItem(
    '/logos/Claude.png',
    'Claude',
    'Claude'
  ),
  // Salesforce Logo - White version
  createLogoItem(
    '/logos/Salesforce.png',
    'Salesforce',
    'Salesforce'
  ),
  // Asana Logo - White version
  createLogoItem(
    '/logos/Asana.png',
    'Asana',
    'Asana'
  ),
]

export function LogoLoopWrapper() {
  return (
    <section className="py-16 border-y border-[#1C2A4A]/30 overflow-hidden">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-heading text-[#DDDDE3] mb-4">
            Seamless Integration with Your Stack
          </h3>
          <p className="text-[#8A8C96] max-w-2xl mx-auto">
            Rootinize connects with all your essential tools, creating a unified automation ecosystem
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Top Row: Slack, Microsoft Teams, Jira, Notion (right to left) */}
          <div className="relative">
            <LogoLoop
              logos={[...topRowLogos, ...topRowLogos]} // Duplicate for seamless loop
              speed={60}
              direction="left"
              width="100%"
              logoHeight={38} // Reduced from 48 (about 21% smaller)
              gap={38} // Reduced gap proportionally
              pauseOnHover={true}
              fadeOut={false} // Disable fadeOut to remove black borders
              scaleOnHover={true}
              ariaLabel="Top row integration tools"
            />
          </div>
          
          {/* Middle Row: N8N, Zapier, Confluence, Hubspot (left to right) */}
          <div className="relative">
            {/* Full width scrolling middle row */}
            <div className="relative">
              <LogoLoop
                logos={[...middleRowLogos, ...middleRowLogos]} // Duplicate for seamless loop
                speed={50}
                direction="right"
                width="100%"
                logoHeight={38} // Reduced from 48 (about 21% smaller)
                gap={38} // Reduced gap proportionally
                pauseOnHover={true}
                fadeOut={false} // Disable fadeOut to remove black borders
                scaleOnHover={true}
                ariaLabel="Middle row integration tools"
              />
              
              {/* Static Rootinize Logo Overlay in Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl backdrop-blur-xl bg-[#0A1429]/80 border-2 border-[#6F86B6]/30 shadow-2xl shadow-[#3A2A6C]/30 flex items-center justify-center p-1.5">
                  {/* Actual Rootinize Logo from public/logo.png */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/logo.png"
                      alt="Rootinize"
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 64px, 96px"
                    />
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-[#6F86B6]/20 blur-xl"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row: ChatGPT, Claude, Salesforce, Asana (right to left) */}
          <div className="relative">
            <LogoLoop
              logos={[...bottomRowLogos, ...bottomRowLogos]} // Duplicate for seamless loop
              speed={70}
              direction="left"
              width="100%"
              logoHeight={38} // Reduced from 48 (about 21% smaller)
              gap={38} // Reduced gap proportionally
              pauseOnHover={true}
              fadeOut={false} // Disable fadeOut to remove black borders
              scaleOnHover={true}
              ariaLabel="Bottom row integration tools"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-[#666A73]">
            And 50+ other integrations available
          </p>
        </div>
      </div>
    </section>
  )
}