"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faSpotify,
  faStrava,
} from "@fortawesome/free-brands-svg-icons";

const certifications = [
  {
    src: "/svg_collection/A+.svg",
    alt: "CompTIA A+",
    label: "CompTIA A+",
    href: "https://www.credly.com/badges/86ccadca-9429-4734-b064-57870e5c4254/public_url",
  },
  {
    src: "/svg_collection/Network+.svg",
    alt: "CompTIA Network+",
    label: "CompTIA Network+",
    href: "https://www.credly.com/badges/c0c41775-b6e2-4b81-a4d7-c2c6a5e4584b/public_url",
  },
  {
    src: "/svg_collection/Security+.svg",
    alt: "CompTIA Security+",
    label: "CompTIA Security+",
    href: "https://www.credly.com/badges/cdb78fa7-8f4d-45f8-a0a9-775b02546bc7/public_url",
  },
  {
    src: "/svg_collection/cisco_logo.svg",
    alt: "Cisco CCNA",
    label: "Cisco CCNA",
    href: "https://www.credly.com/badges/ebbbbbc4-d0c4-4c7f-88e3-a821d66d2cd1/public_url",
  },
];

const socials = [
  {
    href: "https://vt.joinhandshake.com/profiles/bradycook",
    label: "Handshake",
    type: "handshake" as const,
  },
  { href: "https://github.com/bradypcook",               label: "GitHub",    type: "github"    as const },
  { href: "https://linkedin.com/in/bradypcook",          label: "LinkedIn",  type: "linkedin"  as const },
  { href: "https://www.instagram.com/brady.cook.7/",     label: "Instagram", type: "instagram" as const },
  { href: "https://open.spotify.com/user/bcook468",      label: "Spotify",   type: "spotify"   as const },
  { href: "https://www.strava.com/athletes/92112180",    label: "Strava",    type: "strava"    as const },
];

const iconClass: Record<string, string> = {
  github:    "hover:text-zinc-400",
  linkedin:  "hover:text-[#4682B4]",
  instagram: "hover:text-pink-400",
  spotify:   "hover:text-green-400",
  strava:    "hover:text-orange-400",
};

const faIcons = {
  github:    faGithub,
  linkedin:  faLinkedin,
  instagram: faInstagram,
  spotify:   faSpotify,
  strava:    faStrava,
};

export default function About() {
  return (
    <section id="about" className="py-32 px-8 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm">
            About
          </p>
          <h2 className="text-5xl font-bold mt-4">A Bit About Me</h2>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 flex flex-col items-center gap-8">

          {/* Photo */}
          <Image
            src="/my_picture2.jpg"
            alt="Brady Cook"
            width={160}
            height={160}
            className="rounded-full object-cover border-2 border-zinc-700"
          />

          {/* Bio */}
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-bold">Hi there!</h3>
            <p className="text-zinc-400 leading-relaxed max-w-xl">
              As you may know, I&apos;m Brady (the designer of this site). I&apos;m currently
              a student at Virginia Tech (Go Hokies!) studying Cybersecurity, focusing on a
              career in computer networking and doing other tech stuff in the
              meantime. Outside of school and work, I like to play video games, exercise, and learn
              new things. Feel free to check out my certifications &amp; or connect with me on my socials!
            </p>
          </div>

          <div className="w-full border-t border-zinc-800" />

          {/* Certifications */}
          <div className="w-full">
            <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm text-center mb-8">
              Cybersecurity Certifications
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert) => (
                <a
                  key={cert.label}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 group"
                >
                  <div className="w-20 h-20 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-200">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-200 font-medium text-center transition-colors duration-200">
                    {cert.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full border-t border-zinc-800" />

          {/* Socials */}
          <div className="w-full text-center space-y-6">
            <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm">
              Find Me Online
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {socials.map((s) => (
                s.type === "handshake" ? (
                  <a
                    key="handshake"
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Image
                      src="/third_party_logos/Handshake_Wordmark_White_RGB.png"
                      alt="Handshake"
                      width={110}
                      height={30}
                      className="object-contain opacity-60 group-hover:opacity-100 transition-all duration-200 group-hover:[filter:sepia(1)_saturate(8)_hue-rotate(30deg)]"
                    />
                  </a>
                ) : (
                  <a
                    key={s.type}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`text-zinc-300 text-3xl transition-colors duration-200 ${iconClass[s.type]}`}
                  >
                    <FontAwesomeIcon icon={faIcons[s.type as keyof typeof faIcons]} />
                  </a>
                )
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}