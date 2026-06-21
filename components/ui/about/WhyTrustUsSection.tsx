"use client";

import SectionHeader from "@/components/common/SectionHeader";

import { ClockCountdown, FirstAidKit, Heartbeat, Pulse, ShieldCheck } from "@phosphor-icons/react";

import { motion } from "framer-motion";

const trustData = [
  {
    icon: ShieldCheck,
    title: "Advanced Technology",
  },

  {
    icon: Pulse,
    title: "Robotic Procedures",
  },

  {
    icon: Heartbeat,
    title: "Personalized Care",
  },

  {
    icon: FirstAidKit,
    title: "24/7 Emergency Support",
  },
];

export default function WhyTrustUsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-15%] right-[-5%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Why Patients Trust Us"
          title={
            <>
              Advanced Orthopaedic Care
              <br />
              <span className="text-secondaryOrtho">Designed Around Recovery</span>
            </>
          }
          description="Trusted Orthopaedic expertise with advanced treatments, personalized care, and long-term mobility solutions."
        />

        {/* Main Layout */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
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
            className="relative overflow-hidden rounded-[34px] bg-primaryOrtho p-5 sm:p-6"
          >
            {/* Glow */}
            <div className="absolute right-[-10%] top-[-20%] h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />

            {/* Top */}
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                  <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Trusted Recovery Care
                  </span>
                </div>

                <h3 className="mt-4 max-w-lg text-2xl font-black  text-white sm:text-3xl">
                  Orthopaedic Excellence Focused On Faster Recovery
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="relative mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
              Advanced Orthopaedic treatments, robotic procedures, and rehabilitation-focused
              recovery care designed around every patient’s mobility and long-term wellness.
            </p>

            {/* Compact Features */}
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Advanced Technology",
                },

                {
                  icon: Pulse,
                  title: "Robotic Procedures",
                },

                {
                  icon: Heartbeat,
                  title: "Personalized Care",
                },

                {
                  icon: FirstAidKit,
                  title: "24/7 Emergency",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -3,
                    }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl"
                  >
                    <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondaryOrtho/15">
                      <Icon size={18} weight="fill" className="text-secondaryOrtho" />
                    </div>

                    <h4 className="text-sm font-bold leading-[1.2] text-white">{item.title}</h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "Advanced Orthopaedic Care",
                "Patient-Centered Care",
                "Rehabilitation Programs",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
                >
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4">
            {/* Top Card */}
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
              className="rounded-[30px] bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondaryOrtho">
                    Faster Recovery
                  </p>

                  <h3 className="mt-3 text-2xl font-black  text-primaryOrtho">
                    Recovery Programs Designed Around Mobility
                  </h3>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primaryOrtho">
                  <ClockCountdown size={20} weight="fill" className="text-secondaryOrtho" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-primaryOrtho/60">
                Guided rehabilitation and recovery-focused treatments for long-term mobility and
                pain-free movement.
              </p>
            </motion.div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "24/7",
                  label: "Emergency Care",
                },

                {
                  value: "100%",
                  label: " Patient-Centered Care",
                },

                {
                  value: "100+",
                  label: "Happy Patients",
                },

                {
                  value: "7+",
                  label: "Facilities",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
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
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="rounded-[26px] bg-white p-5 shadow-[0_20px_40px_rgba(15,23,42,0.04)]"
                >
                  <h4 className="text-3xl font-black leading-none tracking-[-0.05em] text-primaryOrtho">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primaryOrtho/50">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
