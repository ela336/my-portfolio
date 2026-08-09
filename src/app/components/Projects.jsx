"use client";

import React from "react";
import Link from "next/link";

import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import {
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiDaisyui,
  SiVite,
} from "react-icons/si";

const projects = [
  {
    id: "qurbani-hat",
    title: "Qurbani Hat",
    category: "Full Stack Web Application",

    description:
      "A modern Qurbani marketplace where users can browse healthy animals, view detailed information, and book their preferred Qurbani animal.",

    image: "/projects/hat.png",

    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "DaisyUI",
        icon: SiDaisyui,
      },
      {
        name: "Better Auth",
        icon: Sparkles,
      },
    ],

    live: "https://qurbani-hat-bice.vercel.app/",
    github: "https://github.com/ela336/qurbani-hat",
    accent: "#7D7236",
  },

  {
    id: "keen-keeper",
    title: "Keen Keeper",
    category: "React Web Application",

    description:
      "A communication tracking application that helps users organize interactions with friends through calls, messages, video chats, analytics, and timelines.",

    image: "/projects/keen.png",

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "Recharts",
        icon: Sparkles,
      },
    ],

    live: "https://keen-keeper-rho-mocha.vercel.app/",
    github: "https://github.com/ela336/keen-keeper",
    accent: "#56736B",
  },

  {
    id: "github-issue-tracker",
    title: "GitHub Issue Tracker",
    category: "Issue Management",

    description:
      "A responsive issue management application for creating, searching, filtering, and monitoring project issues with priorities and interactive statistics.",

    image: "/projects/issue.png",

    technologies: [
      {
        name: "React",
        icon: SiReact,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "React Router",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
    ],

    live: "https://ela336.github.io/Github-Issue-Tracker/",
    github: "https://github.com/ela336/Github-Issue-Tracker",
    accent: "#8A6548",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#FEFAF2] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            Heading
        ========================== */}

        <div className="mb-10 max-w-2xl">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#7D7236]" />

            <p className="text-xs font-semibold tracking-[0.2em] text-[#7D7236]">
              SELECTED WORK
            </p>
          </div>

          <h2 className="font-playfair text-4xl font-semibold italic leading-tight text-[#0D0C22] sm:text-5xl">
            Things I've built
            <span className="text-[#7D7236]">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#0D0C22]/60 sm:text-base">
            A selection of projects where I turned ideas into functional,
            responsive, and user-focused digital experiences.
          </p>

        </div>


        {/* =========================
            Project Grid
        ========================== */}

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.id}
              className="group overflow-hidden rounded-[1.35rem] border border-[#7D7236]/15 bg-[#F8ECD2] shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg"
            >

              {/* =========================
                  Project Image
              ========================== */}

              <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-[#EEE7C9] p-3 sm:h-[200px]">

                {/* Image frame */}

                <div className="relative h-full w-full overflow-hidden rounded-xl bg-[#FBF4E4] shadow-sm">

                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Soft overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-[#0D0C22]/0 transition-all duration-500 group-hover:bg-[#0D0C22]/5" />

                </div>


                {/* Live Button */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="absolute right-5 top-5 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-[#FEFAF2]/95 text-[#0D0C22] opacity-0 shadow-md transition-all duration-300 hover:bg-[#7D7236] hover:text-[#FEFAF2] group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ExternalLink size={16} />
                </a>

              </div>


              {/* =========================
                  Card Content
              ========================== */}

              <div className="p-5">

                {/* Category */}

                <p
                  className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: project.accent }}
                >
                  {project.category}
                </p>


                {/* Title */}

                <h3 className="font-playfair text-[22px] font-semibold italic leading-tight text-[#0D0C22]">

                  {project.title}

                  <span style={{ color: project.accent }}>
                    .
                  </span>

                </h3>


                {/* Description */}

                <p className="mt-2.5 line-clamp-3 text-[13px] leading-5.5 text-[#0D0C22]/60">
                  {project.description}
                </p>


                {/* =========================
                    Technology Stack
                ========================== */}

                <div className="mt-4 flex flex-wrap gap-1.5">

                  {project.technologies.map((tech) => {

                    const TechIcon = tech.icon;

                    return (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1.5 rounded-full border border-[#7D7236]/10 bg-[#F8ECD2]/70 px-2.5 py-1.5 transition-all duration-300 hover:border-[#7D7236]/30 hover:bg-[#F8ECD2]"
                      >

                        <TechIcon
                          size={13}
                          className="text-[#7D7236]"
                        />

                        <span className="text-[10px] font-medium text-[#0D0C22]/70">
                          {tech.name}
                        </span>

                      </div>
                    );

                  })}

                </div>


                {/* =========================
                    Bottom Actions
                ========================== */}

                <div className="mt-4 flex items-center justify-between border-t border-[#7D7236]/10 pt-3.5">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex items-center gap-1.5 text-xs font-medium text-[#0D0C22]/60 transition-colors duration-300 hover:text-[#7D7236]"
                  >
                    <FaGithub size={16} />

                    <span>
                      GitHub
                    </span>
                  </a>


                  {/* View Details */}

                  <Link
                    href={`/projects/${project.id}`}
                    className="group/details flex items-center gap-1 text-xs font-semibold text-[#0D0C22] transition-colors duration-300 hover:text-[#7D7236]"
                  >

                    <span>
                      View Details
                    </span>

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover/details:-translate-y-0.5 group-hover/details:translate-x-0.5"
                    />

                  </Link>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            Bottom Statement
        ========================== */}

        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#7D7236]/30" />

          <p className="font-playfair text-sm italic text-[#0D0C22]/50">
            More ideas are on the way
          </p>

          <span className="h-px w-8 bg-[#7D7236]/30" />

        </div>

      </div>
    </section>
  );
};

export default Projects;