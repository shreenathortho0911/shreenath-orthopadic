"use client";

import { ArrowRight, CalendarBlank, ChatCircleDots, Heartbeat, Icon } from "@phosphor-icons/react";
import Link from "next/link";
import { ElementType, ReactNode } from "react";

import { motion } from "framer-motion";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  icon?: ElementType;
}

interface RecoveryCTAProps {
  badge?: string;

  title: ReactNode;

  description: string;

  floatingBadge?: string;

  primaryIcon?: Icon;

  buttons?: CTAButton[];
}

export default function RecoveryCTA({
  badge = "Final Recovery Step",

  title,

  description,

  floatingBadge = "Guided Recovery Care",

  primaryIcon: PrimaryIcon = Heartbeat,

  buttons = [
    {
      label: "Book Recovery Consultation",
      href: "/contact",
      variant: "primary",
      icon: CalendarBlank,
    },

    {
      label: "Talk To Specialist",
      href: "/treatments",
      variant: "secondary",
      icon: ChatCircleDots,
    },
  ],
}: RecoveryCTAProps) {
  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho pb-10">
      {/* Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-secondaryOrtho/5 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primaryOrtho/5 blur-3xl" />

      <div className="container-wrapper relative">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden

            rounded-[38px]

            border border-primaryOrtho/10
            bg-white

            px-6 py-10
            md:px-10 md:py-12

            shadow-[0_20px_60px_rgba(17,34,78,0.08)]
          "
        >
          {/* Glow */}
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-secondaryOrtho/10 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primaryOrtho/5 blur-3xl" />

          {/* Pattern */}
          <div className="absolute right-0 top-0 opacity-[0.04]">
            <div className="grid grid-cols-8 gap-2 p-8">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-primaryOrtho" />
              ))}
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute right-6 top-6 hidden

              rounded-full
              border border-secondaryOrtho/10

              bg-secondaryOrtho/5

              px-4 py-2

              lg:flex lg:items-center lg:gap-2
            "
          >
            <PrimaryIcon size={16} weight="fill" className="text-secondaryOrtho" />

            <span className="text-xs font-semibold text-primaryOrtho">{floatingBadge}</span>
          </motion.div>

          {/* Main */}
          <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            {/* Left */}
            <div className="max-w-3xl">
              {/* Label */}
              <div className="mb-5 flex items-center gap-3">
                <div className="h-[2px] w-12 rounded-full bg-secondaryOrtho" />

                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-secondaryOrtho">
                  {badge}
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-3xl text-2xl md:text-4xl font-black leading-[1.02] tracking-[-0.05em] text-primaryOrtho">
                {title}
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                {description}
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-4 sm:flex-row xl:flex-col">
              {buttons.map((button, index) => {
                const ButtonIcon = button.icon || ArrowRight;

                const isPrimary = button.variant === "primary";

                return (
                  <Link key={index} href={button.href}>
                    <motion.div
                      whileHover={{
                        y: -3,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`
                        group relative overflow-hidden

                        rounded-full

                        px-6 py-4

                        text-sm font-semibold

                        transition-all duration-300

                        ${
                          isPrimary
                            ? `
                              bg-primaryOrtho
                              text-white
                              shadow-[0_15px_40px_rgba(17,34,78,0.15)]
                              hover:bg-secondaryOrtho
                            `
                            : `
                              border border-primaryOrtho/10
                              bg-tertiaryOrtho
                              text-primaryOrtho
                              hover:border-secondaryOrtho/20
                              hover:bg-secondaryOrtho/5
                            `
                        }
                      `}
                    >
                      {/* Shine */}
                      {isPrimary && (
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                      )}

                      <div className="relative flex items-center justify-center gap-3">
                        <ButtonIcon
                          size={16}
                          weight="fill"
                          className={!isPrimary ? "text-secondaryOrtho" : ""}
                        />

                        <span>{button.label}</span>

                        {isPrimary && (
                          <ArrowRight
                            size={16}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-primaryOrtho via-secondaryOrtho to-primaryOrtho" />
        </motion.div>
      </div>
    </section>
  );
}
