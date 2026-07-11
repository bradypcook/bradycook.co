import Image from "next/image";

interface Course {
  code: string;
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
    logo: "/imgs/vt.svg",
    courses: [
      { code: "CS 2114", title: "Software Design and Data Structures" },
      { code: "CS 2104", title: "Problem Solving in Computer Science" },
      { code: "ECE 2574", title: "Data Structures and Algorithms" },
    ],
  },
  {
    name: "Northern Virginia Community College (Dual Enrollment)",
    logo: "/imgs/cpcc.svg",
    courses: [
      { code: "CSC 134", title: "C# Programming" },
      { code: "NET 125", title: "Network Administration" },
      { code: "SEC 110", title: "Security Concepts" },
    ],
  },
  {
    name: "Riverside High School & Academies of Loudoun",
    logo: "/imgs/highschool.svg",
    courses: [
      { code: "CS 101", title: "Intro to Computer Science" },
      { code: "CYBER 201", title: "Cybersecurity Fundamentals" },
    ],
  },
];

export default function RelatedCourseworkNew() {
  return (
    <section id="coursework" className="py-32 px-8">
      <div className="max-w-3xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
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
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-orange-500 transition-colors duration-300"
            >
              {/* Card header — logo + school name */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-800">
                <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src={inst.logo}
                    alt={inst.name}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">{inst.name}</h3>
              </div>

              {/* Course rows nested inside the card */}
              <div className="flex flex-col gap-5">
                {inst.courses.map((course) => (
                  <div key={course.code} className="flex items-baseline gap-3">
                    <span className="text-orange-500 font-mono text-xs font-semibold shrink-0 w-20">
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
