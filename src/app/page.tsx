import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import RelatedCourseworkNew from './components/CourseworkNew'
import ExperienceNew from './components/ExperienceNew'
import Contact from './components/Contact'

export const metadata = {
  title: "Brady Cook | Cybersecurity at Virginia Tech",
  icons: {
    icon: '/orange_bc_adobe.ico',
  },
  openGraph: {
    title: "Brady Cook | Cybersecurity at Virginia Tech",
    description: "Explore my experiences, projects, skills, and learn more about me.",
    url: 'https://bradypcook.github.io',
    siteName: "Brady's Website",
    type: 'website',
    locale: 'en_US',
  },
}
export default function HomePage() {
  return (
    <main className="bg-black text-white font-sans">
      <Hero />
      <ExperienceNew />
      <FeaturedProjects />
      <RelatedCourseworkNew />
      <Contact />
    </main>
  )
}