'use client'

import { 
  Truck,
  Triangle,
  CalendarX,
  TrendingUp,
  DollarSign,
  ShoppingBag,
  BadgePercent,
  PercentCircle,
  PieChart,
  BarChart3,
  Users,
  CreditCard,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical,
  ChevronDown,
  Calendar,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Languages,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Home,
  ChevronRight,
  Activity,
  Target,
  Shield,
  Cpu,
  ArrowRightLeft,
  ClipboardList,
  Crown,
  Square,
  CalendarClock,
  Undo2,
  Hash,
  Spline,

  AlertTriangle
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { RotatingText } from './rotating-text'

export function WorkShowcase() {
  return (
    <section id="work" className="section-padding">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="mb-6">
            <RotatingText 
              words={['Design', 'Automate', 'Scale']}
              interval={3000}
            />
          </div>
          <p className="text-xl text-[#8A8C96]">
            Sample automation dashboards showcasing the complete solutions we build for businesses
          </p>
        </div>

        {/* EXACT Dashboard Shell Template - Full implementation */}
        <div className="flex min-h-[800px] w-full bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-800">
          {/* Sidebar - EXACT template design */}
          <div className="hidden lg:flex w-64 flex-col border-r border-gray-800 bg-gray-900/90">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                 <span className="text-lg font-semibold text-gray-100">Dashboard</span>
                 <div className="ml-auto bg-blue-900/50 text-blue-300 text-xs font-medium px-2 py-1 rounded-full">5</div>
              </div>
            </div>

            <div className="px-4 py-2">
               <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Pages</div>
               <div className="space-y-1">
                 {[
                   { icon: Spline, label: 'Content Performance' },
                   { icon: Users, label: 'Audience Insight' },
                   { icon: PieChart, label: 'Engagement Metrics' },
                   { icon: Hash, label: 'Hashtag Performance', badge: '3' },
                   { icon: ArrowRightLeft, label: 'Competitor Analysis' },
                   { icon: Clock, label: 'Campaign Tracking' },
                   { icon: ClipboardList, label: 'Sentiment Tracking' },
                   { icon: Crown, label: 'Influencer' }
                 ].map((item, i) => (
                   <div
                     key={i}
                     className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-gray-100 cursor-default"
                   >
                     <item.icon className="h-5 w-5" />
                     <span className="text-sm font-medium">{item.label}</span>
                     {item.badge && (
                       <div className="ml-auto bg-blue-900/50 text-blue-300 text-xs font-medium px-2 py-0.5 rounded-full">
                         {item.badge}
                       </div>
                     )}
                   </div>
                 ))}
               </div>
            </div>

             <div className="px-4 py-2 mt-6">
               <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">Supporting Features</div>
               <div className="space-y-1">
                 {[
                   { icon: Activity, label: 'Real Time Monitoring' },
                   { icon: CalendarClock, label: 'Schedule Post & Calendar' },
                   { icon: Undo2, label: 'Report & Export' },
                   { icon: Settings, label: 'Settings & Integrations' },
                   { icon: Users, label: 'User Management' }
                 ].map((item, i) => (
                   <div
                     key={i}
                     className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-800/50 text-gray-300 hover:text-gray-100 cursor-default"
                   >
                     <item.icon className="h-5 w-5" />
                     <span className="text-sm font-medium">{item.label}</span>
                   </div>
                 ))}
               </div>
             </div>
          </div>

          {/* Main Content - EXACT template layout */}
          <div className="flex flex-1 flex-col">
             {/* Header - EXACT template design */}
             <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/90 px-6 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="lg:hidden p-2 rounded-lg hover:bg-gray-800/50 cursor-default">
                     <Menu className="h-5 w-5 text-gray-400" />
                   </div>
                   <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
                     <Home className="h-4 w-4" />
                     <ChevronRight className="h-3 w-3" />
                     <span>Dashboard</span>
                     <ChevronRight className="h-3 w-3" />
                     <span className="text-gray-100 font-medium">Free</span>
                   </div>
                </div>
                
                 <div className="flex items-center gap-3">
                   <div className="p-2 rounded-lg hover:bg-gray-800/50 cursor-default">
                     <Languages className="h-5 w-5 text-gray-400" />
                   </div>
                   <div className="relative">
                     <div className="p-2 rounded-lg hover:bg-gray-800/50 cursor-default">
                       <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                         JD
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </header>

             {/* Main Dashboard Content - EXACT template layout */}
             <main className="flex-1 p-6 bg-gray-900/60">
              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                {/* Statistics Cards - EXACT template design */}
                <div className="col-span-full grid gap-6 sm:grid-cols-3">
                  {[
                    { icon: Truck, value: '42', title: 'Shipped Orders', change: '+18.2%', color: 'bg-blue-50 text-blue-600' },
                    { icon: AlertTriangle, value: '8', title: 'Damaged Returns', change: '-8.7%', color: 'bg-red-50 text-red-600' },
                    { icon: CalendarX, value: '27', title: 'Missed Delivery Slots', change: '+4.3%', color: 'bg-amber-50 text-amber-600' }
                  ].map((card, index) => (
                     <div key={index} className="bg-gray-900/80 rounded-lg border border-gray-800 p-6">
                       <div className="flex items-center gap-4 mb-4">
                         <div className={`${card.color.replace('bg-blue-50', 'bg-blue-900/30').replace('bg-red-50', 'bg-red-900/30').replace('bg-amber-50', 'bg-amber-900/30')} flex size-8 shrink-0 items-center justify-center rounded-md`}>
                           <card.icon className="h-5 w-5" />
                         </div>
                         <span className="text-2xl text-gray-100">{card.value}</span>
                       </div>
                       <div className="flex flex-col gap-2">
                         <span className="font-semibold text-gray-100">{card.title}</span>
                         <p className="space-x-2">
                           <span className={`text-sm ${card.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                             {card.change}
                           </span>
                           <span className="text-gray-400 text-sm">than last week</span>
                         </p>
                       </div>
                     </div>
                  ))}
                </div>

                {/* Middle Section - EXACT template layout */}
                <div className="grid gap-6 max-xl:col-span-full lg:max-xl:grid-cols-2">
                   {/* Product Insights Card - EXACT styling */}
                   <div className="bg-gray-900/80 rounded-lg border border-gray-800 p-6">
                     <div className="flex justify-between items-start mb-6">
                       <div>
                         <h3 className="text-lg font-semibold text-gray-100">Product insight</h3>
                         <p className="text-gray-400 text-sm">Published on 12 MAY 2025 - 6:10 PM</p>
                       </div>
                       <div className="h-20 w-20 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                         {/* Product image placeholder */}
                         <div className="h-full w-full flex items-center justify-center">
                           <PieChart className="h-10 w-10 text-white" />
                         </div>
                       </div>
                     </div>

                     <div className="space-y-6">
                       <div className="flex items-center justify-between">
                         <div className="flex flex-col gap-1">
                           <span className="text-xs text-gray-400">Product reached</span>
                           <span className="text-2xl font-semibold text-gray-100">21,153</span>
                         </div>
                         <div className="h-12 w-16">
                           {/* Mini chart placeholder */}
                           <div className="h-full flex items-end gap-1">
                             {[40, 65, 80, 60, 90].map((h, i) => (
                               <div key={i} className="w-2 bg-gradient-to-t from-blue-500 to-purple-600 rounded-t" style={{ height: `${h}%` }} />
                             ))}
                           </div>
                         </div>
                       </div>

                       <div className="flex items-center justify-between">
                         <div className="flex flex-col gap-1">
                           <span className="text-xs text-gray-400">Order placed</span>
                           <span className="text-2xl font-semibold text-gray-100">2,123</span>
                         </div>
                         <div className="h-12 w-16">
                           {/* Mini chart placeholder */}
                           <div className="h-full flex items-end gap-1">
                             {[30, 50, 70, 40, 60].map((h, i) => (
                               <div key={i} className="w-2 bg-gray-700 rounded-t" style={{ height: `${h}%` }} />
                             ))}
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Total Earning Card - EXACT styling */}
                   <div className="bg-gray-900/80 rounded-lg border border-gray-800 p-6">
                     <div className="flex items-center justify-between mb-6">
                       <h3 className="text-lg font-semibold text-gray-100">Total Earning</h3>
                       <div className="flex items-center gap-2 text-green-400">
                         <TrendingUp className="h-4 w-4" />
                         <span className="text-sm">+10%</span>
                       </div>
                     </div>

                     <div className="mb-6">
                       <div className="text-3xl font-bold text-gray-100">$24,650</div>
                       <p className="text-gray-400 text-sm">Compare to last year ($84,325)</p>
                     </div>

                     <div className="space-y-4">
                       {[
                         { platform: 'Zipcar', tech: 'Vuejs & HTML', earnings: '-$23,569.26', progress: 75 },
                         { platform: 'Bitbank', tech: 'Figma & React', earnings: '-$12,650.31', progress: 25 }
                       ].map((item, index) => (
                         <div key={index} className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                             <div className="h-11 w-11 rounded-sm bg-blue-900/30 flex items-center justify-center">
                               <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm flex items-center justify-center">
                                 <DollarSign className="h-3 w-3 text-white" />
                               </div>
                             </div>
                             <div>
                               <div className="text-sm font-medium text-gray-100">{item.platform}</div>
                               <div className="text-xs text-gray-400">{item.tech}</div>
                             </div>
                           </div>
                           <div className="text-right">
                             <div className="text-sm font-medium text-gray-100">{item.earnings}</div>
                             <div className="h-2 w-36 bg-gray-700 rounded-full overflow-hidden mt-1">
                               <div 
                                 className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                                 style={{ width: `${item.progress}%` }}
                               />
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>

                 {/* Sales Metrics Chart - EXACT styling */}
                 <div className="col-span-full xl:col-span-2 bg-gray-900/80 rounded-lg border border-gray-800 p-6">
                   <div className="flex items-center justify-between mb-6">
                     <h3 className="text-lg font-semibold text-gray-100">Sales Metrics</h3>
                     <div className="flex items-center gap-4">
                       <div className="flex items-center gap-2">
                         <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                         <span className="text-sm text-gray-400">Current</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                         <span className="text-sm text-gray-400">Previous</span>
                       </div>
                     </div>
                   </div>

                   {/* Main chart area */}
                   <div className="space-y-6">
                     <div className="flex items-center gap-3">
                       <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                         <BarChart3 className="h-6 w-6 text-white" />
                       </div>
                       <div>
                         <div className="text-sm font-medium text-gray-100">Sandy's Company</div>
                         <div className="text-xs text-gray-400">sandy@company.com</div>
                       </div>
                     </div>

                     <div className="grid gap-4 sm:grid-cols-2">
                       {[
                         { icon: TrendingUp, title: 'Sales trend', value: '$11,548' },
                         { icon: BadgePercent, title: 'Discount offers', value: '$1,326' },
                         { icon: DollarSign, title: 'Net profit', value: '$17,356' },
                         { icon: ShoppingBag, title: 'Total orders', value: '248' }
                       ].map((metric, index) => (
                         <div key={index} className="flex items-center gap-3 rounded-md border border-gray-800 px-4 py-3">
                           <div className="h-8 w-8 rounded-sm bg-blue-900/30 text-blue-300 flex items-center justify-center">
                             <metric.icon className="h-5 w-5" />
                           </div>
                           <div>
                             <div className="text-xs text-gray-400 font-medium">{metric.title}</div>
                             <div className="text-lg font-medium text-gray-100">{metric.value}</div>
                           </div>
                         </div>
                       ))}
                     </div>

                     {/* Sales plan visualization */}
                     <div className="pt-6 border-t border-gray-800">
                       <div className="flex items-center justify-between mb-4">
                         <div>
                           <div className="text-lg font-semibold text-gray-100">Sales plan</div>
                           <div className="text-5xl font-bold text-gray-100">60%</div>
                           <div className="text-gray-400 text-sm">Percentage profit from total sales</div>
                         </div>
                       </div>

                       {/* Progress bars */}
                       <div className="h-8 w-full flex gap-1">
                         {Array.from({ length: 24 }).map((_, i) => (
                           <div 
                             key={i}
                             className={`flex-1 rounded ${i < 14 ? 'bg-gradient-to-t from-blue-500 to-purple-600' : 'bg-gray-700'}`}
                           />
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Transaction Table - EXACT styling */}
                 <div className="col-span-full bg-gray-900/80 rounded-lg border border-gray-800 overflow-hidden">
                   <div className="p-6 border-b border-gray-800">
                     <div className="flex items-center justify-between">
                       <h3 className="text-lg font-semibold text-gray-100">Recent Transactions</h3>
                       <div className="flex items-center gap-3">
                         <div className="p-2 rounded-lg hover:bg-gray-800/50 cursor-default">
                           <Filter className="h-4 w-4 text-gray-400" />
                         </div>
                         <div className="p-2 rounded-lg hover:bg-gray-800/50 cursor-default">
                           <Download className="h-4 w-4 text-gray-400" />
                         </div>
                       </div>
                     </div>
                   </div>

                   <div className="overflow-x-auto">
                     <table className="w-full">
                       <thead>
                         <tr className="border-b border-gray-800">
                           <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Customer</th>
                           <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Amount</th>
                           <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Status</th>
                           <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Payment</th>
                           <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Actions</th>
                         </tr>
                       </thead>
                       <tbody>
                         {[
                           { id: '1', name: 'Jack Alfredo', amount: 316.0, status: 'paid', email: 'jack@example.com', paidBy: 'mastercard' },
                           { id: '2', name: 'Maria Gonzalez', amount: 253.4, status: 'pending', email: 'maria.g@example.com', paidBy: 'visa' },
                           { id: '3', name: 'John Doe', amount: 852.0, status: 'paid', email: 'john.doe@example.com', paidBy: 'mastercard' },
                           { id: '4', name: 'Emily Carter', amount: 889.0, status: 'pending', email: 'emily.carter@example.com', paidBy: 'visa' },
                           { id: '5', name: 'David Lee', amount: 723.16, status: 'paid', email: 'david.lee@example.com', paidBy: 'mastercard' }
                         ].map((transaction) => (
                           <tr key={transaction.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                             <td className="py-4 px-6">
                               <div className="flex items-center gap-3">
                                 <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-medium">
                                   {transaction.name.split(' ').map(n => n[0]).join('')}
                                 </div>
                                 <div>
                                   <div className="text-sm font-medium text-gray-100">{transaction.name}</div>
                                   <div className="text-xs text-gray-400">{transaction.email}</div>
                                 </div>
                               </div>
                             </td>
                             <td className="py-4 px-6">
                               <div className="text-sm font-medium text-gray-100">${transaction.amount.toFixed(2)}</div>
                             </td>
                             <td className="py-4 px-6">
                               <span className={cn(
                                 "px-3 py-1 rounded-full text-xs font-medium",
                                 transaction.status === 'paid' ? "bg-green-900/30 text-green-300" :
                                 "bg-amber-900/30 text-amber-300"
                               )}>
                                 {transaction.status}
                               </span>
                             </td>
                             <td className="py-4 px-6">
                               <div className="flex items-center gap-2">
                                 <div className="h-6 w-9 rounded bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                   <span className="text-xs font-medium text-white">MC</span>
                                 </div>
                                 <span className="text-sm text-gray-400">{transaction.paidBy}</span>
                               </div>
                             </td>
                             <td className="py-4 px-6">
                               <div className="p-1.5 rounded hover:bg-gray-800/50 cursor-default">
                                 <MoreVertical className="h-4 w-4 text-gray-400" />
                               </div>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   </div>

                   {/* Pagination - EXACT styling */}
                   <div className="flex items-center justify-between gap-3 px-6 py-4">
                     <div className="text-gray-400 text-sm">
                       Showing <span className="font-medium">1 to 5</span> of <span className="font-medium">25</span> entries
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/50 text-sm font-medium cursor-default">
                         Previous
                       </div>
                       <div className="px-3 py-1.5 rounded-lg bg-blue-900/30 text-blue-300 border border-blue-800 text-sm font-medium cursor-default">
                         1
                       </div>
                       <div className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/50 text-sm font-medium cursor-default">
                         2
                       </div>
                       <div className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/50 text-sm font-medium cursor-default">
                         3
                       </div>
                       <div className="px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/50 text-sm font-medium cursor-default">
                         Next
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </main>

             {/* Footer - EXACT template design */}
             <footer className="border-t border-gray-800 bg-gray-900/90 px-6 py-4">
               <div className="h-4"></div>
             </footer>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-[#8A8C96]">
            We build custom automation systems complete with dashboards, monitoring, and business-specific functionalities.
          </p>
        </div>
      </div>
    </section>
  )
}