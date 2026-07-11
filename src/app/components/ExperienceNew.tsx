import Image from "next/image";

interface ExperienceItem {
  company: string;
  role: string;
  years: string;
  description: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "XPO",
    role: "Network Engineer Intern",
    years: "2026",
    description:
      "Supporting enterprise networking operations and infrastructure initiatives. Assisting with network monitoring, troubleshooting, and operational improvements within a large-scale transportation environment.",
    logo: "/imgs/xpo.svg",
  },
  {
    company: "Aramark",
    role: "IT Intern",
    years: "August 2025 – May 2026",
    description:
      "As an IT intern for Aramark, I made sure our POS systems operated for over 45,000-50,000+ customers during Virginia Tech Athletics gamedays.",
    logo: "/third_party_logos/aramark_logo_transparent.png",
  },
  {
    company: "Virginia Tech BIT Club",
    role: "Internal Vice President",
    years: "April 2026 – Present",
    description:
      "As Internal VP, my main responsibliities are ensuring our organization meets Virginia Tech's Registered Student Organization (RSO) guidelines",
    logo: "/third_party_logos/bit_club_logo.png",
  },
  {
    company: "GMU CS Club HackFax CTF",
    role: "CTF Developer",
    years: "October 2024 – April 2025",
    description:
      "I have helped out with George Mason University's CS Club annual hackathon, called HackFax. More specifically, I helped out in the Networking portion CTF (Capture the Flag) competition where users solve challenges in order to earn points. The video below explains the challenges in the CTF and helps highlight my contributions:",
    // https://www.youtube.com/embed/5FIlNuWnZ7Q
    logo: "/third_party_logos/hackfax_logo.png",
  },
  {
    company: "Halvex Hosting",
    role: "Frontend Developer Intern",
    years: "February 2023 – August 2025",
    description:
      "I completed an Internship for Halvex Hosting where I created & updated webpages (like I'm doing with this one!).",
    // https://www.youtube.com/embed/5FIlNuWnZ7Q
    logo: "/third_party_logos/halvex_logo.png",
  },
  {
    company: "Computer Science Honor Society (CSHS)",
    role: "Member",
    years: "October 2022 – June 2024",
    description:
      "While enrolled at the Academies of Loudoun (a local STEM magnet school), I was a member of the school's CSHS Chapter. During that time, I helped carry out the AcademiesHacks hackathon, as I taught a networking workshop, as well as guide other workshops. On top of that, I also assisted with the AcademiesHacks CTF by creating challenges and being on site to troubleshoot. ",
    logo: "/third_party_logos/cshs_logo.png",
  },
  {
    company: "CyberPatriot",
    role: "Team Member & Competitor",
    years: "August 2022 – December 2024",
    description:
      "As a part of my Cybersecurity class, students participate in the Air Force Association's Cyberpatriot Competition, where teams work together to harden virtual machines and secure networks. During the two years that my team participated, we reached the Gold and Platinum tiers (which are the top 66% and 33%, respectively). ",
    logo: "/third_party_logos/cyberpatriot_logo.png",
  },
];


export default function ExperienceNew() {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm">
            Experience
          </p>
          <h2 className="text-5xl font-bold mt-4">My Career Journey</h2>
          {/**&apos;*/}
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            A look at some of my professional, technical, and leadership
            experiences so far.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line — hidden on mobile, shown md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-zinc-800" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${exp.company}-${exp.role}`}
                  className="relative flex items-center md:gap-0 gap-6 mb-12 md:mb-0"
                >
                  {/* ── MOBILE layout (stacked, logo left) ── */}
                  <div className="flex md:hidden items-start gap-5 w-full">
                    {/* Logo bubble */}
                    <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-[#ef8450] flex items-center justify-center overflow-hidden">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    {/* Card */}
                    <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-[#ef8450] transition-colors duration-300">
                      <div className="flex justify-between items-start mb-1 gap-2 flex-wrap">
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <span className="text-[#ef8450] font-medium text-sm shrink-0">
                          {exp.years}
                        </span>
                      </div>
                      <p className="text-zinc-300 font-semibold text-sm mb-3">
                        {exp.role}
                      </p>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* ── DESKTOP layout (alternating) ── */}
                  <div className="hidden md:grid md:grid-cols-[1fr_80px_1fr] w-full items-center py-10">

                    {/* Left slot */}
                    {isLeft ? (
                      /* Card on the left */
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#ef8450] transition-colors duration-300 mr-4">
                        <div className="flex justify-between items-start mb-1 gap-4">
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          <span className="text-[#ef8450] font-medium shrink-0">
                            {exp.years}
                          </span>
                        </div>
                        <p className="text-zinc-300 font-semibold mb-3">
                          {exp.role}
                        </p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                          {exp.description}
                        </p>
                      </div>
                    ) : (
                      /* Empty right-side placeholder */
                      <div />
                    )}

                    {/* Center — logo bubble sitting on the line */}
                    <div className="flex justify-center">
                      <div className="w-14 h-14 rounded-full bg-zinc-900 border-2 border-[#ef8450] flex items-center justify-center overflow-hidden z-10 shadow-lg shadow-black/40">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      /* Card on the right */
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#ef8450] transition-colors duration-300 ml-4">
                        <div className="flex justify-between items-start mb-1 gap-4">
                          <h3 className="text-2xl font-bold">{exp.company}</h3>
                          <span className="text-[#ef8450] font-medium shrink-0">
                            {exp.years}
                          </span>
                        </div>
                        <p className="text-zinc-300 font-semibold mb-3">
                          {exp.role}
                        </p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                          {exp.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom line cap */}
          <div className="hidden md:flex justify-center mt-2">
            <div className="w-3 h-3 rounded-full bg-[#ef8450] opacity-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
