import { Users, Linkedin, Github, Mail, Briefcase, MapPin, Clock } from "lucide-react"

const teamMembers = [
  {
    name: "Jean Claude Niyomugabo",
    role: "CEO & Founder",
    image: "/professional-african-male-ceo.jpg",
    bio: "Visionary leader with 10+ years in software development",
    social: {
      linkedin: "#",
      github: "#",
      email: "jean@nurulabs.rw",
    },
  },
  {
    name: "Grace Uwase",
    role: "CTO",
    image: "/professional-african-female-cto.jpg",
    bio: "Tech expert specializing in cloud architecture and PaaS solutions",
    social: {
      linkedin: "#",
      github: "#",
      email: "grace@nurulabs.rw",
    },
  },
  {
    name: "Patrick Mugisha",
    role: "Lead Developer",
    image: "/professional-african-male-developer.jpg",
    bio: "Full-stack developer passionate about building scalable solutions",
    social: {
      linkedin: "#",
      github: "#",
      email: "patrick@nurulabs.rw",
    },
  },
  {
    name: "Aline Umutoni",
    role: "Product Manager",
    image: "/professional-african-female-product-manager.jpg",
    bio: "Product strategist focused on user-centric design and innovation",
    social: {
      linkedin: "#",
      github: "#",
      email: "aline@nurulabs.rw",
    },
  },
]

const openPositions = [
  {
    title: "Senior Full-Stack Developer",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description: "Join our team to build scalable software solutions using modern technologies.",
  },
  {
    title: "UI/UX Designer",
    location: "Kigali, Rwanda",
    type: "Full-time",
    description: "Create beautiful and intuitive user experiences for our products.",
  },
  {
    title: "DevOps Engineer",
    location: "Kigali, Rwanda / Remote",
    type: "Full-time",
    description: "Help us build and maintain robust cloud infrastructure for our PaaS solutions.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Talented professionals dedicated to building innovative software solutions for Rwanda and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-square overflow-hidden bg-gray-200">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to help us build the future of software in Rwanda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{position.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm">{position.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm">{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-6">{position.description}</p>
                <a
                  href="#contact"
                  className="inline-block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
