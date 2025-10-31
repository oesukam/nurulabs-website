import type { MetadataRoute } from "next"

const BASE_URL = "https://www.nurulabs.rw"
const LAST_MODIFIED = new Date()

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

interface SitemapEntry {
  path: string
  changeFrequency: ChangeFrequency
  priority: number
}

const routes: SitemapEntry[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "#services", changeFrequency: "monthly", priority: 0.8 },
  { path: "#jambo", changeFrequency: "weekly", priority: 0.9 },
  { path: "#team", changeFrequency: "monthly", priority: 0.7 },
  { path: "#about", changeFrequency: "monthly", priority: 0.6 },
  { path: "#contact", changeFrequency: "monthly", priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path ? `${BASE_URL}/${route.path}` : BASE_URL,
    lastModified: LAST_MODIFIED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
