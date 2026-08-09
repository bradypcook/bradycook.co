"use client";

interface Skill {
  name: string;
  /** slug from https://simpleicons.org — used to fetch the SVG icon.
   *  If omitted or the icon doesn't exist the badge falls back to text only. */
  icon?: string;
}

interface Project {
  num: string;
  title: string;
  year: string;
  description: string;
  skills: Skill[];
  href?: string; // optional link to repo / live site
}

const projects: Project[] = [
  {
    num: "01",
    title: "HawkNode Security Network",
    year: "2024",
    description:
      "Built a fully segmented home lab with VLANs, a pfSense firewall, and Proxmox-hosted VMs for hands-on networking, security monitoring, and server administration.",
    skills: [
      { name: "Proxmox",  icon: "proxmox"  },
      { name: "pfSense",  icon: "pfsense"  },
      { name: "Linux",    icon: "linux"    },
    ],
  },
  {
    num: "02",
    title: "BIT Club Website",
    year: "2025",
    description:
      "Personal portfolio built with Next.js and Tailwind CSS, deployed on GitHub Pages. Designed to be fast, accessible, and a direct reflection of my work.",
    skills: [
      { name: "Next.js",    icon: "nextdotjs"  },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind",   icon: "tailwindcss"},
    ],
    href: "https://github.com/bradypcook/bradypcook.github.io",
  },
  {
    num: "03",
    title: "EmailSort",
    year: "2023",
    description:
      "Self-managed web hosting operation serving multiple clients — automated backups, uptime monitoring, DNS management, and a lightweight billing dashboard.",
    skills: [
      { name: "Linux",  icon: "linux"  },
      { name: "Nginx",  icon: "nginx"  },
      { name: "Bash",   icon: "gnubash"},
    ],
  },
];

/* Renders a single skill badge — icon (from Simple Icons) + name */
function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 border border-dashed border-zinc-700 hover:border-orange-500/50 rounded-lg text-xs text-zinc-300 transition-colors duration-300">
      {skill.icon && (
        /* icons are tinted via CSS filter*/
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/a1a1aa`}
          alt=""
          width={13}
          height={13}
          className="shrink-0"
          /* hide broken images silently so layout never breaks */
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
      )}
      {skill.name}
    </span>
  );
}

/* Single project row */
function ProjectRow({ project }: { project: Project }) {
  const Tag = project.href ? "a" : "div";
  const linkProps = project.href
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      className="group block border-b border-zinc-800 p-6 rounded-lg hover:border-zinc-600 hover:bg-zinc-900/60 transition-all duration-300 cursor-default"
      style={project.href ? { cursor: "pointer" } : {}}
    >
      <div className="flex items-start justify-between gap-6">
        {/* Left: meta + description + skills */}
        <div className="flex-1 space-y-3">
          {/* Title row */}
          <div className="flex items-baseline gap-3">
            <span className="text-zinc-600 font-mono text-xs shrink-0">{project.num}</span>
            <h3 className="text-lg sm:text-xl font-semibold group-hover:text-zinc-300 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-zinc-600 text-xs ml-auto shrink-0">{project.year}</span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>

          {/* Skill badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.skills.map((s) => (
              <SkillBadge key={s.name} skill={s} />
            ))}
          </div>
        </div>

        {/* Arrow — only shown when the row is a link */}
        {project.href && (
          <svg
            className="w-5 h-5 text-zinc-600 group-hover:text-[#ef8450] shrink-0 mt-1 transition-all duration-300 transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </div>
    </Tag>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 px-8 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-[#ef8450] font-semibold uppercase tracking-wider text-sm">
            Projects
          </p>
          <h2 className="text-5xl font-bold mt-4">Things I&apos;ve Built</h2>
          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            A selection of projects across networking, security, and software development.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-2">
          {projects.map((p) => (
            <ProjectRow key={p.num} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}