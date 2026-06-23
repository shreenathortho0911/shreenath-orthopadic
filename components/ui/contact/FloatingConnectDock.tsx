"use client";

import { useState } from "react";

import Link from "next/link";

import { ArrowUpRight, CaretUpIcon, MapPin, PhoneCall, X } from "@phosphor-icons/react";

import { AnimatePresence, motion } from "framer-motion";

const dockItems = [
  {
    title: "Call Now",

    subTitle: "24/7 Support",

    icon: PhoneCall,

    href: "tel:+919265666262",

    bg: "bg-primaryOrtho",
  },

  // {
  //   title: "WhatsApp",

  //   subTitle: "Quick Connect",

  //   icon: WhatsappLogo,

  //   href: "https://wa.me/919265666262",

  //   bg: "bg-[#25D366]",
  // },

  {
    title: "Directions",

    subTitle: "Visit Hospital",

    icon: MapPin,

    href: "https://maps.app.goo.gl/fzyACX21NF2KdTby5",

    bg: "bg-secondaryOrtho",
  },
];

export default function ExpandableFloatingDock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2  z-[999] w-full max-w-max -translate-x-1/2 px-4">
      <div className="relative flex items-center justify-center">
        {/* Expandable Dock */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.92,
              }}
              transition={{
                duration: 0.28,
                ease: "easeOut",
              }}
              className="absolute bottom-[72px] left-1/2 w-[calc(100vw-32px)] max-w-max -translate-x-1/2"
            >
              {/* Main Dock */}
              <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-white/80 p-2 shadow-[0_25px_80px_rgba(15,23,42,0.14)] backdrop-blur-2xl">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondaryOrtho/40 via-transparent to-primaryOrtho/40" />

                {/* Items */}
                <div className="relative flex items-center gap-2">
                  {dockItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        whileHover={{
                          y: -4,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                      >
                        <Link
                          href={item.href}
                          target="_blank"
                          className="group flex items-center gap-3 rounded-[22px] px-3 py-3 transition-all duration-300 hover:bg-white sm:px-4"
                        >
                          {/* Icon */}
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 ${item.bg}`}
                          >
                            <Icon size={19} weight="fill" className="text-white" />
                          </div>

                          {/* Content */}
                          <div className="hidden sm:block">
                            <h4 className="text-sm font-black leading-none tracking-[-0.03em] text-primaryOrtho">
                              {item.title}
                            </h4>

                            <p className="mt-1 text-[11px] font-medium text-primaryOrtho/50">
                              {item.subTitle}
                            </p>
                          </div>

                          {/* Arrow */}
                          <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-primaryOrtho/5 text-primaryOrtho transition-all duration-300 group-hover:bg-secondaryOrtho group-hover:text-white sm:flex">
                            <ArrowUpRight size={14} weight="bold" />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          whileTap={{
            scale: 0.94,
          }}
          whileHover={{
            y: -3,
          }}
          onClick={() => setOpen(!open)}
          className="group cursor-pointer relative flex h-16 items-center gap-3 overflow-hidden rounded-full border border-cyan-300/30 bg-gradient-to-r from-[#11224e] via-[#0f4c75] to-[#11224e] px-5 shadow-[0_20px_60px_rgba(15,76,117,0.35)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_20px_80px_rgba(15,76,117,0.55)]"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Icon */}

          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "close" : "open"}
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.8,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {open ? (
                <X size={22} weight="bold" className="text-white" />
              ) : (
                <CaretUpIcon size={22} weight="fill" className="text-white" />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
