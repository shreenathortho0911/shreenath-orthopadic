"use client";

import SectionHeader from "@/components/common/SectionHeader";

import {
  ArrowRight,
  Bone,
  Heartbeat,
  PersonSimpleRun,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const recoveryPrograms = [
  {
    number: "01",
    title: "Knee Replacement",
    subtitle: "Walking support & joint mobility restoration",
    icon: Pulse,
  },

  {
    number: "02",
    title: "Hip Surgery Recovery",
    subtitle: "Movement recovery & balance training",
    icon: ShieldCheck,
  },

  {
    number: "03",
    title: "Spine Recovery",
    subtitle: "Postural recovery & controlled mobility",
    icon: Heartbeat,
  },

  {
    number: "04",
    title: "Fracture Recovery",
    subtitle: "Bone healing & functional movement restoration",
    icon: Bone,
  },

  {
    number: "05",
    title: "Sports Injury Recovery",
    subtitle: "Strength rebuilding & return-to-activity support",
    icon: PersonSimpleRun,
  },

  {
    number: "06",
    title: "Shoulder Recovery",
    subtitle: "Flexibility & controlled joint movement recovery",
    icon: ShieldCheck,
  },
];

export default function RecoveryProgramsSection() {
  return (
    <section className="section-padding  relative overflow-hidden bg-tertiaryOrtho">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        {/* Header */}
        <SectionHeader
          badge="Recovery Journey"
          title={
            <>
              Recovery Programs
              <br />
              <span className="text-secondaryOrtho">Tailored To Your Condition</span>
            </>
          }
          description="Advanced Orthopaedic rehabilitation programs focused on restoring mobility, rebuilding strength, and supporting long-term recovery."
        />

        {/* Cards */}
        <div className="mt-14">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recoveryPrograms.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-secondaryOrtho/25 hover:shadow-[0_30px_60px_rgba(17,34,78,0.08)]"
                >
                  {/* Animated Glow */}
                  <motion.div
                    variants={{
                      hover: {
                        opacity: 1,
                        scale: 1.2,
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondaryOrtho/10 opacity-0 blur-3xl"
                  />

                  {/* Hover Border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-primaryOrtho via-secondaryOrtho to-secondaryOrtho"
                  />

                  {/* Floating Pattern */}
                  <motion.div
                    variants={{
                      hover: {
                        rotate: 8,
                        scale: 1.1,
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute right-0 top-0 opacity-[0.04]"
                  >
                    <div className="grid grid-cols-6 gap-1.5 p-5">
                      {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="h-1.5 w-1.5 rounded-full bg-primaryOrtho" />
                      ))}
                    </div>
                  </motion.div>

                  {/* Main */}
                  <div className="relative p-5">
                    {/* Top */}
                    <div className="flex items-start justify-between gap-3">
                      {/* Left */}
                      <div className="flex items-start gap-3">
                        {/* Icon */}
                        <motion.div
                          variants={{
                            hover: {
                              rotate: -10,
                              scale: 1.08,
                            },
                          }}
                          transition={{ duration: 0.35 }}
                          className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primaryOrtho shadow-[0_15px_35px_rgba(17,34,78,0.12)]"
                        >
                          {/* Inner Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />

                          {/* Pulse Ring */}
                          <motion.div
                            animate={{
                              scale: [1, 1.25, 1],
                              opacity: [0.5, 0, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-2xl border border-secondaryOrtho/40"
                          />

                          <Icon size={24} weight="fill" className="relative text-secondaryOrtho" />
                        </motion.div>

                        {/* Content */}
                        <div>
                          {/* Label */}
                          <div className="mb-1 flex items-center gap-2">
                            <motion.div
                              animate={{
                                width: [16, 24, 16],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                              className="h-[2px] rounded-full bg-secondaryOrtho"
                            />

                            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                              Rehabilitation
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-md md:text-xl font-black leading-tight tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                            {item.title}
                          </h3>

                          {/* Subtitle */}
                          <p className="mt-1 text-sm leading-relaxed text-slate-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Number */}
                      <motion.div
                        variants={{
                          hover: {
                            scale: 1.08,
                          },
                        }}
                        className="text-4xl font-black leading-none tracking-[-0.05em] text-primaryOrtho/[0.05] transition-all duration-500 group-hover:text-secondaryOrtho/[0.40]"
                      >
                        {item.number}
                      </motion.div>
                    </div>

                    {/* Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Mobility Care", "Fast Recovery", "Strength Support"].map((tag, i) => (
                        <motion.div
                          key={i}
                          whileHover={{
                            y: -2,
                          }}
                          className="rounded-full border border-secondaryOrtho/10 bg-secondaryOrtho/5 px-2.5 py-1 text-[10px] font-semibold text-primaryOrtho transition-all duration-300 hover:border-secondaryOrtho/20 hover:bg-secondaryOrtho/10"
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      {/* Stats */}
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                            Recovery
                          </p>

                          <h4 className="text-sm font-black text-primaryOrtho">Expert</h4>
                        </div>

                        <div className="h-8 w-[1px] bg-slate-200" />

                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                            Support
                          </p>

                          <h4 className="text-sm font-black text-primaryOrtho">Guided</h4>
                        </div>
                      </div>

                      {/* Arrow */}
                      <motion.button
                        variants={{
                          hover: {
                            x: 4,
                          },
                        }}
                        transition={{ duration: 0.3 }}
                        className="group/btn relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-[#f8fafc] transition-all duration-300 group-hover:border-secondaryOrtho/20 group-hover:bg-secondaryOrtho"
                      >
                        {/* Shine */}
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]" />

                        <ArrowRight
                          size={16}
                          weight="bold"
                          className="relative text-primaryOrtho transition-colors duration-300 group-hover:text-white"
                        />
                      </motion.button>
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondaryOrtho transition-all duration-500 group-hover:w-full" />

                  {/* Corner Ring */}
                  <div className="absolute bottom-0 right-0 h-16 w-16 translate-x-1/3 translate-y-1/3 rounded-full border border-secondaryOrtho/10 transition-all duration-500 group-hover:scale-125 group-hover:border-secondaryOrtho/20" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
