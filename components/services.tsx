import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Cloud, Database, Shield, Workflow } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your unique business requirements and drive growth.",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database design, optimization, and management for reliable data storage and retrieval.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security implementations to protect your data and ensure regulatory compliance.",
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description:
        "Streamline operations with intelligent automation solutions that boost efficiency and reduce costs.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">Our Services</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Comprehensive IT solutions designed to transform your business and drive digital innovation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
