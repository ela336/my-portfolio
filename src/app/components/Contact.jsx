import React from "react";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const email = "ij8319366@gmail.com";

  return (
    <section
      id="contact"
      className="bg-[#FEFAF2] px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">

        {/* =========================
            Heading
        ========================== */}
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#7D7236]" />

            <p className="text-sm font-medium tracking-[0.2em] text-[#7D7236]">
              GET IN TOUCH
            </p>

            <span className="h-px w-10 bg-[#7D7236]" />
          </div>

          <h2 className="font-playfair text-5xl font-semibold italic leading-tight text-[#0D0C22] sm:text-6xl">
            Let&apos;s work together
            <span className="text-[#7D7236]">.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#0D0C22]/65 sm:text-lg">
            Contact me here...
          </p>
        </div>

        {/* =========================
            Contact Card
        ========================== */}
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[#7D7236]/15 bg-white/70 p-7 shadow-sm sm:p-10">

          {/* =========================
              Email
          ========================== */}
          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEE7C9]">
              <Mail
                size={28}
                strokeWidth={1.7}
                className="text-[#7D7236]"
              />
            </div>

            <h3 className="mt-5 font-playfair text-2xl font-semibold italic text-[#0D0C22]">
              Email me
            </h3>

            <p className="mt-2 text-sm text-[#0D0C22]/55">
              The easiest way to reach me directly.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#7D7236]/20 bg-[#FEFAF2] px-5 py-3 text-sm font-medium text-[#0D0C22] transition-all duration-300 hover:-translate-y-1 hover:border-[#7D7236]/40 hover:bg-[#F8ECD2] hover:shadow-md"
            >
              {email}

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="text-[#7D7236]"
              />
            </a>

          </div>

          {/* =========================
              Divider
          ========================== */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#7D7236]/15" />

            <span className="text-xs font-medium tracking-[0.15em] text-[#0D0C22]/40">
              OR
            </span>

            <span className="h-px flex-1 bg-[#7D7236]/15" />
          </div>

          {/* =========================
              Social Links
          ========================== */}
          <div className="text-center">

            <h3 className="font-playfair text-2xl font-semibold italic text-[#0D0C22]">
              Find me online
            </h3>

            <p className="mt-2 text-sm text-[#0D0C22]/55">
              Connect with me through my professional profiles.
            </p>

            <div className="mt-7 flex justify-center gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/ela336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D0C22]/10 bg-[#F4F1E8] text-[#0D0C22] transition-all duration-300 hover:-translate-y-1 hover:border-[#7D7236]/30 hover:bg-[#EEE7C9] hover:text-[#7D7236] hover:shadow-md"
              >
                <FaGithub
                  size={25}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-[#0D0C22]/10 bg-[#F4F1E8] text-[#0D0C22] transition-all duration-300 hover:-translate-y-1 hover:border-[#7D7236]/30 hover:bg-[#EEE7C9] hover:text-[#7D7236] hover:shadow-md"
              >
                <FaLinkedinIn
                  size={23}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </a>

            </div>

          </div>

          {/* =========================
              Send Message Button
          ========================== */}
          <div className="mt-10 flex justify-center">

            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-[#7D7236] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6E642F] hover:shadow-lg"
            >
              <Send
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-rotate-6"
              />

              Send me a message

              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

          </div>

        </div>

        {/* =========================
            Bottom Statement
        ========================== */}
        <div className="mt-14 flex items-center justify-center gap-4">

          <span className="h-px w-12 bg-[#7D7236]/30" />

          <p className="font-playfair text-lg italic text-[#0D0C22]/60">
            Let&apos;s create something meaningful
          </p>

          <span className="h-px w-12 bg-[#7D7236]/30" />

        </div>

      </div>
    </section>
  );
};

export default Contact;