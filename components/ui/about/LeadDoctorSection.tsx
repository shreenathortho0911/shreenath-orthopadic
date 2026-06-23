"use client";

import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { InstagramLogo, Medal, Stethoscope, X } from "@phosphor-icons/react";

import { motion } from "framer-motion";

interface DoctorSectionProps {
  image?: string;

  name?: string;

  qualification?: string;

  experience?: string;

  specialization?: string;

  description?: string;
}

export default function LeadDoctorSection({
  image = "/doctor.png",

  name = "Dr. Homy J. Modi",

  qualification = "MS Orthopaedic • Fellowship in Joint Replacement - Mumbai",

  experience = "10+ Years",

  specialization = "Bone, Joint & Spine Care",

  description = "Dedicated to advanced Orthopaedic treatments with compassionate patient care, precision surgery, and long-term mobility recovery.",
}: DoctorSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="section-padding cursor-pointer relative overflow-hidden bg-[#f8fafc]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        <SectionHeader
          badge="Lead Orthopaedic Specialist"
          title={
            <>
              Meet The Expert Behind
              <br />
              <span className="text-secondaryOrtho">Trusted Patient Care</span>
            </>
          }
          description="Experienced Orthopaedic expertise focused on recovery, mobility, and compassionate treatment."
        />

        {/* Main Wrapper */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="mt-10 overflow-hidden rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
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
              className="relative overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[420px] sm:min-h-[720px] lg:min-h-[580px]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority
                  className="object-cover object-top scale-[1.02] sm:scale-100"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho via-primaryOrtho/15 to-transparent" />

                {/* Mobile Overlay */}
                <div className="absolute bottom-0 left-0 h-[38%] w-full bg-gradient-to-t from-primaryOrtho via-primaryOrtho/90 to-transparent sm:hidden" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 z-10 w-full p-4 sm:p-8">
                  {/* MOBILE */}
                  <div className="sm:hidden">
                    <div className="rounded-[24px] bg-black/20 p-4 backdrop-blur-xl">
                      <h2 className="text-[18px] font-black leading-[0.95] tracking-[-0.05em] text-white">
                        {name}
                      </h2>

                      <p className="mt-3 text-[9px] font-bold uppercase leading-relaxed tracking-[0.16em] text-secondaryOrtho">
                        {qualification}
                      </p>
                    </div>
                  </div>

                  {/* DESKTOP */}
                  <div className="hidden sm:block">
                    {/* Experience */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl">
                      <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                        {experience} Experience
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.05em] text-white">
                      {name}
                    </h2>

                    {/* Qualification */}
                    <p className="mt-3 max-w-[90%] text-sm font-semibold uppercase tracking-[0.14em] text-secondaryOrtho">
                      {qualification}
                    </p>

                    {/* Socials */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {[InstagramLogo].map((Icon, index) => (
                        <Link
                          key={index}
                          href="https://www.instagram.com/doc.homy0911/?hl=en"
                          target="_blank"
                          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-secondaryOrtho"
                        >
                          <Icon size={18} weight="fill" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
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
              className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"
            >
              {/* Top */}
              <div>
                {/* Small Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-secondaryOrtho/10 px-3 py-1.5">
                  <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondaryOrtho">
                    Lead Orthopaedic Specialist
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px]">
                  {description}
                </p>

                {/* Quote */}
                <div className="mt-8 border-l-2 border-secondaryOrtho pl-5">
                  <p className="text-lg font-black leading-relaxed tracking-[-0.03em] text-primaryOrtho sm:text-xl">
                    “Every patient deserves care focused on comfort, mobility, and long-term
                    recovery.”
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-10">
                {/* Features */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Specialization */}
                  <div className="rounded-3xl bg-[#f8fafc] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryOrtho/10">
                      <Stethoscope size={22} weight="fill" className="text-secondaryOrtho" />
                    </div>

                    <h4 className="mt-4 text-lg font-black text-primaryOrtho">Specialization</h4>

                    <p className="mt-2 text-sm leading-relaxed text-primaryOrtho/60">
                      {specialization}
                    </p>
                  </div>

                  {/* Philosophy */}
                  <div className="rounded-3xl bg-primaryOrtho p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondaryOrtho">
                      <Medal size={22} weight="fill" className="text-white" />
                    </div>

                    <h4 className="mt-4 text-lg font-black text-white">Philosophy</h4>

                    <p className="mt-2 text-sm leading-relaxed text-white/70">
                      Recovery-driven Orthopaedic care with precision, trust, and compassion.
                    </p>
                  </div>
                </div>

                {/* Achievement Pills */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {["5000+ Surgeries", "Joint Replacement", "Sports Injury"].map((item, index) => (
                    <div
                      key={index}
                      className="rounded-full border border-primaryOrtho/10 px-4 py-2"
                    >
                      <span className="text-xs font-semibold text-primaryOrtho">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed  inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
        relative
        w-full
        max-w-4xl
        hide-scrollbar
        max-h-[90vh]
        overflow-y-auto
        rounded-[32px]
        bg-white
        shadow-2xl
      "
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center  justify-between border-b bg-white px-5 py-4 sm:px-8">
              <div>
                <h3 className="text-xl font-black text-primaryOrtho">Professional Profile</h3>

                <p className="mt-1 text-sm text-primaryOrtho/60">
                  Additional credentials & achievements
                </p>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-secondaryOrtho/80 transition hover:bg-secondaryOrtho"
              >
                <X size={20} weight="bold" className="text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-8 p-5 sm:p-8">
              {/* Education */}
              <div>
                <h4 className="mb-3 text-lg font-black text-primaryOrtho">Education</h4>

                <ul className="space-y-2 text-sm text-primaryOrtho/70">
                  <li>MBBS – Government Medical College, Surat</li>
                  <li>MS Orthopaedics – AMC MET Medical College, Ahmedabad</li>
                  <li>FIJR Fellowship in Joint Replacement – Mumbai</li>
                </ul>
              </div>

              {/* Publications */}
              <div>
                <h4 className="mb-3 text-lg font-black text-primaryOrtho">Research Publications</h4>

                <ul className="space-y-3 text-sm text-primaryOrtho/70">
                  <li>Talus Neck Fracture with Open Reduction & Internal Fixation</li>

                  <li>Functional & Radiological Outcome in Humerus Shaft Fractures</li>

                  <li>Retrograde Nailing vs Distal Femur Locking Plate Study</li>
                </ul>
              </div>

              {/* Professional Experience */}
              <div>
                <h4 className="mb-3 text-lg font-black text-primaryOrtho">
                  Professional Experience
                </h4>

                <ul className="space-y-3 text-sm text-primaryOrtho/70">
                  <li>Senior Residency – Sheth L.G. Hospital, Ahmedabad</li>

                  <li>Joint Replacement Fellowship – Global & Lilavati Hospital, Mumbai</li>

                  <li>Assistant Professor – Narendra Modi Medical College, Ahmedabad</li>
                </ul>
              </div>

              {/* Conferences */}
              <div>
                <h4 className="mb-3 text-lg font-black text-primaryOrtho">
                  Conferences & Academic Activities
                </h4>

                <ul className="space-y-3 text-sm text-primaryOrtho/70">
                  <li>GOACON Annual Conference</li>

                  <li>Joint International Conference</li>

                  <li>WIROC 2023 Research Presentation</li>

                  <li>DOT 2020 Knee Arthroplasty Conference Faculty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
