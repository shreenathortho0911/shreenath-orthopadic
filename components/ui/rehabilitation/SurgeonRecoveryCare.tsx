"use client";

import SectionHeader from "@/components/common/SectionHeader";

import {
  ArrowUpRight,
  ChartLineUp,
  Heartbeat,
  Pulse,
  ShieldCheck,
  Stethoscope,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const features = [
  {
    title: "Recovery Assessments",
    icon: Stethoscope,
  },

  {
    title: "Joint Monitoring",
    icon: Pulse,
  },

  {
    title: "Mobility Tracking",
    icon: ChartLineUp,
  },

  {
    title: "Post-Operative Support",
    icon: ShieldCheck,
  },
];

export default function SurgeonRecoveryCare() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho section-padding">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        {/* Header */}
        <SectionHeader
          badge="Orthopedic Recovery Care"
          title={
            <>
              Recovery Guided By
              <br />
              <span className="text-secondaryOrtho">Orthopedic Specialists</span>
            </>
          }
          description="Specialized post-surgical recovery programs focused on mobility restoration, healing progress, and long-term orthopedic wellness."
        />

        {/* Main Layout */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Content Box */}
            <div className="relative overflow-hidden rounded-[34px] border border-primaryOrtho/10 bg-white p-7 md:p-9 shadow-[0_20px_60px_rgba(17,34,78,0.06)]">
              {/* Glow */}
              <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-secondaryOrtho/10 blur-3xl" />

              {/* Top */}
              <div className="relative flex items-center gap-4">
                {/* Shape */}
                <div className="flex h-16 w-16 items-center justify-center bg-primaryOrtho text-secondaryOrtho shadow-[0_15px_35px_rgba(17,34,78,0.15)] [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]">
                  <Heartbeat size={30} weight="fill" />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                      Specialist Guided
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-[-0.03em] text-primaryOrtho">
                    Personalized Orthopedic Recovery Supervision
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="relative mt-7 space-y-4">
                {[
                  "Post-surgery monitoring by experienced orthopedic specialists.",
                  "Continuous recovery progress evaluation for safer healing.",
                  "Personalized mobility plans focused on strength and flexibility.",
                  "Expert orthopedic care focused on long-term recovery.",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group flex items-start gap-3"
                  >
                    {/* Dot */}
                    <div className="mt-1.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondaryOrtho/10">
                      <div className="h-2 w-2 rounded-full bg-secondaryOrtho transition-all duration-300 group-hover:scale-125" />
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 right-5 hidden rounded-2xl border border-secondaryOrtho/10 bg-white px-5 py-4 shadow-[0_20px_50px_rgba(17,34,78,0.08)] md:flex"
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondaryOrtho">
                  Recovery Support
                </p>

                <h4 className="mt-1 text-lg font-black text-primaryOrtho">Specialist Supervised</h4>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Vertical Stack */}
            <div className="space-y-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 6,
                    }}
                    className="group relative overflow-hidden rounded-[24px] border border-primaryOrtho/10 bg-white p-4 transition-all duration-500 hover:border-secondaryOrtho/20 hover:shadow-[0_15px_40px_rgba(17,34,78,0.08)]"
                  >
                    {/* Glow */}
                    <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-secondaryOrtho/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                    <div className="relative flex items-center justify-between gap-4">
                      {/* Left */}
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primaryOrtho text-secondaryOrtho shadow-[0_15px_35px_rgba(17,34,78,0.12)] transition-all duration-500 group-hover:bg-secondaryOrtho group-hover:text-white">
                          <Icon size={24} weight="fill" />
                        </div>

                        {/* Content */}
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
                            Recovery Care
                          </p>

                          <h3 className="mt-1 text-lg font-black tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-secondaryOrtho/20 group-hover:bg-secondaryOrtho">
                        <ArrowUpRight
                          size={18}
                          weight="bold"
                          className="text-primaryOrtho transition-all duration-300 group-hover:text-white"
                        />
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondaryOrtho transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
