import React from "react";
import Link from "next/link";

import {
  ArrowLeft,
  ExternalLink,
  Code2,
  Lightbulb,
  Wrench,
  Rocket,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";


const projects = {
  "qurbani-hat": {
    name: "Qurbani Hat",
    image: "/projects/hat.png",

    description:
      "A modern and responsive online Qurbani marketplace that allows users to browse and book healthy Qurbani animals from trusted farmers across Bangladesh.",

    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
      "DaisyUI",
    ],

    liveLink: "https://qurbani-hat-bice.vercel.app/",
    githubLink: "https://github.com/ela336/qurbani-hat",

    challenges: [
      "Implementing secure authentication and protected routes.",
      "Managing animal browsing, details, and booking functionality.",
      "Creating a responsive interface that works smoothly across devices.",
      "Connecting the application with MongoDB for application data.",
    ],

    improvements: [
      "Add online payment integration.",
      "Add farmer dashboards for managing animals.",
      "Improve search and filtering functionality.",
      "Add order and booking notifications.",
    ],
  },

  "keen-keeper": {
    name: "Keen Keeper",
    image: "/projects/keen.png",

    description:
      "A modern React-based communication and relationship management application for tracking calls, messages, and video interactions with friends.",

    technologies: [
      "React.js",
      "React Router",
      "Context API",
      "Tailwind CSS",
      "Recharts",
      "Vite",
    ],

    liveLink: "https://keen-keeper-rho-mocha.vercel.app/",
    githubLink: "https://github.com/ela336/keen-keeper",

    challenges: [
      "Managing communication data across different components.",
      "Creating interactive statistics and visual charts.",
      "Building a responsive dashboard-style interface.",
      "Keeping the application structure organized as features grew.",
    ],

    improvements: [
      "Add authentication and user accounts.",
      "Add cloud database support.",
      "Add real-time communication tracking.",
      "Add more advanced analytics and reports.",
    ],
  },

  "github-issue-tracker": {
    name: "GitHub Issue Tracker",
    image: "/projects/issue.png",

    description:
      "A responsive issue management application built with React that helps users manage, search, filter, and monitor project issues.",

    technologies: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "Recharts",
      "React Icons",
      "Vite",
    ],

    liveLink: "https://ela336.github.io/Github-Issue-Tracker/",
    githubLink: "https://github.com/ela336/Github-Issue-Tracker",

    challenges: [
      "Implementing issue filtering between All, Open, and Closed states.",
      "Creating reusable issue cards and UI components.",
      "Building interactive statistics and visual analytics.",
      "Making the application responsive for mobile devices.",
    ],

    improvements: [
      "Add backend persistence for issues.",
      "Add authentication and user roles.",
      "Add real-time issue updates.",
      "Add comments and issue assignment features.",
    ],
  },
};

const ProjectDetails = async ({ params }) => {
  const { id } = await params;

  const project = projects[id];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F8ECD2] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-playfair text-5xl font-semibold text-[#0D0C22]">
            Project Not Found
          </h1>

          <p className="mt-4 text-[#0D0C22]/60">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/#projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D0C22] px-6 py-3 text-sm font-medium text-[#FEFAF2] transition hover:bg-[#7D7236]"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8ECD2] px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#0D0C22]/70 transition hover:text-[#7D7236]"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

          {/* Image */}
          <div className="overflow-hidden rounded-[2rem] border border-[#7D7236]/15 bg-[#FEFAF2] p-3 shadow-sm">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#EEE7C9]">
              <img
                src={project.image}
                alt={project.name}
                className="h-auto max-h-[500px] w-full object-contain"
              />
            </div>
          </div>

          {/* Intro */}
          <div>
            <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#7D7236]">
              PROJECT DETAILS
            </p>

            <h1 className="font-playfair text-5xl font-semibold italic leading-tight text-[#0D0C22] sm:text-6xl">
              {project.name}
              <span className="text-[#7D7236]">.</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-[#0D0C22]/65 sm:text-lg">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D0C22] px-6 py-3 text-sm font-medium text-[#FEFAF2] transition hover:bg-[#7D7236]"
              >
                <ExternalLink size={17} />
                Live Project
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#7D7236]/30 bg-[#FEFAF2] px-6 py-3 text-sm font-medium text-[#0D0C22] transition hover:bg-[#7D7236] hover:text-white"
              >
                <FaGithub size={18} />
                GitHub
              </a>

            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <section className="mt-20">

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE7C9]">
              <Code2 size={20} className="text-[#7D7236]" />
            </div>

            <h2 className="font-playfair text-3xl font-semibold italic text-[#0D0C22]">
              Technology Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#7D7236]/20 bg-[#FEFAF2] px-5 py-2.5 text-sm font-medium text-[#0D0C22] shadow-sm"
              >
                {technology}
              </span>
            ))}
          </div>

        </section>

        {/* Challenges + Improvements */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">

          {/* Challenges */}
          <section className="rounded-[2rem] border border-[#7D7236]/15 bg-[#FEFAF2] p-7 sm:p-9">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E1D3]">
                <Wrench size={22} className="text-[#8A6548]" />
              </div>

              <h2 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
                Challenges
              </h2>

            </div>

            <ul className="mt-7 space-y-4">
              {project.challenges.map((challenge) => (
                <li
                  key={challenge}
                  className="flex gap-3 text-sm leading-7 text-[#0D0C22]/65"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7D7236]" />
                  {challenge}
                </li>
              ))}
            </ul>

          </section>

          {/* Future Improvements */}
          <section className="rounded-[2rem] border border-[#7D7236]/15 bg-[#FEFAF2] p-7 sm:p-9">

            <div className="flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DDE9E5]">
                <Rocket size={22} className="text-[#56736B]" />
              </div>

              <h2 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
                Future Plans
              </h2>

            </div>

            <ul className="mt-7 space-y-4">
              {project.improvements.map((improvement) => (
                <li
                  key={improvement}
                  className="flex gap-3 text-sm leading-7 text-[#0D0C22]/65"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#56736B]" />
                  {improvement}
                </li>
              ))}
            </ul>

          </section>

        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center justify-center border-t border-[#7D7236]/15 pt-12 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEE7C9]">
            <Lightbulb size={25} className="text-[#7D7236]" />
          </div>

          <h2 className="mt-5 font-playfair text-2xl font-semibold italic text-[#0D0C22]">
            Interested in this project?
          </h2>

          <p className="mt-2 text-sm text-[#0D0C22]/55">
            Explore the live project or check out the source code.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">

            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0D0C22] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#7D7236]"
            >
              View Live
              <ExternalLink size={16} />
            </a>

            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#7D7236]/25 bg-[#FEFAF2] px-6 py-3 text-sm font-medium text-[#0D0C22] transition hover:bg-[#7D7236] hover:text-white"
            >
              <FaGithub size={18} />
              Source Code
            </a>

          </div>
        </div>

      </div>
    </main>
  );
};

export default ProjectDetails;