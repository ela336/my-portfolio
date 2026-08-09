import React from "react";

const Aboutme = () => {
  return (
    <section
      id="about"
      className="bg-[#FEFAF2] px-6 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div >
          <p className="mb-3 text-sm font-medium tracking-[0.2em] text-[#7D7236]">
            GET TO KNOW ME
          </p>

          <h2 className="font-playfair text-4xl font-semibold italic text-[#0D0C22] sm:text-5xl">
            About Me<span className="text-[#7D7236]">...</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Side */}
          <div className="space-y-5">

            <p className="text-base leading-7 text-[#0D0C22]/75 sm:text-lg">
              I'm Israt Jahan, a web developer who enjoys turning ideas
              into clean, useful, and engaging digital experiences.
            </p>

            <p className="text-base leading-7 text-[#0D0C22]/75 sm:text-lg">
              My programming journey started with curiosity and gradually
              became a passion for building web applications and solving
              real-world problems.
            </p>

            <p className="text-base leading-7 text-[#0D0C22]/75 sm:text-lg">
              I enjoy learning new technologies, creating intuitive interfaces,
              and continuously improving my problem-solving skills.
            </p>

            <p className="text-base leading-7 text-[#0D0C22]/75 sm:text-lg">
              Outside of coding, I enjoy creative activities, music, exploring
              new ideas, and spending time away from the screen.
            </p>

          </div>

          {/* Right Side */}
          <div className="relative mx-auto w-full max-w-md">

            {/* Decorative Circle */}
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#7D7236]/30" />

            <div className="space-y-5">

              {/* Card 1 */}
              <div className="animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-[#7D7236]/15 bg-[#F8ECD2] p-6 shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
                   What I Enjoy
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0D0C22]/70">
                  Building meaningful web experiences, solving challenging
                problems, learning new technologies, and turning ideas into
                practical solutions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-[#7D7236]/15 bg-[#F8ECD2] p-6 shadow-sm [animation-delay:1s]">
                <h3 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
                   My Approach
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0D0C22]/70">
                   I believe in learning by building, staying curious, paying
                attention to details, and improving a little with every
                project.
                </p>
              </div>

              {/* Card 3 */}
              <div className="animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-[#7D7236]/15 bg-[#F8ECD2] p-6 shadow-sm [animation-delay:2s]">
                <h3 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
                   Beyond Code
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#0D0C22]/70">
                    I enjoy creative activities, discovering new things, relaxing
                with music, and making time for life outside the screen.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Aboutme;