"use client";

import React from "react";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Palette,
} from "lucide-react";

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiDaisyui,
  SiHeroui,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Modern web interfaces",
    icon: Code2,
    color: "#7D7236",
    bg: "#EEE7C9",

    skills: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#A77B00",
        bg: "#F5E3A3",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "#087EA4",
        bg: "#D4EFF6",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#171717",
        bg: "#E5E5E5",
      },
    ],
  },

  {
    title: "Backend",
    description: "Server-side development",
    icon: Server,
    color: "#8A6548",
    bg: "#F0E1D3",

    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#3F6B35",
        bg: "#D9E9D3",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "#45433D",
        bg: "#E4E1D7",
      },
      {
        name: "Better Auth",
        icon: ShieldCheck,
        color: "#754B73",
        bg: "#E8D8E5",
      },
    ],
  },

  {
    title: "Database",
    description: "Data and storage",
    icon: Database,
    color: "#56736B",
    bg: "#DDE9E5",

    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#3F6B35",
        bg: "#D4E8CE",
      },
    ],
  },

  {
    title: "UI & Styling",
    description: "Beautiful interfaces",
    icon: Palette,
    color: "#9A6855",
    bg: "#F1DDD5",

    skills: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#087EA4",
        bg: "#D4EFF6",
      },
      {
        name: "DaisyUI",
        icon: SiDaisyui,
        color: "#7D7236",
        bg: "#EEE7C9",
      },
      {
        name: "HeroUI",
        icon: SiHeroui,
        color: "#704A72",
        bg: "#E6D6E5",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#F8ECD2] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">

        {/* =========================
            Heading
        ========================== */}
        <div className="mb-10 max-w-2xl">

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#7D7236]" />

            <p className="text-sm font-medium tracking-[0.2em] text-[#7D7236]">
              MY TOOLKIT
            </p>
          </div>

          <h2 className="font-playfair text-4xl font-semibold italic leading-tight text-[#0D0C22] sm:text-5xl">
            Things I build with
            <span className="text-[#7D7236]">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-[#0D0C22]/60">
            Technologies I use to create modern, responsive, and thoughtful
            digital experiences.
          </p>
        </div>

        {/* =========================
            Skills Grid
        ========================== */}
        <div className="grid gap-4 md:grid-cols-2">

          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-[#7D7236]/15 bg-[#FEFAF2] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >

                {/* =========================
                    Category Header
                ========================== */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    {/* Category Icon */}
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: category.bg,
                      }}
                    >
                      <CategoryIcon
                        size={20}
                        strokeWidth={1.7}
                        style={{
                          color: category.color,
                        }}
                      />
                    </div>

                    {/* Category Information */}
                    <div>
                      <h3 className="font-playfair text-lg font-semibold italic text-[#0D0C22]">
                        {category.title}
                      </h3>

                      <p className="text-xs text-[#0D0C22]/50">
                        {category.description}
                      </p>
                    </div>

                  </div>

                  {/* Number */}
                  <span className="font-playfair text-2xl italic text-[#7D7236]/25">
                    0{index + 1}
                  </span>

                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-[#7D7236]/10" />

                {/* =========================
                    Technology Cards
                ========================== */}
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">

                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2.5 rounded-xl border border-[#0D0C22]/10 bg-[#FEFAF2] px-3 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7D7236]/40 hover:bg-[#F8ECD2]/50 hover:shadow-md"
                      >

                        {/* =========================
                            Technology Logo
                        ========================== */}
                        <div
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover/skill:scale-110"
                          style={{
                            backgroundColor: skill.bg,
                          }}
                        >
                          <SkillIcon
                            size={20}
                            style={{
                              color: skill.color,
                            }}
                          />
                        </div>

                        {/* Technology Name */}
                        <div className="flex flex-1 items-center justify-between">

                          <span className="text-sm font-semibold text-[#0D0C22]">
                            {skill.name}
                          </span>

                          {/* Arrow */}
                          <span className="text-base text-[#7D7236]/40 transition-all duration-300 group-hover/skill:translate-x-1 group-hover/skill:text-[#7D7236]">
                            →
                          </span>

                        </div>

                      </div>
                    );
                  })}

                </div>
              </div>
            );
          })}

        </div>

        {/* =========================
            Bottom Statement
        ========================== */}
        <div className="mt-10 flex items-center justify-center gap-3">

          <span className="h-px w-8 bg-[#7D7236]/30" />

          <p className="font-playfair text-base italic text-[#0D0C22]/55">
            Always learning, always creating
          </p>

          <span className="h-px w-8 bg-[#7D7236]/30" />

        </div>

      </div>
    </section>
  );
};

export default Skills;