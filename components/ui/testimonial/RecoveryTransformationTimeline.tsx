"use client";

import {
  ArrowRight,
  CheckCircle,
  PersonSimpleWalk,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const recoveryTimeline = [
  {
    day: "Day 1",
    title: "Pain & Mobility Restriction",
    description: "Initial discomfort, stiffness, and limited movement support.",
    icon: Pulse,
  },

  {
    day: "Week 2",
    title: "Assisted Movement Support",
    description: "Guided walking assistance and controlled recovery exercises.",
    icon: PersonSimpleWalk,
  },

  {
    day: "Week 6",
    title: "Improved Walking & Flexibility",
    description: "Better joint flexibility, balance, and movement confidence.",
    icon: ArrowRight,
  },

  {
    day: "Month 3",
    title: "Restored Confidence & Movement",
    description: "Comfortable walking, active mobility, and improved lifestyle.",
    icon: CheckCircle,
  },
];

export default function RecoveryTransformationTimeline() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho section-padding">
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondaryOrtho">
              Recovery Transformation Timeline
            </span>

            <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
            From Pain
            <span className="text-secondaryOrtho"> To Recovery</span>
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
            A structured orthopedic recovery journey focused on movement, rehabilitation, and
            long-term mobility improvement.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Line */}
          <div className="absolute left-0 top-[42px] hidden h-[2px] w-full bg-gradient-to-r from-secondaryOrtho/10 via-secondaryOrtho/30 to-secondaryOrtho/10 xl:block" />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {recoveryTimeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div
                    className="
                      relative h-full overflow-hidden

                      rounded-[30px]

                      border border-primaryOrtho/10
                      bg-white

                      p-6

                      shadow-[0_20px_60px_rgba(17,34,78,0.06)]

                      transition-all duration-500
                      hover:border-secondaryOrtho/20
                    "
                  >
                    {/* Glow */}
                    <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-secondaryOrtho/10 blur-3xl" />

                    {/* Top */}
                    <div className="relative flex items-center justify-between">
                      {/* Icon */}
                      <div
                        className="
                          flex h-16 w-16 items-center justify-center

                          rounded-[22px]

                          bg-primaryOrtho

                          text-secondaryOrtho

                          transition-all duration-500
                          group-hover:bg-secondaryOrtho
                          group-hover:text-white
                        "
                      >
                        <Icon size={28} weight="fill" />
                      </div>

                      {/* Step */}
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                          Timeline
                        </p>

                        <h4 className="mt-1 text-sm font-black text-secondaryOrtho">{item.day}</h4>
                      </div>
                    </div>

                    {/* Middle */}
                    <div className="mt-8">
                      <h3 className="text-2xl font-black leading-[1.08] tracking-[-0.04em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between">
                      {/* Progress */}
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                        <span className="text-xs font-semibold text-slate-500">
                          Recovery Progress
                        </span>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        whileHover={{
                          x: 4,
                        }}
                        className="
                          flex h-11 w-11 items-center justify-center

                          rounded-full

                          border border-primaryOrtho/10
                          bg-tertiaryOrtho

                          transition-all duration-300
                          group-hover:border-secondaryOrtho/20
                          group-hover:bg-secondaryOrtho
                        "
                      >
                        <ArrowRight
                          size={18}
                          weight="bold"
                          className="text-primaryOrtho transition-all duration-300 group-hover:text-white"
                        />
                      </motion.div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 h-[6px] overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${(index + 1) * 25}%`,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-primaryOrtho to-secondaryOrtho"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Premium Tag */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="
              mx-auto mt-14 flex w-fit items-center gap-3

              rounded-full

              border border-primaryOrtho/10
              bg-white

              px-6 py-4

              shadow-[0_15px_40px_rgba(17,34,78,0.06)]
            "
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryOrtho text-secondaryOrtho">
              <ShieldCheck size={22} weight="fill" />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
                Guided Orthopedic Recovery
              </p>

              <h4 className="mt-1 text-sm font-black text-primaryOrtho">
                Structured Healing & Mobility Progress
              </h4>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
