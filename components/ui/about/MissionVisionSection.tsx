"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { FlagBanner, Heartbeat, Sparkle, Target } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const content = [
  {
    icon: Heartbeat,
    label: "Our Mission",
    title: "Patient-First Recovery & Orthopaedic Excellence",
    description:
      "Our mission is to provide compassionate Orthopaedic treatments focused on pain relief, mobility restoration, and faster recovery through advanced medical expertise and personalized patient care.",
  },

  {
    icon: Sparkle,
    label: "Our Vision",
    title: "Trusted Destination For Advanced Orthopaedic Care",
    description:
      "We aim to become a trusted center for bone, joint, and spine care known for innovation, modern treatment solutions, and long-term patient wellness.",
  },

  {
    icon: Target,
    label: "Our Goal",
    title: "Helping Patients Move Better Every Day",
    description:
      "Our goal is to improve quality of life by helping every patient regain confidence, movement, and strength with complete Orthopaedic support and rehabilitation care.",
  },
];

const values = ["Compassion", "Integrity", "Innovation", "Patient Trust", "Advanced Care"];

export default function MissionVisionSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      {/* Background */}

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Mission • Vision • Goal"
          title={
            <>
              Care Built Around
              <br />
              <span className="text-secondaryOrtho">Recovery, Trust & Better Living</span>
            </>
          }
          description="Focused on advanced Orthopaedic care with compassion, innovation, and long-term patient recovery."
        />

        {/* Main Content */}
        <div className="mt-16 space-y-12">
          {content.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  delay: index * 0.08,
                }}
                className="group"
              >
                <div className="grid gap-6 border-b border-primaryOrtho/10 pb-12 lg:grid-cols-[220px_1fr] lg:gap-10">
                  {/* Left */}
                  <div>
                    <div className="sticky top-24">
                      {/* Icon */}
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primaryOrtho shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
                        <Icon size={28} weight="fill" className="text-secondaryOrtho" />
                      </div>

                      {/* Label */}
                      <div className="mt-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <h3 className="max-w-2xl text-2xl font-black  text-primaryOrtho sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-3xl text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px] lg:text-base">
                      {item.description}
                    </p>

                    {/* Extra Content */}
                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-primaryOrtho">
                          Commitment
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-primaryOrtho/60">
                          Delivering advanced Orthopaedic solutions with personalized care,
                          precision treatments, and trusted recovery support.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-primaryOrtho">
                          Patient Focus
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-primaryOrtho/60">
                          Every treatment plan is designed around patient comfort, mobility
                          improvement, and long-term wellness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Values */}
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
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondaryOrtho">
              <FlagBanner size={18} weight="fill" className="text-white" />
            </div>

            <span className="text-sm font-black uppercase tracking-[0.2em] text-primaryOrtho">
              Core Values
            </span>
          </div>

          {/* Values */}
          {values.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -2,
              }}
              className="rounded-full border border-primaryOrtho/10 bg-white px-5 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
            >
              <span className="text-sm font-semibold text-primaryOrtho">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
