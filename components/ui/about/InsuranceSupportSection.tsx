"use client";

import {
  ArrowUpRight,
  Bank,
  CreditCard,
  GlobeHemisphereWest,
  ShieldCheck,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const supportData = [
  {
    icon: ShieldCheck,
    title: "Cashless Treatment",
    desc: "Hassle-free insurance approvals with smooth patient support.",
  },

  {
    icon: Bank,
    title: "Insurance Partners",
    desc: "Trusted healthcare coverage with leading insurance providers.",
  },

  {
    icon: CreditCard,
    title: "EMI Support",
    desc: "Flexible payment solutions designed for accessible treatment.",
  },

  {
    icon: GlobeHemisphereWest,
    title: "International Patients",
    desc: "Dedicated assistance for overseas consultations and recovery.",
  },
];

export default function InsuranceSupportSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        {/* Glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-secondaryOrtho/10 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] right-[-10%] h-72 w-72 rounded-full bg-primaryOrtho/10 blur-3xl"
        />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Main Wrapper */}
        <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_25px_70px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20,
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
              className="relative overflow-hidden bg-primaryOrtho p-6 sm:p-8"
            >
              {/* Overlay Glow */}
              <div className="absolute right-[-20%] top-[-10%] h-60 w-60 rounded-full bg-secondaryOrtho/10 blur-3xl" />

              {/* Label */}
              <div className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  Insurance & Accessibility
                </span>
              </div>

              {/* Heading */}
              <h3 className="relative mt-5 max-w-md text-3xl font-black text-white sm:text-[2.5rem]">
                Stress-Free Healthcare Support
              </h3>

              {/* Description */}
              <p className="relative mt-5 max-w-lg text-sm leading-relaxed text-white/70 sm:text-[15px]">
                Making orthopedic treatment more accessible with insurance assistance, flexible EMI
                options, and complete patient guidance from consultation to recovery.
              </p>

              {/* Floating Tags */}
              <div className="relative mt-7 flex flex-wrap gap-2">
                {["Cashless Support", "Easy Claims", "Global Assistance"].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
                  >
                    <span className="text-[11px] font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {supportData.map((item, index) => {
                const Icon = item.icon;

                return (
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
                      y: -4,
                    }}
                    className={`group relative overflow-hidden border-primaryOrtho/10 bg-white p-5 sm:p-6 ${
                      index === 0
                        ? "border-b sm:border-r"
                        : index === 1
                          ? "border-b"
                          : index === 2
                            ? "sm:border-r"
                            : ""
                    }`}
                  >
                    {/* Hover Glow */}
                    <div className="absolute right-[-30%] top-[-30%] h-40 w-40 rounded-full bg-secondaryOrtho/0 blur-3xl transition-all duration-500 group-hover:bg-secondaryOrtho/10" />

                    {/* Top */}
                    <div className="relative flex items-start justify-between gap-4">
                      {/* Icon */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryOrtho/10 transition-all duration-300 group-hover:bg-secondaryOrtho">
                        <Icon
                          size={20}
                          weight="fill"
                          className="text-secondaryOrtho transition-all duration-300 group-hover:text-white"
                        />
                      </div>

                      {/* Arrow */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-primaryOrtho/10 text-primaryOrtho transition-all duration-300 group-hover:border-secondaryOrtho group-hover:bg-secondaryOrtho group-hover:text-white">
                        <ArrowUpRight size={15} weight="bold" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative mt-5">
                      <h4 className="text-lg font-black leading-[1.08] tracking-[-0.04em] text-primaryOrtho">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-relaxed text-primaryOrtho/60">
                        {item.desc}
                      </p>
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
