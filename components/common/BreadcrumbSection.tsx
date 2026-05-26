"use client";

import { ArrowRight, Heartbeat, House, Sparkle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BreadcrumbSectionProps {
  title: React.ReactNode;

  currentPage: string;

  description?: string;
}

export default function BreadcrumbSection({
  title,

  currentPage,

  description = "Advanced orthopedic treatments with expert doctors and modern recovery care.",
}: BreadcrumbSectionProps) {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho pt-15 lg:pt-25 py-10">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primaryOrtho" />

          <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primaryOrtho" />
        </div>
      </div>

      <div className="container-wrapper relative z-10">
        <div className="relative overflow-hidden rounded-[40px] border border-primaryOrtho/10 bg-white/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-8 lg:p-10">
          {/* Floating Medical Card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-5 top-5 hidden lg:block"
          >
            <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-primaryOrtho px-4 py-3 shadow-[0_20px_45px_rgba(15,23,42,0.18)]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondaryOrtho">
                <Heartbeat size={18} weight="fill" className="text-white" />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                  Expert Care
                </p>

                <h4 className="text-sm font-bold text-white">Orthopedic Specialists</h4>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            {/* Left */}
            <div>
              {/* Label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondaryOrtho/10 bg-secondaryOrtho/10 px-4 py-2"
              >
                <Sparkle size={14} weight="fill" className="text-secondaryOrtho" />

                <span className="text-[10px] font-bold tracking-widest  text-secondaryOrtho">
                  Shreenath Orthopedic Hospital
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="max-w-2xl text-xl font-black text-primaryOrtho md:text-3xl "
              >
                {title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.05,
                }}
                className="mt-4 max-w-xl text-sm leading-relaxed text-primaryOrtho/65 sm:text-[15px]"
              >
                {description}
              </motion.p>
            </div>

            {/* Breadcrumb */}
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
              className="flex items-center gap-3"
            >
              {/* Home */}
              <Link
                href="/"
                className="flex min-w-fit items-center justify-center rounded-full bg-tertiaryOrtho border border-primaryOrtho/10 px-4 sm:px-5 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.14)]"
              >
                <House size={15} weight="fill" className="text-secondaryOrtho" />

                <span className="text-sm font-semibold text-primaryOrtho">Home</span>
              </Link>

              {/* Arrow */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryOrtho/5">
                <ArrowRight size={15} weight="bold" className="text-secondaryOrtho" />
              </div>

              <div className="flex min-w-fit items-center justify-center rounded-full bg-primaryOrtho px-4 sm:px-5 py-3 shadow-[0_15px_35px_rgba(15,23,42,0.14)]">
                <span className="whitespace-nowrap text-xs font-bold text-white sm:text-sm">
                  {currentPage}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
