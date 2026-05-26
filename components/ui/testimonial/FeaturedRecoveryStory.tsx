"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarBlank,
  Heartbeat,
  PlayCircle,
  Stethoscope,
} from "@phosphor-icons/react";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Pain & Mobility",
    description: "Movement difficulty and daily discomfort affecting lifestyle.",
  },

  {
    step: "02",
    title: "Advanced Treatment",
    description: "Orthopedic diagnosis and personalized recovery planning.",
  },

  {
    step: "03",
    title: "Rehabilitation",
    description: "Strength rebuilding and guided mobility recovery support.",
  },

  {
    step: "04",
    title: "Restored Movement",
    description: "Improved walking comfort and active lifestyle recovery.",
  },
];

export default function FeaturedRecoveryStory() {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho py-24">
      {/* Background */}
      <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-secondaryOrtho/10 blur-[120px]" />

      <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-primaryOrtho/10 blur-[140px]" />

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
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
              Featured Recovery Story
            </span>

            <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
            Featured
            <span className="text-secondaryOrtho"> Patient Journey</span>
          </h2>

          <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
            A complete orthopedic recovery journey focused on restoring mobility and supporting
            long-term movement.
          </p>
        </div>

        {/* Main */}
        <div
          className="
            relative mt-16 overflow-hidden

            rounded-[40px]

            border border-primaryOrtho/10

            bg-white/70
            backdrop-blur-2xl

            shadow-[0_30px_90px_rgba(17,34,78,0.08)]
          "
        >
          {/* Glow */}
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

          <div className="grid gap-0 xl:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              className="relative p-5 md:p-7"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[32px]">
                <div className="relative h-[300px] md:h-[500px]">
                  <Image
                    src="/images/testimonial/patient-story.jpg"
                    alt="Recovery Story"
                    fill
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho via-primaryOrtho/20 to-transparent" />

                  {/* Floating Tags */}
                  <div className="absolute left-5 top-5 flex flex-wrap gap-3">
                    {[
                      {
                        icon: CalendarBlank,
                        label: "12 Week Recovery",
                      },

                      {
                        icon: Heartbeat,
                        label: "Knee Replacement",
                      },
                    ].map((item, index) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={index}
                          className="
                            flex items-center gap-2

                            rounded-full

                            border border-white/10

                            bg-white/10
                            backdrop-blur-xl

                            px-4 py-2
                          "
                        >
                          <Icon size={15} weight="fill" className="text-secondaryOrtho" />

                          <span className="text-xs font-semibold text-white">{item.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                      Recovery Success Story
                    </p>

                    <h3 className="mt-4 max-w-xl text-3xl md:text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white">
                      From Pain To
                      <span className="text-secondaryOrtho"> Active Movement</span>
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                      Personalized orthopedic rehabilitation focused on flexibility, strength, and
                      mobility restoration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                {/* Watch */}
                <Link href="/">
                  <motion.div
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="
                      group flex items-center gap-3

                      rounded-full

                      bg-primaryOrtho

                      px-5 py-3

                      text-sm font-semibold text-white

                      transition-all duration-300
                      hover:bg-secondaryOrtho
                    "
                  >
                    <PlayCircle size={18} weight="fill" />

                    <Link href={"/testimonials/#story"}>Watch Recovery Story</Link>

                    <ArrowRight
                      size={15}
                      weight="bold"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.div>
                </Link>

                {/* Doctor */}
                <div
                  className="
                    flex items-center gap-3

                    rounded-full

                    border border-primaryOrtho/10

                    bg-white

                    px-5 py-3

                    shadow-[0_10px_30px_rgba(17,34,78,0.06)]
                  "
                >
                  <div
                    className="
                      flex h-10 w-10 items-center justify-center

                      rounded-full

                      bg-primaryOrtho

                      text-secondaryOrtho
                    "
                  >
                    <Stethoscope size={18} weight="fill" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondaryOrtho">
                      Specialist
                    </p>

                    <h4 className="text-sm font-black text-primaryOrtho">Dr. Homy J. Modi</h4>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="relative flex items-center p-5 md:p-7 xl:p-8"
            >
              <div
                className="
                  relative w-full overflow-hidden

                  rounded-[32px]

                  border border-primaryOrtho/10

                  bg-tertiaryOrtho

                  p-6 md:p-8
                "
              >
                {/* Glow */}
                <div className="absolute -right-16 top-0 h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />

                {/* Heading */}
                <div className="relative">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                      Recovery Timeline
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
                    Recovery
                    <span className="text-secondaryOrtho"> Progress</span>
                  </h3>
                </div>

                {/* Timeline */}
                <div className="relative mt-10 space-y-8">
                  {/* Line */}
                  <div className="absolute left-[18px] top-0 h-full w-[2px] bg-gradient-to-b from-secondaryOrtho/10 via-secondaryOrtho/40 to-secondaryOrtho/10" />

                  {steps.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        x: 4,
                      }}
                      className="group relative flex gap-5"
                    >
                      {/* Dot */}
                      <div
                        className="
                          relative z-10

                          flex h-9 w-9 flex-shrink-0 items-center justify-center

                          rounded-full

                          bg-secondaryOrtho

                          text-[10px] font-bold text-white

                          shadow-[0_10px_30px_rgba(248,123,27,0.3)]
                        "
                      >
                        {item.step}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg font-black tracking-[-0.03em] text-primaryOrtho transition-all duration-300 group-hover:text-secondaryOrtho">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-relaxed text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
                      Recovery Progress
                    </span>

                    <span className="text-sm font-black text-primaryOrtho">95%</span>
                  </div>

                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "95%",
                      }}
                      transition={{
                        duration: 1.2,
                      }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-primaryOrtho to-secondaryOrtho"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
