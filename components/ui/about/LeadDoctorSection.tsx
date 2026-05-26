"use client";

import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";
import Link from "next/link";

import {
  InstagramLogo,
  LinkedinLogo,
  Medal,
  Stethoscope,
  TwitterLogo,
} from "@phosphor-icons/react";

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

  qualification = "MS Orthopedics • Fellowship in Joint Replacement - Mumbai",

  experience = "11+ Years",

  specialization = "Bone, Joint & Spine Care",

  description = "Dedicated to advanced orthopedic treatments with compassionate patient care, precision surgery, and long-term mobility recovery.",
}: DoctorSectionProps) {
  return (
    <section className="section-padding relative overflow-hidden bg-[#f8fafc]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-secondaryOrtho/10 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-80 w-80 rounded-full bg-primaryOrtho/10 blur-3xl" />
      </div>

      <div className="container-wrapper relative z-10">
        <SectionHeader
          badge="Lead Orthopedic Specialist"
          title={
            <>
              Meet The Expert Behind
              <br />
              <span className="text-secondaryOrtho">Trusted Patient Care</span>
            </>
          }
          description="Experienced orthopedic expertise focused on recovery, mobility, and compassionate treatment."
        />

        {/* Main Wrapper */}
        <div className="mt-10 overflow-hidden rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
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
              className="relative"
            >
              {/* Image */}
              <div className="relative h-full min-h-[420px] lg:min-h-[580px]">
                <Image src={image} alt={name} fill className="object-cover" />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho via-primaryOrtho/20 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                  {/* Experience */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <div className="h-2 w-2 rounded-full bg-secondaryOrtho" />

                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-white">
                      {experience} Experience
                    </span>
                  </div>

                  {/* Name */}
                  <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-0.05em] text-white sm:text-4xl">
                    {name}
                  </h2>

                  {/* Qualification */}
                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-secondaryOrtho">
                    {qualification}
                  </p>

                  {/* Socials */}
                  <div className="mt-6 flex items-center gap-3">
                    {[InstagramLogo, LinkedinLogo, TwitterLogo].map((Icon, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:bg-secondaryOrtho"
                      >
                        <Icon size={18} weight="fill" />
                      </Link>
                    ))}
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
                    Lead Orthopedic Specialist
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
                      Recovery-driven orthopedic care with precision, trust, and compassion.
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
    </section>
  );
}
