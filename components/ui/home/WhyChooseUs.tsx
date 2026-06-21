"use client";

import { Ambulance, Heartbeat, Medal, Microscope, Pulse, UsersThree } from "@phosphor-icons/react";
import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10,
    suffix: "+",
    title: "Years Experience",
    icon: Medal,
  },

  {
    value: 100,
    suffix: "+",
    title: "Successful Treatments",
    icon: Heartbeat,
  },

  {
    value: 24,
    suffix: "×7",
    title: "Emergency Care",
    icon: Ambulance,
  },

  {
    value: 10,
    suffix: "+",
    title: "Years Experience",
    icon: UsersThree,
  },

  {
    value: 100,
    suffix: "%",
    title: "Modern Diagnostics",
    icon: Microscope,
  },

  {
    value: 7,
    suffix: "+",
    title: "Facilities",
    icon: Pulse,
  },
];

/* Counter */
function Counter({ from = 0, to }: { from?: number; to: number }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",

      onUpdate(value) {
        setCount(Math.floor(value));
      },
    });

    return () => controls.stop();
  }, [from, to, isInView]);

  return <span ref={ref}>{count}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#f8fafc] section-container overflow-hidden ">
      <div className="container-wrapper">
        {/* Header */}

        {/* Premium Counter Experience */}
        <div className="relative ">
          {/* Main Structure */}
          <div className="relative overflow-hidden rounded-[40px] bg-primaryOrtho">
            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
              <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondaryOrtho/10 blur-3xl" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.04]">
              <div className="grid h-full grid-cols-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white/10" />
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="relative px-6 py-3 sm:p-8 lg:p-12 xl:p-16">
              {/* Top */}
              <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
                {/* Left */}
                <div className="max-w-3xl">
                  {/* Small Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-[2px] w-12 rounded-full bg-secondaryOrtho" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-secondaryOrtho sm:text-xs">
                      Trusted Orthopaedic Excellence
                    </span>
                  </div>

                  {/* Big Counter */}
                  <h3 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] text-tertiaryOrtho sm:text-6xl lg:text-7xl xl:text-8xl">
                    <Counter to={100} />+
                  </h3>

                  {/* Heading */}
                  <h4 className="mt-4 text-2xl font-black  text-tertiaryOrtho sm:text-3xl lg:text-4xl">
                    Successful Orthopaedic
                    <br />
                    <span className="text-secondaryOrtho">Treatments & Recoveries</span>
                  </h4>
                </div>

                {/* Right */}
                <div className="max-w-md">
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                    Combining modern Orthopaedic technology, expert surgeons, precision treatments,
                    and patient-first recovery experiences.
                  </p>

                  {/* Progress */}
                  <div className="mt-7">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                        Patient-Centered Care
                      </span>

                      <span className="text-lg font-black text-secondaryOrtho">100%</span>
                    </div>

                    <div className="h-[5px] overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "98%" }}
                        transition={{
                          duration: 1.5,
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-secondaryOrtho to-[#ffb067]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics */}
              <div className="mt-16 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 xl:grid-cols-4">
                {stats.slice(2).map((item, index) => {
                  const Icon = item.icon;

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
                        y: -4,
                      }}
                      className="group relative"
                    >
                      {/* Top */}
                      <div className="flex items-center gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{
                            rotate: -10,
                            scale: 1.06,
                          }}
                          transition={{ duration: 0.3 }}
                          className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
                        >
                          {/* Pulse */}
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                            className="absolute inset-0 rounded-2xl border border-secondaryOrtho/30"
                          />

                          <Icon size={24} weight="fill" className="relative text-secondaryOrtho" />
                        </motion.div>

                        {/* Counter */}
                        <div>
                          <h4 className="text-3xl font-black leading-none tracking-[-0.05em] text-tertiaryOrtho sm:text-4xl">
                            <Counter to={item.value} />

                            {item.suffix}
                          </h4>

                          <p className="mt-2 text-sm font-medium text-white/60">{item.title}</p>
                        </div>
                      </div>

                      {/* Bottom Line */}
                      <div className="mt-6 flex items-center gap-3">
                        <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{
                              duration: 1,
                              delay: index * 0.12,
                            }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-secondaryOrtho to-[#ffb067]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
