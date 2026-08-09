// About Me page
// MDX https://mdxjs.com/playground/

import '@/app/globals.css'
import Image from 'next/image'
import Biography from '@/app/components/Biography'

export const metadata = {
  title: "Brady's Website - About Me",
  icons: {
    icon: '/b_icon_new.ico',
  },
  openGraph: {
    title: "Brady's Website",
    description: "Explore my experiences, projects, skills, and learn more about me.",
    url: 'https://bradypcook.github.io',
    siteName: "Brady's Website",
    type: 'website',
    locale: 'en_US',
  },
}
export default function AboutMePage() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      <Biography 
          boxes={[
            {
              image: "/my_picture2.jpg",
              header: "Hello again!",
              description: "As you may know, I'm Brady (the designer of this site). I'm currently a student at Virginia Tech (Go Hokies!) studying Cybersecurity, focusing on a career in computer networking  (but coding and doing other tech stuff in the meantime). In my spare time, I like to play video games, exercise, and learn new things. Feel free to check out my certifications & socials below, or send me an email!",
              secondaryHeader: "Check out all my socials below!",
              github: "https://github.com/bradypcook",
              linkedin: "https://linkedin.com/in/bradypcook",
              email: "bradyc05@vt.edu",
              instagram: 'https://www.instagram.com/brady.cook.7/',
              spotify: 'https://open.spotify.com/user/bcook468',
              strava: 'https://www.strava.com/athletes/92112180',
              handshake: 'https://vt.joinhandshake.com/profiles/bradycook',
            
              certifications: [
                { svg: 
                  <a href="https://www.credly.com/badges/86ccadca-9429-4734-b064-57870e5c4254/public_url" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg_collection/A+.svg" alt="CompTIA A+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/>
                  </a>,
                  label: "CompTIA A+",
                },
                { svg: 
                  <a href="https://www.credly.com/badges/c0c41775-b6e2-4b81-a4d7-c2c6a5e4584b/public_url" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg_collection/Network+.svg" alt="CompTIA Net+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
                  </a>, 
                  label: "CompTIA Network+"
                },
                { svg: 
                  <a href="https://www.credly.com/badges/cdb78fa7-8f4d-45f8-a0a9-775b02546bc7/public_url" target="_blank" rel="noopener noreferrer">
                    <Image src="/svg_collection/Security+.svg" alt="CompTIA Net+" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
                  </a>,
                  label: "CompTIA Security+",
                },
                { svg:
                  <a href="https://www.credly.com/badges/ebbbbbc4-d0c4-4c7f-88e3-a821d66d2cd1/public_url" target="_blank" rel="noopener noreferrer"> 
                    <Image src="/svg_collection/cisco_logo.svg" alt="CCNA" width={100} height={100} className='mx-auto !max-w-none hover:opacity-85'/> 
                  </a>,
                  label: "Cisco CCNA",
                },
              ],  
            },
          ]}
          />
    </main>
  )
}