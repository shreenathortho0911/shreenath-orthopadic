"use client";

import SectionHeader from "@/components/common/SectionHeader";

import {
  ArrowUpRight,
  Bone,
  FirstAid,
  PersonSimpleRun,
  PersonSimpleWalk,
  Pulse,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const specialties = [
  {
    icon: Bone,
    title: "Knee Replacement",
    desc: "Advanced joint replacement focused on restoring mobility.",
  },

  {
    icon: Pulse,
    title: "Hip Replacement",
    desc: "Precision treatments designed for pain-free movement.",
  },

  {
    icon: PersonSimpleWalk,
    title: "Spine Surgery",
    desc: "Modern spine procedures for posture and recovery care.",
  },

  {
    icon: PersonSimpleRun,
    title: "Sports Injury",
    desc: "Athletic rehabilitation and ligament recovery programs.",
  },

  {
    icon: FirstAid,
    title: "Trauma Care",
    desc: "Emergency orthopedic support with rehabilitation care.",
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-10%] h-60 w-60 rounded-full bg-secondaryOrtho/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="absolute bottom-[-15%] right-[-5%] h-72 w-72 rounded-full bg-primaryOrtho/10 blur-3xl sm:h-80 sm:w-80" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Our Specialties"
          title={
            <>
              Specialized Orthopedic
              <br />
              <span className="text-secondaryOrtho">Treatments Designed Around Recovery</span>
            </>
          }
          description="Comprehensive orthopedic expertise focused on mobility restoration and faster patient recovery."
        />

        {/* Main Wrapper */}
        <div className="mt-10 overflow-hidden rounded-[28px] border border-primaryOrtho/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:rounded-[36px]">
          {specialties.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  backgroundColor: "rgba(248,123,27,0.03)",
                }}
                className={`group relative p-4 transition-all duration-300 sm:p-6 ${
                  index !== specialties.length - 1 ? "border-b border-primaryOrtho/10" : ""
                }`}
              >
                {/* Responsive Layout */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  {/* Left */}
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondaryOrtho/10 transition-all duration-300 group-hover:bg-secondaryOrtho sm:h-14 sm:w-14">
                      <Icon
                        size={20}
                        weight="fill"
                        className="text-secondaryOrtho transition-all duration-300 group-hover:text-white sm:size-[22px]"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="text-lg font-black leading-[1.08] tracking-[-0.04em] text-primaryOrtho sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-relaxed text-primaryOrtho/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="pl-16 sm:pl-0">
                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full border border-primaryOrtho/10 text-primaryOrtho transition-all duration-300 group-hover:border-secondaryOrtho group-hover:bg-secondaryOrtho group-hover:text-white sm:h-11 sm:w-11"
                    >
                      <ArrowUpRight size={16} weight="bold" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
          className="mt-5 flex flex-col gap-4 rounded-[26px] bg-primaryOrtho px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7"
        >
          {/* Left */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
              Advanced Orthopedic Recovery
            </p>

            <h3 className="mt-2 text-xl font-black tracking-[-0.05em] text-white sm:text-2xl">
              Personalized Care For Every Movement
            </h3>
          </div>

          {/* Right */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["Minimally Invasive", "Robotic Procedures", "Rehabilitation Support"].map(
              (item, index) => (
                <div
                  key={index}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-xl sm:px-4"
                >
                  <span className="text-[11px] font-semibold text-white sm:text-xs">{item}</span>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
