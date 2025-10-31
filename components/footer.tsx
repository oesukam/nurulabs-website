import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer id="about" className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-xl font-bold">Nuru Labs Ltd</span>
            </div>
            <p className="mb-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Leading IT company in Rwanda, building innovative software solutions that empower businesses and transform
              industries. From custom development to our flagship Jambo platform.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Code2 className="h-4 w-4" />
              <span>Built with excellence in Kigali, Rwanda</span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="transition-colors hover:text-primary">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-primary">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-primary">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#jambo" className="transition-colors hover:text-primary">
                  Jambo Platform
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="transition-colors hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nuru Labs Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
