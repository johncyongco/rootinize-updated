import { Linkedin, Twitter, Github } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Process Automation', href: '#services' },
    { label: 'Internal Tools', href: '#services' },
    { label: 'AI Chatbots', href: '#services' },
    { label: 'Custom Development', href: '#services' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'FAQ', href: '#faq' },
  ],
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export function Footer() {
  return (
      <footer className="border-t border-[#3A2A6C]/20">
       <div className="container-wide px-4 sm:px-6 lg:px-8">
         {/* Main Footer */}
         <div className="py-12 lg:py-16">
           <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Brand */}
             <div className="space-y-6">
               <a href="#" className="text-2xl font-heading text-[#F5F5F2]">
                 Rootinize
               </a>
               <p className="text-[#8A8C96]">
                 Intelligent automation and custom development for growing businesses.
               </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                   <a
                    key={social.label}
                     href={social.href}
                    className="p-2 rounded-lg bg-[#0A0A0B]/50 hover:bg-[#3A2A6C]/10 border border-[#3A2A6C]/20 hover:border-[#3A2A6C]/30 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-[#8A8C96] hover:text-[#6F86B6] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-3 grid sm:grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                    <h3 className="font-heading text-lg mb-4 capitalize text-[#F5F5F2]">
                     {category}
                   </h3>
                   <ul className="space-y-3">
                     {links.map((link) => (
                       <li key={link.label}>
                          <a
                           href={link.href}
                           className="text-[#8A8C96] hover:text-[#F5F5F2] transition-colors flex items-center gap-2 group"
                         >
                           <span className="h-1 w-1 rounded-full bg-[#6F86B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                           {link.label}
                         </a>
                       </li>
                     ))}
                   </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Bottom Bar */}
        <div className="py-6 border-t border-[#3A2A6C]/20">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-[#8A8C96]">
               &copy; {new Date().getFullYear()} Rootinize. All rights reserved.
             </p>
             
             <div className="flex gap-6">
               {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                 <a
                   key={item}
                   href="#"
                   className="text-sm text-[#8A8C96] hover:text-[#F5F5F2] transition-colors"
                 >
                   {item}
                 </a>
               ))}
             </div>
           </div>
        </div>
      </div>
    </footer>
  )
}
