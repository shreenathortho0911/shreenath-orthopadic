"use client";

import {
  Armchair,
  Buildings,
  FirstAidKit,
  Heartbeat,
  Pulse,
  ShieldCheck,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

import SectionHeader from "@/components/common/SectionHeader";

const facilityFeatures = [
  {
    title: "Modern Infrastructure",

    description:
      "Well-designed orthopedic spaces equipped with modern medical technology and patient-focused treatment environments.",

    icon: Buildings,
  },

  {
    title: "Surgical Precision",

    description:
      "Advanced surgical systems supporting accurate orthopedic procedures and enhanced treatment outcomes.",

    icon: ShieldCheck,
  },

  {
    title: "Recovery-Focused Care",

    description:
      "Dedicated rehabilitation and recovery areas designed to improve mobility and support faster healing.",

    icon: Pulse,
  },

  {
    title: "Patient Comfort",

    description:
      "Comfortable consultation, treatment, and recovery spaces created for a stress-free patient experience.",

    icon: Armchair,
  },

  {
    title: "Advanced Orthopedic Systems",

    description:
      "Integrated orthopedic technologies supporting diagnostics, treatment planning, and recovery monitoring.",

    icon: Heartbeat,
  },

  {
    title: "Comprehensive Support",

    description:
      "Complete orthopedic assistance from consultation and surgery to rehabilitation and long-term recovery care.",

    icon: FirstAidKit,
  },
];

export default function AdvancedFacilitiesSection() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho section-padding">
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-secondaryOrtho/10 blur-[120px]" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primaryOrtho/10 blur-[140px]" />

      {/* Grid */}
      <div
        className="
          absolute inset-0

          bg-[linear-gradient(rgba(17,34,78,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,78,0.03)_1px,transparent_1px)]

          bg-[size:42px_42px]
        "
      />

      <div className="container-wrapper relative">
        {/* Header */}
        <SectionHeader
          badge="Advanced Facilities"
          title={
            <>
              Advanced Facilities Designed
              <br />
              <span className="text-secondaryOrtho">Around Orthopedic Excellence</span>
            </>
          }
          description="Modern orthopedic infrastructure focused on surgical precision, patient comfort, rehabilitation, and advanced recovery care."
        />

        {/* Main Layout */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {facilityFeatures.map((item, index) => {
            const Icon = item.icon;

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
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
          group relative overflow-hidden

          rounded-[28px]

          border border-primaryOrtho/10

          bg-white/75
          backdrop-blur-2xl

          p-5

          shadow-[0_14px_40px_rgba(17,34,78,0.05)]

          transition-all duration-500
          hover:border-secondaryOrtho/20
        "
              >
                {/* Glow */}
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-secondaryOrtho/10 blur-3xl" />

                {/* Top */}
                <div className="relative flex items-start justify-between gap-4">
                  {/* Icon */}
                  <div
                    className="
              flex h-14 w-14 items-center justify-center

              rounded-[18px]

              bg-primaryOrtho

              text-secondaryOrtho

              transition-all duration-500
              group-hover:bg-secondaryOrtho
              group-hover:text-white
            "
                  >
                    <Icon size={24} weight="fill" />
                  </div>

                  {/* Number */}
                  <span className="text-[42px] font-black leading-none text-primaryOrtho/5">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-xl font-black tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho transition-all duration-500 group-hover:w-16" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
                    Orthopedic Care
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
