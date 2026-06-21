"use client";

import { useState } from "react";

import {
  ArrowUpRight,
  Bone,
  BoneIcon,
  FirstAidKit,
  HandPalm,
  HeadCircuit,
  PersonSimpleRun,
} from "@phosphor-icons/react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const painAreas = [
  {
    id: "neck",

    title: "Neck",

    specialist: "Neck & Spine Specialist",

    description:
      "Comprehensive cervical spine care focused on posture correction, nerve pain relief, stiffness reduction, and restoring comfortable neck mobility for everyday movement.",

    badges: ["Posture Correction", "Nerve Pain Relief", "Mobility Recovery"],

    icon: HeadCircuit,
  },

  {
    id: "shoulder",

    title: "Shoulder",

    specialist: "Shoulder Care Expert",

    description:
      "Advanced shoulder treatments designed for ligament injuries, frozen shoulder conditions, mobility improvement, and long-term pain-free movement recovery.",

    badges: ["Frozen Shoulder", "Ligament Recovery", "Mobility Support"],

    icon: HandPalm,
  },

  {
    id: "spine",

    title: "Spine",

    specialist: "Spine Surgery Specialist",

    description:
      "Modern spine procedures and rehabilitation-focused treatments for chronic back pain, disc issues, posture improvement, and faster recovery support.",

    badges: ["Disc Treatment", "Back Pain Care", "Rehabilitation"],

    icon: Bone,
  },

  {
    id: "knee",

    title: "Knee",

    specialist: "Joint Replacement Expert",

    description:
      "Precision Orthopaedic solutions for knee pain, arthritis, sports injuries, and advanced joint replacement procedures focused on restoring mobility.",

    badges: ["Arthritis Care", "Joint Replacement", "Sports Recovery"],

    icon: PersonSimpleRun,
  },

  {
    id: "trauma",

    title: "Trauma",

    specialist: "Emergency Trauma Team",

    description:
      "Immediate Orthopaedic emergency support for fractures, accidents, trauma injuries, and recovery-focused rehabilitation care with rapid treatment response.",

    badges: ["Fracture Support", "Emergency Care", "Rapid Recovery"],

    icon: FirstAidKit,
  },
  {
    id: "hip",

    title: "Hip",

    specialist: "Hip Replacement Specialist",

    description:
      "Advanced hip treatments and joint replacement procedures focused on improving flexibility, reducing pain, and restoring smooth everyday movement with faster recovery support.",

    badges: ["Joint Flexibility", "Hip Replacement", "Pain-Free Movement"],

    icon: BoneIcon,
  },
];

export default function SmartPainSelectorSection() {
  const [activePain, setActivePain] = useState(painAreas[0]);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-10 sm:py-14">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-20%] h-64 w-64 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-72 w-72 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Main Wrapper */}
        <div className="overflow-hidden rounded-[34px] border border-primaryOrtho/10 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}
            <div className="border-b border-primaryOrtho/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
              {/* Label */}
              <div className="inline-flex items-center gap-2 rounded-full bg-secondaryOrtho/10 px-3 py-1.5">
                <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-secondaryOrtho">
                  Smart Care Experience
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 max-w-sm text-2xl font-black  text-primaryOrtho sm:text-3xl">
                Tell Us
                <span className="text-secondaryOrtho"> Where It Hurts</span>
              </h2>

              {/* Desc */}
              <p className="mt-3 max-w-md text-sm leading-relaxed text-primaryOrtho/60">
                Select your pain area to discover the right Orthopaedic care and specialist support.
              </p>

              {/* Selector */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {painAreas.map((item) => {
                  const Icon = item.icon;

                  const isActive = activePain.id === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      whileTap={{
                        scale: 0.97,
                      }}
                      onClick={() => setActivePain(item)}
                      className={`group  cursor-pointer rounded-[22px] border p-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-secondaryOrtho bg-secondaryOrtho text-white shadow-[0_15px_35px_rgba(248,123,27,0.22)]"
                          : "border-primaryOrtho/10 bg-[#f8fafc] hover:border-secondaryOrtho/20 hover:bg-secondaryOrtho/5"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300 ${
                          isActive ? "bg-white/15" : "bg-secondaryOrtho/10"
                        }`}
                      >
                        <Icon
                          size={20}
                          weight="fill"
                          className={`transition-all duration-300 ${
                            isActive ? "text-white" : "text-secondaryOrtho"
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-sm font-black tracking-[-0.03em]">{item.title}</h3>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden bg-primaryOrtho p-5 sm:p-6">
              {/* Glow */}
              <div className="absolute right-[-15%] top-[-15%] h-56 w-56 rounded-full bg-secondaryOrtho/10 blur-3xl" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePain.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative flex h-full flex-col justify-between"
                >
                  {/* Top */}
                  <div>
                    {/* Small Label */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
                      <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        Specialist Recommendation
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="mt-5 max-w-md text-3xl font-black  text-white sm:text-4xl">
                      {activePain.specialist}
                    </h3>

                    {/* Dynamic Description */}
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-[15px]">
                      {activePain.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-8">
                    {/* CTA */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {/* Primary */}
                      <Link
                        href={"/contact#appointment"}
                        className="group flex items-center justify-center gap-3 rounded-2xl bg-secondaryOrtho px-5 py-4 shadow-[0_15px_35px_rgba(248,123,27,0.22)] transition-all duration-300 hover:-translate-y-1"
                      >
                        <span className="text-sm font-bold text-white">Book Appointment</span>

                        <ArrowUpRight
                          size={16}
                          weight="bold"
                          className="text-white transition-transform duration-300 group-hover:rotate-45"
                        />
                      </Link>

                      {/* Secondary */}
                      <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
                        Emergency Support
                      </button>
                    </div>

                    {/* Dynamic Tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {activePain.badges.map((badge, index) => (
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
                        >
                          <span className="text-[11px] font-semibold text-white">{badge}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
