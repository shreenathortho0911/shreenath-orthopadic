"use client";

import { useEffect, useState } from "react";

import {
  Bone,
  Heartbeat,
  Lightning,
  PersonSimpleWalk,
  Play,
  Pulse,
  X,
} from "@phosphor-icons/react";

import { AnimatePresence, motion } from "framer-motion";

const videos = [
  {
    patient: "Ramesh Patel",

    category: "Knee Replacement",

    treatment: "Advanced Knee Surgery",

    outcome: "Walking comfortably after recovery.",

    video: "/videos/testimonial-demo.mp4",

    icon: Heartbeat,
  },

  {
    patient: "Meera Shah",

    category: "Spine Recovery",

    treatment: "Spine Rehabilitation",

    outcome: "Improved posture and flexibility.",

    video: "/videos/testimonial-demo.mp4",

    icon: Pulse,
  },

  {
    patient: "Amit Verma",

    category: "Sports Recovery",

    treatment: "Sports Injury Therapy",

    outcome: "Returned to active lifestyle recovery.",

    video: "/videos/testimonial-demo.mp4",

    icon: Lightning,
  },

  {
    patient: "Kiran Joshi",

    category: "Fracture Recovery",

    treatment: "Bone Rehabilitation",

    outcome: "Restored mobility and confidence.",

    video: "/videos/testimonial-demo.mp4",

    icon: Bone,
  },

  {
    patient: "Suresh Patel",

    category: "Mobility Recovery",

    treatment: "Senior Rehabilitation",

    outcome: "Improved walking support and balance.",

    video: "/videos/testimonial-demo.mp4",

    icon: PersonSimpleWalk,
  },

  {
    patient: "Anjali Mehta",

    category: "Joint Recovery",

    treatment: "Joint Rehabilitation",

    outcome: "Reduced pain and restored movement.",

    video: "/videos/testimonial-demo.mp4",

    icon: Pulse,
  },
];

export default function PremiumVideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedVideo]);

  return (
    <>
      <section id="story" className="relative overflow-hidden bg-tertiaryOrtho py-24">
        {/* Background */}
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

        {/* Rings */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute left-[8%] top-[18%]

            h-32 w-32

            rounded-full

            border border-secondaryOrtho/15
          "
        />

        <div className="container-wrapper relative">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-secondaryOrtho">
                Video Testimonials
              </span>

              <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
              Patient Recovery
              <span className="text-secondaryOrtho"> Experiences</span>
            </h2>

            <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
              Real orthopedic recovery journeys shared after successful treatment and rehabilitation
              care.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {videos.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
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
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                  }}
                  onClick={() => setSelectedVideo(item.video)}
                  className="
                    group relative overflow-hidden

                    rounded-[32px]

                    border border-primaryOrtho/10

                    bg-white/70
                    backdrop-blur-2xl

                    text-left

                    shadow-[0_18px_60px_rgba(17,34,78,0.06)]

                    transition-all duration-500
                  "
                >
                  {/* Glow */}
                  <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-secondaryOrtho/10 blur-3xl" />

                  {/* Video */}
                  <div className="relative h-72 overflow-hidden">
                    <video
                      className="
                        h-full w-full object-cover

                        transition-all duration-700
                        group-hover:scale-105
                      "
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho via-primaryOrtho/10 to-transparent" />

                    {/* Play */}
                    <div
                      className="
                        absolute left-1/2 top-1/2

                        flex h-20 w-20
                        -translate-x-1/2 -translate-y-1/2

                        items-center justify-center

                        rounded-full

                        border border-white/10

                        bg-white/10
                        backdrop-blur-xl

                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:bg-secondaryOrtho
                      "
                    >
                      <Play size={28} weight="fill" className="ml-1 text-white" />
                    </div>

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <div
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

                        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    <h3 className="text-2xl font-black tracking-[-0.03em] text-primaryOrtho">
                      {item.patient}
                    </h3>

                    <p className="mt-3 text-sm font-semibold text-secondaryOrtho">
                      {item.treatment}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{item.outcome}</p>

                    {/* Bottom */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                        <span className="text-xs font-semibold text-slate-500">
                          Watch Recovery Story
                        </span>
                      </div>

                      <div
                        className="
                          h-[2px] w-10 rounded-full

                          bg-secondaryOrtho/30

                          transition-all duration-500
                          group-hover:w-16
                          group-hover:bg-secondaryOrtho
                        "
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
      {/* Popup */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
        fixed inset-0 z-[9999]

        flex items-center justify-center

        overflow-hidden

        bg-black/80
        backdrop-blur-xl

        p-4 md:p-8
      "
          >
            {/* Dark Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,123,27,0.15),transparent_45%)]" />

            {/* Close */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="
          absolute right-5 top-5 z-50

          flex h-12 w-12 items-center justify-center

          rounded-full

          border border-white/10

          bg-white/10
          backdrop-blur-xl

          text-white

          transition-all duration-300
          hover:bg-secondaryOrtho
        "
            >
              <X size={20} weight="bold" />
            </button>

            {/* Video Wrapper */}
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
          relative z-10

          w-full
          max-w-6xl

          overflow-hidden

          rounded-[32px]

          border border-white/10

          bg-black

          shadow-[0_40px_120px_rgba(0,0,0,0.45)]
        "
            >
              {/* Video */}
              <video
                controls
                autoPlay
                playsInline
                className="
            aspect-video
            w-full

            bg-black
            object-cover
          "
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
