"use client";

import { FAQAccordion } from "@/components/common/FAQAccordion";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";

const faqData = [
  {
    question: "When should I see an Orthopaedic specialist?",
    answer:
      "You should consult an Orthopaedic specialist if you experience persistent joint pain, back pain, stiffness, sports injuries, fractures, or difficulty in movement affecting daily activities.",
  },

  {
    question: "Is surgery always necessary for Orthopaedic problems?",
    answer:
      "No, many Orthopaedic conditions can be treated through medications, physiotherapy, rehabilitation programs, and minimally invasive treatments before considering surgery.",
  },

  {
    question: "How long does Orthopaedic recovery usually take?",
    answer:
      "Recovery time depends on the condition and treatment type. Minor injuries may recover within weeks, while surgeries and rehabilitation can take several months for complete healing.",
  },

  {
    question: "Do you provide physiotherapy and rehabilitation support?",
    answer:
      "Yes, we provide guided physiotherapy and rehabilitation-focused recovery programs designed to improve mobility, strength, and long-term wellness.",
  },
];

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-12 sm:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#eef4ff]" />

        <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Frequently Asked Questions"
          title={
            <>
              Answers To Common
              <br />
              <span className="text-secondaryOrtho">Orthopaedic Concerns</span>
            </>
          }
          description="Helping patients understand treatments, recovery, rehabilitation, and Orthopaedic care with confidence."
        />

        {/* Main Layout */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
          {/* LEFT FAQ */}
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
          >
            <FAQAccordion data={faqData} />
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:block">
            <div className="relative h-[320px] w-full overflow-hidden rounded-[28px] sm:h-[420px]">
              <Image src="/faq.png" alt="FAQ Image" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
