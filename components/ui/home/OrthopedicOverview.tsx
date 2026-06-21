"use client";

import { Ambulance, ArrowRight, Buildings, Heartbeat, Stethoscope } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "24×7 Emergency Care",
    description:
      "Advanced trauma and emergency support available round the clock with rapid response specialists.",
    icon: Ambulance,
  },

  {
    title: "ICU On Wheels",
    description:
      "Fully equipped ambulance services with life-saving technology and trained emergency staff.",
    icon: Heartbeat,
  },

  {
    title: "Expert Doctor",
    description:
      "Highly experienced specialist in Orthopaedic, spine care, joint replacement, and rehabilitation.",
    icon: Stethoscope,
  },

  {
    title: "Advanced Facilities",
    description:
      "Modern infrastructure and state-of-the-art Orthopaedic treatment technologies for better recovery.",
    icon: Buildings,
  },
];

export default function HospitalIntroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 sm:py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1450px] px-4 sm:px-6 lg:px-8">
        {/* TOP */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <div>
            {/* Premium Responsive Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              viewport={{ once: true }}
              className="mb-5 flex w-fit items-center gap-2 sm:gap-3"
            >
              {/* Left Line */}
              <div className="h-[2px] w-5 rounded-full bg-gradient-to-r from-transparent to-secondaryOrtho sm:w-8 lg:w-10" />

              {/* Badge */}
              <div className="group relative overflow-hidden rounded-full border border-secondaryOrtho/15 bg-tertiaryOrtho/90 px-3 py-1.5 shadow-[0_8px_25px_rgba(248,123,27,0.08)] backdrop-blur-xl sm:px-4 sm:py-2 lg:px-5">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondaryOrtho/0 via-secondaryOrtho/10 to-secondaryOrtho/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-1.5 sm:gap-2">
                  {/* Animated Dot */}
                  <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondaryOrtho/60 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondaryOrtho sm:h-2.5 sm:w-2.5" />
                  </div>

                  {/* Text */}
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-primaryOrtho sm:text-xs sm:tracking-[0.22em] lg:text-sm">
                    Shreenath Orthopaedic Hospital
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl text-2xl font-black leading-tight text-primaryOrtho sm:text-4xl md:text-5xl "
            >
              Shreenath
              <span className="text-secondaryOrtho"> Orthopaedic & Joint Care </span>
              Hospital
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg"
            >
              Our Orthopaedic center combines advanced treatments, experienced surgeons, and modern
              rehabilitation programs to provide comprehensive care for bones, joints, spine, and
              sports injuries. With state-of-the-art infrastructure and patient-focused care, we
              help patients recover faster and live pain free.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group mt-8 cursor-pointer inline-flex items-center gap-2 rounded-full bg-primaryOrtho px-7 py-4 text-sm font-semibold text-tertiaryOrtho shadow-[0_15px_40px_rgba(17,34,78,0.18)] transition-all duration-300 hover:bg-secondaryOrtho md:text-base"
            >
              <Link href={"/facilities"} className="flex gap-3 justify-center items-center">
                See Facilities
                <ArrowRight
                  size={18}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-white/20 bg-white p-3 shadow-[0_25px_70px_rgba(17,34,78,0.12)]">
              <div className="relative h-[320px] overflow-hidden rounded-[26px] sm:h-[420px]">
                <Image src="/home.png" alt="Orthopaedic Care" fill className="object-cover" />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho/50 via-transparent to-transparent" />

                {/* Floating Card */}
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl">
                  <h4 className="text-sm font-black text-white">Modern</h4>

                  <p className="mt-1  text-3xl text-white/80">Surgical Care</p>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />
          </motion.div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-tertiaryOrtho p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-secondaryOrtho/20 hover:shadow-[0_20px_50px_rgba(248,123,27,0.08)]"
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondaryOrtho/0 blur-3xl transition-all duration-500 group-hover:bg-secondaryOrtho/10" />

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondaryOrtho/10 transition-all duration-300 group-hover:bg-secondaryOrtho">
                  <Icon
                    size={28}
                    weight="fill"
                    className="text-secondaryOrtho transition-colors duration-300 group-hover:text-tertiaryOrtho"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-bold leading-snug text-primaryOrtho">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
