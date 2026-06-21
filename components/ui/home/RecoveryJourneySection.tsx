"use client";

import { Bone, FirstAidKit, Heartbeat, Pulse, Stethoscope } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import SectionHeader from "@/components/common/SectionHeader";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "Expert Orthopaedic evaluation",
    icon: Stethoscope,
  },

  {
    id: "02",
    title: "Diagnosis",
    description: "Advanced imaging & testing",
    icon: Pulse,
  },

  {
    id: "03",
    title: "Surgery",
    description: "Precision treatment procedures",
    icon: Bone,
  },

  {
    id: "04",
    title: "Recovery",
    description: "Post-treatment care support",
    icon: Heartbeat,
  },

  {
    id: "05",
    title: "Physiotherapy",
    description: "Strength & mobility restoration",
    icon: FirstAidKit,
  },
];

export default function RecoveryJourneySection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Recovery Journey"
          title={
            <>
              Your Journey Towards
              <br />
              <span className="text-secondaryOrtho">Pain-Free Movement</span>
            </>
          }
          description="A seamless Orthopaedic treatment experience designed for precision care, faster recovery, and long-term mobility."
        />

        {/* Premium Journey Wrapper */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-slate-200/70 bg-primaryOrtho from-white via-[#f8fafc] to-white p-6 shadow-[0_30px_80px_rgba(17,34,78,0.06)] sm:p-8 lg:rounded-[40px] lg:p-12">
          {/* Top Glow */}
          <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-secondaryOrtho/10 blur-3xl" />

          {/* Bottom Glow */}
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primaryOrtho/5 blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="grid h-full grid-cols-12">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="border-r border-primaryOrtho/10" />
              ))}
            </div>
          </div>

          {/* Floating Blur */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[10%] top-[15%] h-32 w-32 rounded-full bg-secondaryOrtho/10 blur-3xl"
          />

          {/* Journey Flow */}
          <div className="relative">
            {/* Desktop Line */}
            <div className="absolute left-0 top-[32px] hidden h-[2px] w-full lg:block">
              <div className="h-full w-full bg-slate-200" />

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-primaryOrtho via-secondaryOrtho to-secondaryOrtho"
              />
            </div>

            {/* Mobile Line */}
            <div className="absolute left-[31px] top-0 h-full w-[2px] bg-slate-200 lg:hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{
                  duration: 1.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-b from-primaryOrtho via-secondaryOrtho to-secondaryOrtho"
              />
            </div>

            {/* Steps */}
            <div className="relative flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-6">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -6,
                    }}
                    className="group relative flex items-start gap-5 transition-all duration-500 lg:flex-1 lg:flex-col lg:items-center lg:text-center"
                  >
                    {/* Icon Circle */}
                    <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-[22px] border border-white/60 bg-white/90 shadow-[0_20px_45px_rgba(17,34,78,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-secondaryOrtho/20 group-hover:shadow-[0_25px_60px_rgba(248,123,27,0.18)]">
                      {/* Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 rounded-[22px] border border-secondaryOrtho/30"
                      />

                      {/* Glow */}
                      <div className="absolute inset-0 rounded-[22px] bg-secondaryOrtho/15 blur-xl opacity-0 transition-all duration-500 group-hover:scale-125 group-hover:opacity-100" />

                      <Icon size={24} weight="fill" className="relative text-secondaryOrtho" />
                    </div>

                    {/* Content */}
                    <div className="pt-1 lg:pt-8">
                      {/* Number */}
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-secondaryOrtho">
                        Step {step.id}
                      </span>

                      {/* Title */}
                      <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-tertiaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho sm:text-2xl">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-slate-500 transition-all duration-300 group-hover:text-white">
                        {step.description}
                      </p>

                      {/* Bottom Line */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-primaryOrtho via-secondaryOrtho to-secondaryOrtho"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
