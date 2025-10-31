import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            <span>Innovating Technology in Rwanda</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Building the Future of Software in <span className="text-primary">Rwanda</span>
          </h1>

          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Nuru Labs Ltd delivers cutting-edge software solutions that empower businesses across Rwanda. From custom
            applications to our flagship Jambo platform, we transform ideas into reality.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href="#services">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a href="https://jambo.rw" target="_blank" rel="noopener noreferrer">
                <Code2 className="mr-2 h-4 w-4" />
                Visit Jambo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
