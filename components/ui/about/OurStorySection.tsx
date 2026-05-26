"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { ArrowUpRight, Heartbeat, ShieldCheck, Stethoscope } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Our Story"
          title={
            <>
              Built With A Mission To
              <br />
              <span className="text-secondaryOrtho">Restore Movement & Confidence</span>
            </>
          }
          description="A journey driven by compassion, advanced orthopedic care, and a commitment to helping every patient live pain-free."
        />

        {/* Content */}
        <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          {/* Left Content */}
          <div className="relative">
            {/* Main Story Card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-primaryOrtho/10 bg-white p-6 shadow-[0_25px_70px_rgba(15,23,42,0.06)] transition-all duration-500 sm:p-8"
            >
              {/* Glow */}
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-secondaryOrtho/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

              {/* Top */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondaryOrtho shadow-[0_15px_35px_rgba(248,123,27,0.25)]">
                  <Heartbeat size={26} weight="fill" className="text-white" />
                </div>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondaryOrtho">
                    Since Beginning
                  </p>

                  <h3 className="mt-1 text-2xl font-black tracking-[-0.04em] text-primaryOrtho">
                    A Vision Of Better Care
                  </h3>
                </div>
              </div>

              {/* Story */}
              <div className="mt-6 space-y-5">
                <p className="text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px]">
                  Shreenath Orthopedic Hospital was founded with a simple mission — to provide
                  advanced orthopedic care with compassion, precision, and trust.
                </p>

                <p className="text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px]">
                  What started as a dedicated vision to help patients recover faster has grown into
                  a trusted orthopedic center known for personalized treatments and patient-first
                  recovery care.
                </p>

                <p className="text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px]">
                  Every step of our journey has been focused on improving mobility, reducing pain,
                  and helping patients return to the life they love with confidence.
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="rounded-full border border-primaryOrtho/10 bg-primaryOrtho/5 px-4 py-2">
                  <span className="text-xs font-semibold text-primaryOrtho">
                    Patient-First Approach
                  </span>
                </div>

                <div className="rounded-full border border-primaryOrtho/10 bg-primaryOrtho/5 px-4 py-2">
                  <span className="text-xs font-semibold text-primaryOrtho">Modern Treatments</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {/* Card 1 */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-primaryOrtho/10 bg-primaryOrtho p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-secondaryOrtho/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondaryOrtho">
                  <ShieldCheck size={24} weight="fill" className="text-white" />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-white">
                  Our Mission
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/65">
                  Deliver trusted orthopedic solutions with compassionate care, advanced technology,
                  and long-term recovery support.
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondaryOrtho">
                    Compassion • Precision • Recovery
                  </span>

                  <ArrowUpRight size={16} weight="bold" className="text-secondaryOrtho" />
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-primaryOrtho/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
            >
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-secondaryOrtho/10 blur-3xl transition-all duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primaryOrtho">
                  <Stethoscope size={24} weight="fill" className="text-secondaryOrtho" />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-primaryOrtho">
                  Our Commitment
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-primaryOrtho/65">
                  From consultation to recovery, we are committed to guiding every patient with
                  trust, expertise, and personalized care.
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-secondaryOrtho">
                    Trusted Orthopedic Excellence
                  </span>

                  <ArrowUpRight size={16} weight="bold" className="text-secondaryOrtho" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
