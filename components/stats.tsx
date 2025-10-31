import { Users, Building2, Award, TrendingUp } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Building2,
      value: "50+",
      label: "Businesses Served",
    },
    {
      icon: Users,
      value: "100+",
      label: "Gym Members Managed",
    },
    {
      icon: Award,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: TrendingUp,
      value: "99%",
      label: "Client Satisfaction",
    },
  ]

  return (
    <section className="border-y border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
