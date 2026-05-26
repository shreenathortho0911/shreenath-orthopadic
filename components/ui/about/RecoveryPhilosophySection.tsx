"use client";

import SectionHeader from "@/components/common/SectionHeader";

import { Heartbeat, Pulse, ShieldCheck } from "@phosphor-icons/react";

import { motion } from "framer-motion";

const philosophyPoints = [
  {
    icon: ShieldCheck,
    title: "Beyond Surgery",
  },

  {
    icon: Pulse,
    title: "Mobility Restoration",
  },

  {
    icon: Heartbeat,
    title: "Recovery Support",
  },
];

export default function RecoveryPhilosophySection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-10%] h-60 w-60 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-15%] right-[-5%] h-72 w-72 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Recovery Philosophy"
          title={
            <>
              Recovery Beyond
              <span className="text-secondaryOrtho"> Treatment</span>
            </>
          }
          description="A patient-focused orthopedic approach designed around healing, mobility, and long-term wellness."
        />

        {/* Main Layout */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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
            className="relative overflow-hidden rounded-[30px] bg-primaryOrtho p-5 sm:p-7"
          >
            {/* Glow */}
            <div className="absolute right-[-20%] top-[-20%] h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />

            {/* Small Label */}
            <div className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                Patient-Focused Recovery
              </span>
            </div>

            {/* Heading */}
            <h3 className="relative mt-5 max-w-xl text-2xl font-black  text-white sm:text-3xl">
              True Healing Starts After Successful Treatment.
            </h3>

            {/* Text */}
            <div className="relative mt-5 space-y-4">
              <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
                At Shreenath Orthopedic Hospital, recovery is not limited to surgery alone. We focus
                on restoring movement, reducing pain, and rebuilding confidence.
              </p>

              <p className="text-sm leading-relaxed text-white/70 sm:text-[15px]">
                Through rehabilitation-focused care and personalized recovery plans, we help
                patients return to healthier, more active lives with long-term mobility support.
              </p>
            </div>

            {/* Tags */}
            <div className="relative mt-6 flex flex-wrap gap-2">
              {["Pain-Free Living", "Mobility Restoration", "Rehabilitation Support"].map(
                (item, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
                  >
                    <span className="text-[11px] font-semibold text-white">{item}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid gap-4">
            {philosophyPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
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
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    x: 4,
                  }}
                  className="group rounded-[24px] border border-primaryOrtho/10 bg-white p-4 shadow-[0_15px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-secondaryOrtho/10 transition-all duration-300 group-hover:bg-secondaryOrtho">
                      <Icon
                        size={18}
                        weight="fill"
                        className="text-secondaryOrtho transition-all duration-300 group-hover:text-white"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h4 className="text-lg font-black tracking-[-0.04em] text-primaryOrtho">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-primaryOrtho/60">
                        Advanced orthopedic care focused on recovery and long-term wellness.
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom Compact Note */}
            <div className="rounded-[24px] border border-primaryOrtho/10 bg-secondaryOrtho/5 p-4">
              <p className="text-sm leading-relaxed text-primaryOrtho/70">
                Our recovery philosophy combines advanced orthopedic treatment with
                rehabilitation-focused care designed around mobility, comfort, and pain-free living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
