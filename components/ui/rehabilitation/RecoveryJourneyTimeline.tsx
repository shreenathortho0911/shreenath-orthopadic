"use client";

import SectionHeader from "@/components/common/SectionHeader";

import {
  ArrowRight,
  ClipboardText,
  Heartbeat,
  Path,
  ShieldCheck,
  Stethoscope,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const recoverySteps = [
  {
    step: "01",
    title: "Consultation & Assessment",
    description: "Recovery evaluation by orthopedic experts",
    icon: Stethoscope,
  },

  {
    step: "02",
    title: "Personalized Recovery Plan",
    description: "Customized mobility & healing program",
    icon: ClipboardText,
  },

  {
    step: "03",
    title: "Strength & Movement Recovery",
    description: "Joint flexibility and muscle rebuilding",
    icon: Heartbeat,
  },

  {
    step: "04",
    title: "Functional Mobility Training",
    description: "Walking, balance, and posture support",
    icon: Path,
  },

  {
    step: "05",
    title: "Long-Term Recovery Support",
    description: "Follow-up care and recovery monitoring",
    icon: ShieldCheck,
  },
];

export default function RecoveryJourneyTimeline() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho  section-padding">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        {/* Header */}
        <SectionHeader
          badge="Recovery Process"
          title={
            <>
              Your Recovery
              <br />
              <span className="text-secondaryOrtho">Journey Timeline</span>
            </>
          }
          description="A structured orthopedic rehabilitation journey designed for safer healing, mobility restoration, and long-term recovery."
        />

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-secondaryOrtho/10 via-secondaryOrtho/30 to-secondaryOrtho/10 lg:block" />

          <div className="space-y-5">
            {recoverySteps.map((item, index) => {
              const Icon = item.icon;

              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-1/2 top-1/2 z-20 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-tertiaryOrtho bg-secondaryOrtho shadow-[0_0_25px_rgba(248,123,27,0.5)] lg:block" />

                  {/* Content */}
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    className={`
                      group relative overflow-hidden
                      rounded-[28px]
                      border border-primaryOrtho/10
                      bg-white/90
                      backdrop-blur-xl
                      p-5
                      transition-all duration-500

                      hover:border-secondaryOrtho/20
                      hover:shadow-[0_20px_60px_rgba(17,34,78,0.08)]

                      w-full lg:w-[46%]
                    `}
                  >
                    {/* Glow */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondaryOrtho/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

                    {/* Top */}
                    <div className="flex items-start gap-4">
                      {/* Shape Icon */}
                      <motion.div
                        whileHover={{
                          rotate: -8,
                          scale: 1.06,
                        }}
                        className="
                          relative flex h-16 w-16 flex-shrink-0
                          items-center justify-center

                          bg-primaryOrtho
                          text-secondaryOrtho

                          shadow-[0_15px_35px_rgba(17,34,78,0.15)]

                          transition-all duration-500
                          group-hover:bg-secondaryOrtho
                          group-hover:text-white

                          [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)]
                        "
                      >
                        <Icon size={28} weight="fill" />
                      </motion.div>

                      {/* Text */}
                      <div className="flex-1">
                        {/* Step */}
                        <div className="mb-2 flex items-center gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-secondaryOrtho">
                            Step {item.step}
                          </span>

                          <div className="h-[2px] w-8 rounded-full bg-secondaryOrtho" />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-black leading-tight tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 transition-all duration-300 group-hover:border-secondaryOrtho/20 group-hover:bg-secondaryOrtho lg:flex"
                      >
                        <ArrowRight
                          size={16}
                          weight="bold"
                          className="text-primaryOrtho transition-all duration-300 group-hover:text-white"
                        />
                      </motion.div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-secondaryOrtho transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
