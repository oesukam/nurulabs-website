import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Dumbbell, Users, Calendar, CreditCard, BarChart3, Bell } from "lucide-react"

export function JamboSection() {
  const features = [
    {
      icon: Users,
      title: "Member Management",
      description: "Comprehensive member profiles and tracking",
    },
    {
      icon: Calendar,
      title: "Class Scheduling",
      description: "Easy booking and schedule management",
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Automated billing and payment tracking",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights and reporting",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Automated reminders and updates",
    },
    {
      icon: Dumbbell,
      title: "Equipment Tracking",
      description: "Inventory and maintenance management",
    },
  ]

  return (
    <section id="jambo" className="bg-primary py-20 text-primary-foreground md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium">
              <Dumbbell className="h-4 w-4" />
              <span>Our Flagship Product</span>
            </div>

            <h2 className="mb-6 text-balance text-3xl font-bold md:text-5xl">Jambo: Gym Management Made Simple</h2>

            <p className="mb-8 text-pretty text-lg leading-relaxed text-primary-foreground/90">
              Jambo is Rwanda's leading gym management platform, designed specifically for fitness centers across the
              country. Streamline operations, engage members, and grow your business with our comprehensive PaaS
              solution.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>Cloud-based platform accessible anywhere</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>Mobile apps for members and staff</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>Integrated payment solutions</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>24/7 customer support</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                <a href="https://jambo.rw" target="_blank" rel="noopener noreferrer">
                  Visit Jambo Platform
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                asChild
              >
                <a href="#contact">Contact Sales</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Card key={index} className="border-primary-foreground/10 bg-primary-foreground/5 backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
                    <feature.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="mb-2 font-semibold text-primary-foreground">{feature.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
