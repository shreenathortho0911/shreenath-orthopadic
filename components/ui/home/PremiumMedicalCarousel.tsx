"use client";

import {
  ArrowRight,
  CaretLeft,
  CaretRight,
  Heartbeat,
  ShieldCheck,
  Stethoscope,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Sports Injury Center",
    subtitle: "Get Back To Peak Performance",
    description:
      "Specialized care for ligament injuries, fractures, muscle tears, and sports rehabilitation with advanced recovery programs.",
    image: "/carousel/eight.png",
    badge: "Sports Medicine",
  },
  {
    id: 2,
    title: "Orthopedic Excellence",
    subtitle: "Advanced Knee, Hip & Spine Care",
    smallSubtitle: "Trusted Orthopedic Specialists",
    description:
      "Comprehensive orthopedic treatments focused on restoring mobility, reducing pain, and helping patients return to active living.",
    image: "/carousel/seven.png",
    badge: "Orthopaedic",
  },

  {
    id: 3,
    title: "Joint Replacement Surgery",
    subtitle: "Move Better. Live Pain Free.",
    description:
      "Modern robotic-assisted knee and hip replacement surgeries designed for faster recovery and long-term comfort.",
    image: "/carousel/hip.png",
    badge: "Joint Replacement",
  },
];

export default function PremiumMedicalCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <section className="relative overflow-hidden section-wrapper py-12 sm:py-14 lg:py-17">
      <div className="mx-auto max-w-400 px-4">
        <div
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
          className="relative overflow-hidden rounded-[28px] lg:rounded-[42px] shadow-[0_30px_90px_rgba(17,34,78,0.18)]"
          style={{
            height: "min(720px, calc(100vh - 120px))",
          }}
        >
          {/* Slides */}
          <AnimatePresence mode="sync">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                priority
                className="object-cover md:object-cover object-[center_top] md:object-center scale-100 sm:scale-105 transition-transform duration-7000"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-primaryOrtho/95 via-primaryOrtho/75 to-primaryOrtho/25" />

              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.04]">
                <div className="absolute left-0 top-0 h-full w-[40%] bg-[radial-gradient(circle_at_center,_white_2px,_transparent_2px)] bg-[length:38px_38px]" />
              </div>

              {/* Glow */}
              <motion.div
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-secondaryOrtho/20 blur-3xl"
              />

              {/* Content */}
              <div className="relative z-10 flex h-full items-center">
                <div className="grid w-full grid-cols-1 gap-12 px-5 py-10 sm:px-8 md:px-10 lg:grid-cols-[1fr_420px] lg:px-16 xl:px-20">
                  {/* LEFT */}
                  <div className="flex flex-col justify-center">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="mb-5 hidden md:flex w-fit items-center gap-3 rounded-2xl bg-secondaryOrtho px-5 py-3 shadow-[0_10px_30px_rgba(248,123,27,0.35)]"
                    >
                      <Heartbeat size={26} weight="duotone" className="text-tertiaryOrtho" />

                      <span className="text-sm font-bold tracking-wide text-tertiaryOrtho md:text-base">
                        {slides[current].badge}
                      </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                      key={`title-${current}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="max-w-[720px] text-2xl font-black leading-tight tracking-tight text-tertiaryOrtho sm:text-4xl md:text-5xl xl:text-7xl"
                    >
                      {slides[current].subtitle}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                      key={`desc-${current}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.08,
                        duration: 0.5,
                      }}
                      className="mt-5 max-w-[620px] text-sm leading-relaxed text-tertiaryOrtho/75 sm:text-base md:text-lg"
                    >
                      {slides[current].description}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.45 }}
                      className="mt-7 flex flex-wrap gap-3"
                    >
                      {["24/7 Specialist Care", "Modern Technology", "Trusted Experts"].map(
                        (item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 rounded-full border border-tertiaryOrtho/15 bg-tertiaryOrtho/10 px-4 py-2.5 backdrop-blur-md transition-all duration-300 hover:bg-tertiaryOrtho/15"
                          >
                            <ShieldCheck size={16} weight="fill" className="text-secondaryOrtho" />

                            <span className="text-xs font-medium text-tertiaryOrtho sm:text-sm">
                              {item}
                            </span>
                          </div>
                        ),
                      )}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.45 }}
                      className="mt-8 flex flex-wrap items-center gap-4"
                    >
                      {/* Primary */}
                      <Link
                        href={"/treatments"}
                        className="group relative overflow-hidden rounded-full bg-secondaryOrtho px-7 py-4 text-sm font-semibold text-tertiaryOrtho shadow-[0_10px_30px_rgba(248,123,27,0.35)] transition-all cursor-pointer duration-300 hover:scale-[1.03] md:text-base"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Explore Treatments
                          <ArrowRight
                            size={18}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </span>

                        <div className="absolute inset-0 translate-y-full bg-tertiaryOrtho/20 transition-transform duration-300 group-hover:translate-y-0" />
                      </Link>

                      {/* Secondary */}
                      <Link
                        href={"/contact#appointment"}
                        className="group cursor-pointer flex items-center gap-2 rounded-full border border-tertiaryOrtho/20 bg-tertiaryOrtho/10 px-7 py-4 text-sm font-semibold text-tertiaryOrtho backdrop-blur-xl transition-all duration-300 hover:border-tertiaryOrtho/40 hover:bg-tertiaryOrtho hover:text-primaryOrtho md:text-base"
                      >
                        <Stethoscope size={18} weight="bold" />
                        Book Appointment
                      </Link>
                    </motion.div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="relative hidden lg:flex items-center justify-center">
                    {/* Top Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -12, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute right-0 top-14 w-[300px] rounded-[30px] border border-tertiaryOrtho/15 bg-tertiaryOrtho/10 p-7 backdrop-blur-2xl"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-tertiaryOrtho/70">
                          Emergency Support
                        </span>

                        <div className="h-3 w-3 rounded-full bg-secondaryOrtho" />
                      </div>

                      <h3 className="mt-4 text-5xl font-black text-tertiaryOrtho">24&times;7</h3>

                      <div className="mt-6 h-2 overflow-hidden rounded-full bg-tertiaryOrtho/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "98%" }}
                          transition={{ duration: 1.5 }}
                          className="h-full rounded-full bg-secondaryOrtho"
                        />
                      </div>
                    </motion.div>

                    {/* Bottom Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, 12, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-14 left-0 w-[280px] rounded-[30px] border border-tertiaryOrtho/15 bg-tertiaryOrtho/10 p-6 backdrop-blur-2xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondaryOrtho shadow-lg">
                          <Heartbeat size={30} weight="fill" className="text-tertiaryOrtho" />
                        </div>

                        <div>
                          <h4 className="text-4xl font-black text-tertiaryOrtho">Expert</h4>

                          <p className="mt-1 text-sm text-tertiaryOrtho/70">Orthopedic Care</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            className="group absolute cursor-pointer left-0.5 lg:left-4 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondaryOrtho/70 text-tertiaryOrtho backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-secondaryOrtho"
          >
            <CaretLeft
              size={24}
              weight="bold"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            className="group absolute cursor-pointer  right-0.5  lg:right-4 top-1/2 z-30 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-secondaryOrtho/70 text-tertiaryOrtho backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-secondaryOrtho"
          >
            <CaretRight
              size={24}
              weight="bold"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>

          {/* Pagination */}
          <div className="hidden absolute bottom-3 left-1/2 z-30 md:flex -translate-x-1/2 gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  current === index
                    ? "w-12 bg-secondaryOrtho"
                    : "w-3 bg-tertiaryOrtho/40 hover:bg-tertiaryOrtho/70"
                }`}
              />
            ))}
          </div>

          {/* Bottom Gradient */}
          <div className="absolute bottom-0 left-0 h-36 w-full bg-gradient-to-t from-primaryOrtho/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
