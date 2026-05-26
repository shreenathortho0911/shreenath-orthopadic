"use client";

import { ArrowRight, Heartbeat, Pulse, ShieldCheck, Stethoscope } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = ["Joint Replacement", "Sports Recovery", "Spine Care", "Trauma Treatment"];

const stats = [
  {
    value: "25+",
    label: "Years",
  },
  {
    value: "10K+",
    label: "Surgeries",
  },
  {
    value: "24/7",
    label: "Emergency",
  },
];

export default function Hero() {
  return (
    <section className="relative section-padding lg:py-8  container-wrapper flex h-screen overflow-hidden bg-tertiaryOrtho">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#11224e08_1px,transparent_1px),linear-gradient(to_bottom,#11224e08_1px,transparent_1px)] bg-[size:90px_90px]" />

      {/* GLOW */}
      <div className="absolute left-[-120px] top-[10%] h-[420px] w-[420px] rounded-full bg-secondaryOrtho/10 blur-[120px]" />

      <div className="absolute bottom-[-150px] right-[-100px] h-[450px] w-[450px] rounded-full bg-primaryOrtho/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex h-screen w-full max-w-[1450px] items-center ">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col justify-center"
          >
            {/* BADGE */}
            <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-primaryOrtho/10 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl">
              <Heartbeat size={16} weight="fill" className="text-secondaryOrtho" />

              <span className="text-sm font-medium text-primaryOrtho">
                Advanced Orthopedic Excellence
              </span>
            </div>
            {/* HEADING */}
            <h1 className="max-w-[620px] font-heading text-[2.4rem] font-bold leading-[1.02] tracking-[-2px] text-primaryOrtho sm:text-[3.2rem] lg:text-[4.4rem]">
              Move Better.
              <br />
              <span className="relative inline-block">
                Recover
                <span className="absolute bottom-1 left-0 h-[10px] w-full rounded-full bg-secondaryOrtho/20" />
              </span>
              <span className="mx-3 text-secondaryOrtho">&</span>
              Live Without Pain.
            </h1>
            {/* DESC */}
            <p className="mt-5 max-w-[620px] text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
              Precision orthopedic treatments, rehabilitation, and advanced surgical care designed
              to restore mobility and improve your lifestyle.
            </p>
            {/* SERVICES */}
            <div className="mt-6 flex flex-wrap gap-3">
              {services.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-2 rounded-full border border-primaryOrtho/10 bg-white px-4 py-2.5 shadow-md"
                >
                  <ShieldCheck size={16} weight="fill" className="text-secondaryOrtho" />

                  <span className="text-sm font-medium text-primaryOrtho">{item}</span>
                </motion.div>
              ))}
            </div>
            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="group flex h-[58px] items-center gap-3 rounded-2xl bg-primaryOrtho px-7 text-[15px] font-semibold text-white shadow-[0_15px_40px_rgba(17,34,78,0.25)] transition-all duration-300 hover:-translate-y-1">
                Book Appointment
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button className="flex h-[58px] items-center gap-3 rounded-2xl border border-primaryOrtho/10 bg-white px-7 text-[15px] font-semibold text-primaryOrtho shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Pulse size={18} weight="fill" className="text-secondaryOrtho" />
                Emergency Care
              </button>
            </div>
            {/* STATS
            <div className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 border-t border-primaryOrtho/10 pt-6">
              {stats.map((item) => (
                <div key={item.label}>
                  <h3 className="font-stats text-3xl font-bold text-primaryOrtho lg:text-4xl">
                    {item.value}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative hidden h-[82vh] items-center justify-center lg:flex"
          >
            {/* MAIN IMAGE */}
            <div className="relative h-full w-full max-w-[560px]">
              {/* GLOW */}
              <div className="absolute inset-0 rounded-[40px] bg-secondaryOrtho/15 blur-3xl" />

              {/* IMAGE */}
              <div className="absolute inset-0 overflow-hidden rounded-[40px] border border-white/40 bg-white/60 p-3 shadow-[0_30px_80px_rgba(17,34,78,0.18)] backdrop-blur-xl">
                <div className="relative h-full overflow-hidden rounded-[30px]">
                  <Image src="/doc.jpg" alt="Orthopedic" fill className="object-cover" priority />

                  <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* TOP CARD */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="absolute -left-16 top-12 w-[240px] rounded-[28px] border border-white/60 bg-white/85 p-5 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryOrtho/10">
                    <Stethoscope size={24} weight="fill" className="text-secondaryOrtho" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-primaryOrtho">MRI Analysis</h4>

                    <p className="text-sm text-slate-500">AI-assisted diagnosis</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[85%] rounded-full bg-secondaryOrtho" />
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[65%] rounded-full bg-primaryOrtho" />
                  </div>

                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 w-[92%] rounded-full bg-secondaryOrtho" />
                  </div>
                </div>
              </motion.div>

              {/* BOTTOM CARD */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                }}
                className="absolute -bottom-4 -right-10 w-[260px] rounded-[30px] bg-primaryOrtho p-6 text-white shadow-[0_20px_70px_rgba(17,34,78,0.4)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/70">Recovery Progress</p>

                    <h3 className="mt-2 text-5xl font-bold">92%</h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Heartbeat size={28} weight="fill" className="text-secondaryOrtho" />
                  </div>
                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[92%] rounded-full bg-secondaryOrtho" />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Faster rehabilitation with precision orthopedic care and modern treatment.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
