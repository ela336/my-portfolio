import React from "react";
import Link from "next/link";

const Introduction = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-5rem)] bg-[#F8ECD2] px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center">

        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              Left Content
          ========================== */}
          <div className="order-2 text-center lg:order-1 lg:text-left">

            {/* Small Introduction */}
            <p className="mb-4 text-base font-medium tracking-wide text-[#7D7236] sm:text-lg">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="font-playfair text-5xl font-semibold italic leading-tight text-[#0D0C22] sm:text-6xl lg:text-7xl">
              Israt Jahan<span className="text-[#7D7236]">.</span>
            </h1>

            {/* Designation */}
            <h2 className="mt-5 text-2xl font-semibold text-[#0D0C22] sm:text-3xl">
              Software Engineer
            </h2>

            {/* Introduction */}
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#0D0C22]/70 sm:text-lg lg:mx-0">
              I build modern, responsive, and user-focused web applications
              with clean code and thoughtful design. I'm passionate about
              solving problems and turning ideas into meaningful digital
              experiences.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">

              {/* Resume Button */}
              <a
                href="#"
                className="w-full rounded-full bg-[#0D0C22] px-7 py-3.5 text-center text-base font-medium text-[#FEFAF2] transition-all duration-300 hover:bg-[#7D7236] sm:w-auto"
              >
                View Resume
              </a>

              {/* Contact Button */}
              <Link
                href="#contact"
                className="w-full rounded-full border border-[#7D7236] bg-transparent px-7 py-3.5 text-center text-base font-medium text-[#0D0C22] transition-all duration-300 hover:bg-[#7D7236] hover:text-[#FEFAF2] sm:w-auto"
              >
                Contact Me
              </Link>

            </div>
          </div>

          {/* =========================
              Right - Profile Photo
          ========================== */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">

            <div className="relative">

              {/* Decorative Background */}
              <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-[#7D7236]/30 sm:-right-5 sm:-top-5" />

              {/* Image Container */}
              <div className="relative h-[350px] w-[280px] overflow-hidden rounded-[2rem] bg-[#FEFAF2] sm:h-[430px] sm:w-[350px]">

                <img
                  src="/profile.png"
                  alt="Israt Jahan"
                  className="h-full w-full object-cover"
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;