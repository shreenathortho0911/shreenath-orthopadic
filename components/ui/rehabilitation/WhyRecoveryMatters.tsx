"use client";

import SectionHeader from "@/components/common/SectionHeader";

import {
  Bone,
  Heartbeat,
  Lightning,
  PersonSimpleWalk,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const recoveryImportance = [
  {
    title: "Improve Mobility",
    icon: PersonSimpleWalk,
  },

  {
    title: "Support Faster Healing",
    icon: Lightning,
  },

  {
    title: "Reduce Stiffness",
    icon: Pulse,
  },

  {
    title: "Restore Joint Function",
    icon: Bone,
  },

  {
    title: "Strengthen Movement",
    icon: Heartbeat,
  },

  {
    title: "Long-Term Recovery",
    icon: ShieldCheck,
  },
];

export default function WhyRecoveryMatters() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho section-padding">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        {/* Header */}
        <SectionHeader
          badge="Recovery Importance"
          title={
            <>
              Why Orthopaedic Recovery
              <br />
              <span className="text-secondaryOrtho">Is Important</span>
            </>
          }
          description="Recovery programs improve mobility, healing, flexibility, and long-term Orthopaedic strength."
        />

        {/* Single Row Layout */}
        <div className="relative mt-20">
          {/* Main Line */}
          <div className="absolute left-0 top-[38px] hidden h-[2px] w-full bg-gradient-to-r from-secondaryOrtho/10 via-secondaryOrtho/30 to-secondaryOrtho/10 xl:block" />

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-6">
            {recoveryImportance.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group relative text-center"
                >
                  {/* Top Icon */}
                  <div className="relative z-10 mx-auto flex w-fit flex-col items-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        y: -6,
                        rotate: -6,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        relative flex h-[76px] w-[76px]
                        items-center justify-center

                        rounded-[26px]

                        border border-primaryOrtho/10
                        bg-white

                        shadow-[0_15px_40px_rgba(17,34,78,0.08)]

                        transition-all duration-500
                        group-hover:border-secondaryOrtho/20
                        group-hover:shadow-[0_20px_50px_rgba(17,34,78,0.12)]
                      "
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-br from-secondaryOrtho/5 to-transparent" />

                      {/* Inner */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primaryOrtho text-secondaryOrtho transition-all duration-500 group-hover:bg-secondaryOrtho group-hover:text-white">
                        <Icon size={26} weight="fill" />
                      </div>
                    </motion.div>

                    {/* Number */}
                    <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-lg font-black leading-tight tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {
                      [
                        "Restore smooth movement, walking balance, and everyday mobility with structured Orthopaedic rehabilitation support.",

                        "Support faster healing progress through guided recovery programs focused on flexibility and controlled movement.",

                        "Reduce muscle stiffness, improve flexibility, and enhance comfort during the Orthopaedic recovery process.",

                        "Improve joint stability, body balance, and functional movement for better long-term Orthopaedic wellness.",

                        "Rebuild strength, flexibility, posture, and movement confidence through advanced rehabilitation support.",

                        "Enhance long-term recovery outcomes with continuous mobility improvement and Orthopaedic care supervision.",
                      ][index]
                    }
                  </p>

                  {/* Bottom Accent */}
                  <motion.div
                    initial={{
                      width: 24,
                    }}
                    whileHover={{
                      width: 60,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="mx-auto mt-5 h-[2px] rounded-full bg-gradient-to-r from-primaryOrtho to-secondaryOrtho"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
