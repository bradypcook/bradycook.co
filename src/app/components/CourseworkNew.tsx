import Image from "next/image";

interface Course {
  code?: string;
  title: string;
}

interface Institution {
  name: string;
  logo: string;
  courses: Course[];
}

const institutions: Institution[] = [
  {
    name: "Virginia Tech",
    logo: "./third_party_logos/vtlogo.png",
    courses: [
      { code: "BIT 3554", title: "Networks, Telecom, and Security" },
      { code: "BIT 3474", title: "Data Management & Business Analytics in Python" },
      { code: "BIT 2554", title: "Linux for Business" },
      { code: "CS 1064", title: "Intro to Programming in Python" },
    ],
  },
  {
    name: "Northern Virginia Community College (Dual Enrollment)",
    logo: "./third_party_logos/nvcclogo.png",
    courses: [
      { code: "ITN 260", title: "Network Security Basics" },
      { code: "ITN 101", title: "Intro to Network Concepts" },
      { code: "ITN 107", title: "PC Hardware & Troubleshooting" },
      { code: "ITN 106", title: "Microcomputer Operating Systems" },
      { code: "ITE 152", title: "Intro to Digital & Information Systems" },
      { code: "ITN 157", title: "WAN Tech - CISCO" },
      { code: "ITN 156", title: "Enterprise Networking & Security Automation" },
      { code: "ITN 155", title: "Switching, Wireless, and WAN" },
      { code: "ITN 154", title: "Network Fundamentals: Cisco" },
    ],
  },
  {
    name: "Riverside High School & Academies of Loudoun",
    logo: "./third_party_logos/riverside+academieslogo.png",
    courses: [
      { code: "MATA Cyber I & II DE Sem", title: "MATA Cybersecurity Pathway" },
      { code: "MATA CISCO I-IV DE", title: "MATA Cisco Networking Pathway" },
      { title: "Introduction to Cybersecurity" },
    ],
  },
];

export default function RelatedCourseworkNew() {
  return (
    <section id="coursework" className="py-32 px-8">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm">
            Coursework
          </p>
          <h2 className="text-5xl font-bold mt-4">Relevant Coursework</h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Classes that shaped how I think about software, systems, and security.
          </p>
        </div>

        {/* Institution cards */}
        <div className="flex flex-col gap-8">
          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-[#ef8450] transition-colors duration-300"
            >
              {/* Card header — logo + school name */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-800">
                <div className="relative shrink-0 w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src={inst.logo}
                    alt={inst.name}
                    width={28}
                    height={28}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{inst.name}</h3>
              </div>

              {/* Course rows nested inside the card */}
              <div className="flex flex-col gap-5">
                {inst.courses.map((course) => (
                  <div key={course.code} className="flex items-baseline gap-3">
                    <span className="text-[#ef8450] font-mono text-xs font-semibold shrink-0 w-20">
                      {course.code}
                    </span>
                    <span className="text-zinc-300 text-sm">{course.title}</span>
                  </div>
                ))}

                {inst.courses.length === 0 && (
                  <p className="text-zinc-600 text-sm">No courses added yet.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
