interface Course {
  code: string;
  title: string;
}

interface Institution {
  name: string;
  courses: Course[];
}

const institutions: Institution[] = [
  {
    name: "Virginia Tech",
    courses: [
      { code: "CS 2114", title: "Software Design and Data Structures" },
      { code: "CS 2104", title: "Problem Solving in Computer Science" },
      { code: "ECE 2574", title: "Data Structures and Algorithms" },
    ],
  },
  {
    name: "Central Piedmont Community College",
    courses: [
      { code: "CSC 134", title: "C# Programming" },
      { code: "NET 125", title: "Network Administration" },
      { code: "SEC 110", title: "Security Concepts" },
    ],
  },
  {
    name: "High School",
    courses: [
      { code: "CS 101", title: "Intro to Computer Science" },
      { code: "CYBER 201", title: "Cybersecurity Fundamentals" },
    ],
  },
];

export default function Coursework() {
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

        {/* Institution boxes */}
        <div className="flex flex-col gap-12">
          {institutions.map((inst) => (
            <div key={inst.name}>
              {/* Institution label + divider */}
              <div className="flex items-center gap-4 mb-6">
                <p className="text-zinc-500 font-semibold uppercase tracking-wider text-xs whitespace-nowrap">
                  {inst.name}
                </p>
                <div className="h-px bg-zinc-800 flex-1" />
              </div>

              {/* Course rows */}
              <div className="flex flex-col gap-6">
                {inst.courses.map((course) => (
                  <div key={course.code} className="flex items-center gap-4">
                    {/* Course code badge, standing in for the logo square */}
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <span className="text-orange-500 font-mono text-[10px] font-semibold leading-none text-center px-1">
                        {course.code}
                      </span>
                    </div>

                    {/* Title + code */}
                    <div>
                      <h4 className="text-white font-medium text-base leading-snug">
                        {course.title}
                      </h4>
                      <p className="text-orange-400/80 text-sm">{course.code}</p>
                    </div>
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
