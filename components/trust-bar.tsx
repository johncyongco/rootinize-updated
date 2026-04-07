import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    label: 'SOC 2 Compliant',
    description: 'Enterprise-grade security',
  },
  {
    icon: Lock,
    label: 'Bank-Level Security',
    description: '256-bit encryption',
  },
  {
    icon: Award,
    label: 'GDPR Ready',
    description: 'Global compliance',
  },
  {
    icon: CheckCircle,
    label: 'Enterprise Grade',
    description: '99.9% uptime SLA',
  },
]

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border/50">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Trusted by forward-thinking businesses
          </p>
          <h3 className="text-2xl font-heading">
            Built for scale, trusted by leaders
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.label}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                   <h4 className="font-heading text-lg mb-1">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
