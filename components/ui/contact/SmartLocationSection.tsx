"use client";

import Link from "next/link";

import { ArrowUpRight, CalendarCheck, ChatCircleText, PhoneCall } from "@phosphor-icons/react";

import { motion } from "framer-motion";

const supportCards = [
  {
    icon: PhoneCall,
    title: "Call Support",
  },
  {
    icon: ChatCircleText,
    title: "Patient Help",
  },
  {
    icon: CalendarCheck,
    title: "Easy Booking",
  },
];

export default function CompactContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-6">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-20%] h-60 w-60 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.45,
          }}
          className="relative overflow-hidden rounded-[32px] border border-primaryOrtho/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
        >
          {/* Glow */}
          <div className="absolute right-[-10%] top-[-20%] h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

          <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div className="relative p-5 sm:p-7 lg:p-8">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primaryOrtho/10 bg-secondaryOrtho/5 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primaryOrtho">
                  Contact Support
                </span>
              </div>

              {/* Heading */}
              <div className="mt-4">
                <h2 className="max-w-lg text-[2rem] font-black text-primaryOrtho sm:text-[2.7rem]">
                  Need Help With
                  <span className="text-secondaryOrtho"> Treatment</span>
                  <br />
                  Or Appointment?
                </h2>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-primaryOrtho/60">
                  Connect with our Orthopaedic team for consultation booking, patient guidance, and
                  quick assistance.
                </p>
              </div>

              {/* Compact Cards */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {supportCards.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -3,
                      }}
                      className="rounded-[24px] border border-primaryOrtho/10 bg-[#f8fafc] p-3 text-center"
                    >
                      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-secondaryOrtho/10">
                        <Icon size={18} weight="fill" className="text-secondaryOrtho" />
                      </div>

                      <h3 className="mt-3 text-xs font-black leading-snug text-primaryOrtho">
                        {item.title}
                      </h3>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={"/contact#appointment"}
                  className="group inline-flex items-center gap-3 rounded-full bg-secondaryOrtho px-5 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(248,123,27,0.28)] transition-all duration-300 hover:-translate-y-1"
                >
                  Book Appointment
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </div>
                </Link>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primaryOrtho/40">
                    Call Us
                  </p>

                  <h3 className="mt-1 text-base font-black text-primaryOrtho">+91 98765 43210</h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative h-full overflow-hidden bg-gradient-to-br from-primaryOrtho via-[#14274b] to-[#0d1728] p-5 sm:p-6">
              {/* Glow */}
              <div className="absolute left-[-10%] top-[-20%] h-72 w-72 rounded-full bg-secondaryOrtho/20 blur-3xl" />

              <div className="relative flex h-full flex-col justify-between rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
                {/* Top */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      Quick Assistance
                    </span>
                  </div>

                  <h3 className="mt-4 text-[2rem] font-black  text-white">
                    Faster
                    <span className="text-secondaryOrtho"> Support</span>
                    <br />
                    Better Experience
                  </h3>
                </div>

                {/* Main Card */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-5 rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                    Average Response
                  </p>

                  <div className="mt-3 flex items-end gap-2">
                    <h4 className="text-5xl font-black  text-white">{"<"}10</h4>

                    <span className="mb-2 text-sm font-semibold text-secondaryOrtho">Min</span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    Quick response for appointment booking and patient support.
                  </p>
                </motion.div>

                {/* Bottom */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-[22px] border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                      Smooth
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-white">Process</h4>
                  </div>

                  <div className="rounded-[22px] bg-secondaryOrtho p-4 shadow-[0_15px_35px_rgba(248,123,27,0.28)]">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
                      Trusted
                    </p>

                    <h4 className="mt-2 text-sm font-semibold text-white">Guidance</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
