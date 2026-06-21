"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Yugant Panchal",
    initials: "YP",
    treatment: "Knee Replacement",
    review:
      "Excellent care and guidance throughout my treatment. Supportive staff, clean facilities, and a smooth recovery experience.",
    result: "Walking Comfort Restored",
    stat: "92%",
    statLabel: "Mobility Regained",
  },

  {
    name: "Nikhil Dhanula",
    initials: "ND",
    treatment: "Spine Rehabilitation",
    review:
      "Modern facilities, skilled doctors, and attentive care. My recovery was faster than expected, and the support was outstanding.",
    result: "Improved Flexibility",
    stat: "95%",
    statLabel: "Pain Reduction",
  },

  {
    name: "Chaitanya Porania",
    initials: "CP",
    treatment: "Sports Injury Recovery",
    review:
      "Professional doctor with excellent knowledge. The staff was friendly, supportive, and made the recovery process comfortable.",
    result: "Active Lifestyle Restored",
    stat: "6 Wks",
    statLabel: "Recovery Time",
  },

  {
    name: "Samir Bhatiya",
    initials: "SB",
    treatment: "Fracture Recovery",
    review:
      "Caring doctor and helpful team. They addressed all my concerns and ensured I felt confident throughout treatment.",
    result: "Full Mobility Restored",
    stat: "100%",
    statLabel: "Bone Healing",
  },
];

// ─────────────────────────────────────────────────────────

function NavButton({
  onClick,
  direction,
  className,
}: {
  onClick: () => void;

  direction: "prev" | "next";
  className: "cursor-pointer";
}) {
  const isPrev = direction === "prev";

  return (
    <button
      onClick={onClick}
      className={[
        "flex h-11 w-11 items-center cursor-pointer justify-center rounded-full transition-all duration-300",

        isPrev
          ? "border border-primaryOrtho/10 bg-white text-primaryOrtho hover:bg-primaryOrtho hover:text-white"
          : "bg-primaryOrtho text-white hover:bg-secondaryOrtho",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        {isPrev ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

// ─────────────────────────────────────────────────────────

export default function PremiumTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho py-24">
      {/* ───── Premium Orthopaedic Background ───── */}

      {/* Main Glow */}
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

      {/* Floating Rings */}
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

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-[14%] right-[12%]

          h-44 w-44

          rounded-full

          border border-primaryOrtho/10
        "
      />

      {/* Plus Pattern */}
      <div className="absolute right-[12%] top-[18%] opacity-[0.05]">
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="relative h-4 w-4">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-primaryOrtho" />

              <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-primaryOrtho" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-tertiaryOrtho to-transparent" />

      {/* ───────────────────────────────────── */}

      <div className="container-wrapper relative">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[2px] w-10 rounded-full bg-secondaryOrtho" />

              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                Patient Testimonials
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
              Recovery
              <span className="text-secondaryOrtho"> Experiences</span>
            </h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-3 sm:flex">
            <NavButton onClick={prev} direction="prev" className="cursor-pointer" />

            <NavButton onClick={next} direction="next" className="cursor-pointer" />
          </div>
        </div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                relative overflow-hidden

                rounded-[34px]

                border border-primaryOrtho/10

                bg-white/80
                backdrop-blur-2xl

                shadow-[0_24px_70px_rgba(17,34,78,0.08)]
              "
            >
              {/* Glow */}
              <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

              <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px]">
                {/* LEFT */}
                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Top */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    {/* Quote */}
                    <div
                      className="
                        flex h-16 w-16 items-center justify-center

                        rounded-[20px]

                        bg-primaryOrtho

                        text-secondaryOrtho
                      "
                    >
                      <svg viewBox="0 0 32 28" className="h-7 w-7 fill-current">
                        <path d="M10 4C5.58 4 2 7.58 2 12c0 4.41 3.58 8 8 8v8l8-8c0-4.42-3.58-8-8-8zm12 0c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8v8l8-8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>

                    {/* Badge */}
                    <div
                      className="
                        rounded-full

                        border border-primaryOrtho/10

                        bg-primaryOrtho/5

                        px-4 py-2
                      "
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondaryOrtho">
                        {active.treatment}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="mt-6 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 16 16" className="h-4 w-4 fill-secondaryOrtho">
                        <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.3l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 1z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-7 max-w-3xl text-lg md:text-[1.45rem] leading-[1.9] tracking-[-0.02em] text-primaryOrtho">
                    “{active.review}”
                  </p>

                  {/* Bottom */}
                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    {/* Avatar */}
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex h-14 w-14 items-center justify-center

                          rounded-full

                          border-2 border-secondaryOrtho/20

                          bg-primaryOrtho

                          text-lg font-semibold text-white
                        "
                      >
                        {active.initials}
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-primaryOrtho">{active.name}</h3>

                        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-secondaryOrtho">
                          Orthopaedic Patient
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden h-10 w-px bg-primaryOrtho/10 sm:block" />

                    {/* Outcome */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        Recovery Outcome
                      </p>

                      <div
                        className="
                          mt-2 inline-flex items-center gap-2

                          rounded-full

                          bg-primaryOrtho/5

                          px-4 py-2
                        "
                      >
                        <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                        <span className="text-sm font-semibold text-primaryOrtho">
                          {active.result}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Nav */}
                  <div className="mt-8 flex items-center gap-3 sm:hidden">
                    <NavButton onClick={prev} direction="prev" className="cursor-pointer" />

                    <NavButton onClick={next} direction="next" className="cursor-pointer" />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="relative hidden overflow-hidden bg-primaryOrtho lg:flex">
                  {/* Glow */}
                  <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-secondaryOrtho/10 blur-3xl" />

                  <div className="relative flex w-full flex-col items-center justify-center gap-8 px-8 py-10 text-center">
                    {/* Circle */}
                    <div
                      className="
                        flex h-24 w-24 items-center justify-center

                        rounded-full

                        border border-secondaryOrtho/20

                        bg-secondaryOrtho/10
                      "
                    >
                      <div>
                        <h4 className="text-3xl font-black text-white">{active.stat}</h4>

                        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                          {active.statLabel}
                        </p>
                      </div>
                    </div>

                    {/* Line */}
                    <div className="h-12 w-[1px] bg-secondaryOrtho/20" />

                    {/* Condition */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                        Treatment Area
                      </p>

                      <h4 className="mt-3 text-lg font-semibold leading-relaxed text-white">
                        {active.treatment}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={[
                "h-1.5 cursor-pointer rounded-full transition-all duration-300",

                i === activeIndex
                  ? "w-7 bg-primaryOrtho"
                  : "w-1.5 bg-primaryOrtho/20 hover:bg-primaryOrtho/40",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
