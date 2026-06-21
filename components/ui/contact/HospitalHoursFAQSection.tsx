"use client";

import { Clock } from "@phosphor-icons/react";

import { motion } from "framer-motion";

import { useMemo } from "react";

import { FAQAccordion } from "@/components/common/FAQAccordion";

const hospitalHours = [
  {
    day: "Monday",
    time: "09:00 AM - 08:00 PM",
  },

  {
    day: "Tuesday",
    time: "09:00 AM - 08:00 PM",
  },

  {
    day: "Wednesday",
    time: "09:00 AM - 08:00 PM",
  },

  {
    day: "Thursday",
    time: "09:00 AM - 08:00 PM",
  },

  {
    day: "Friday",
    time: "09:00 AM - 08:00 PM",
  },

  {
    day: "Saturday",
    time: "10:00 AM - 06:00 PM",
  },

  {
    day: "Sunday",
    time: "Emergency Only",
  },
];

const faqData = [
  {
    question: "Do you provide emergency Orthopaedic care?",

    answer:
      "Yes, emergency Orthopaedic assistance is available for fractures, trauma injuries, and urgent mobility-related conditions.",
  },

  {
    question: "Is prior appointment required?",

    answer:
      "Walk-ins are accepted, but appointments are recommended for faster consultation and reduced waiting time.",
  },

  {
    question: "Do you provide rehabilitation support?",

    answer: "Yes, we offer rehabilitation-focused recovery programs and physiotherapy guidance.",
  },
  {
    question: "Do you accept health insurance and cashless treatment?",

    answer:
      "Yes, we support multiple insurance providers and offer cashless treatment assistance for eligible patients.",
  },
];

export default function HospitalHoursFAQSection() {
  const today = useMemo(() => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-6 sm:py-8">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-20%] h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-10%] right-[-10%] h-60 w-60 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
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
            }}
            className="relative overflow-hidden rounded-[28px] bg-primaryOrtho p-4 sm:p-5"
          >
            {/* Glow */}
            <div className="absolute right-[-20%] top-[-20%] h-52 w-52 rounded-full bg-secondaryOrtho/10 blur-3xl" />

            {/* Label */}
            <div className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-xl">
              <Clock size={11} weight="fill" className="text-secondaryOrtho" />

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                Working Schedule
              </span>
            </div>

            {/* Heading */}
            <h2 className="relative mt-4 text-[2rem] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[2.5rem]">
              Hospital
              <span className="text-secondaryOrtho"> Hours</span>
            </h2>

            {/* Desc */}
            <p className="relative mt-3 max-w-md text-xs leading-relaxed text-white/70 sm:text-sm">
              Check consultation timings and hospital availability for appointments and Orthopaedic
              care.
            </p>

            {/* Timing List */}
            <div className="relative mt-5 space-y-2.5">
              {hospitalHours.map((item, index) => {
                const isToday = today === item.day;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      x: 3,
                    }}
                    className={`flex items-center justify-between rounded-[18px] border px-3.5 py-3 transition-all duration-300 ${
                      isToday
                        ? "border-secondaryOrtho bg-secondaryOrtho text-white shadow-[0_12px_30px_rgba(248,123,27,0.18)]"
                        : "border-white/10 bg-white/5 text-white backdrop-blur-xl"
                    }`}
                  >
                    {/* Left */}
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          isToday ? "bg-white" : "bg-secondaryOrtho"
                        }`}
                      />

                      <span className="text-[11px] sm:text-xs font-bold">{item.day}</span>
                    </div>

                    {/* Right */}
                    <span
                      className={`text-[10px] sm:text-xs font-semibold ${
                        isToday ? "text-white" : "text-white/65"
                      }`}
                    >
                      {item.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
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
            }}
            className="rounded-[28px] border border-primaryOrtho/10 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-5"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-secondaryOrtho/10 px-3 py-1.5">
              <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

              <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-secondaryOrtho">
                Quick Answers
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-4 text-[2rem] font-black leading-[0.95] tracking-[-0.05em] text-primaryOrtho sm:text-[2.5rem]">
              Common
              <span className="text-secondaryOrtho"> Questions</span>
            </h2>

            {/* FAQ COMPONENT */}
            <div className="mt-5">
              <FAQAccordion data={faqData} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
