"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`relative flex flex-col gap-8 ${
        align === "center"
          ? "items-center text-center"
          : "lg:flex-row lg:items-end lg:justify-between"
      } ${className}`}
    >
      {/* LEFT CONTENT */}
      <div
        className={`relative z-10 max-w-4xl ${
          align === "center" ? "mx-auto flex flex-col items-center" : ""
        }`}
      >
        {/* Premium Responsive Badge */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className={`mb-5 flex w-fit items-center gap-2 sm:gap-3 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {/* Left Line */}
          <div className="h-[2px] w-6 rounded-full bg-gradient-to-r from-transparent to-[#f87b1b] sm:w-8 lg:w-12" />

          {/* Badge */}
          <div className="group relative overflow-hidden rounded-full border border-[#f87b1b]/15 bg-white/90 px-3 py-1.5 shadow-[0_8px_25px_rgba(248,123,27,0.08)] backdrop-blur-xl sm:px-4 sm:py-2 lg:px-5">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f87b1b]/0 via-[#f87b1b]/10 to-[#f87b1b]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center gap-1.5 sm:gap-2">
              {/* Animated Dot */}
              <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f87b1b]/60 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f87b1b] sm:h-2.5 sm:w-2.5" />
              </div>

              {/* Text */}
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#11224e] sm:text-xs sm:tracking-[0.22em] lg:text-sm">
                {badge}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <h2
            className={`max-w-5xl text-2xl font-black leading-[1.05] tracking-[-0.03em] text-[#11224e] sm:text-4xl md:text-5xl  ${titleClassName}`}
          >
            {title}
          </h2>
        </motion.div>
      </div>

      {/* RIGHT DESCRIPTION */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className={`relative z-10 ${
            align === "center" ? "max-w-2xl text-center" : "max-w-xl lg:pb-2"
          }`}
        >
          {/* Small Accent Line */}
          {align !== "center" && (
            <div className="mb-5 hidden h-[2px] w-16 rounded-full bg-gradient-to-r from-[#f87b1b] to-transparent lg:block" />
          )}

          <p
            className={`text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg ${descriptionClassName}`}
          >
            {description}
          </p>
        </motion.div>
      )}

      {/* Background Accent */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-40 w-40 rounded-full bg-[#f87b1b]/5 blur-3xl lg:block" />
    </div>
  );
}
