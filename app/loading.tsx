"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-tertiaryOrtho">
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[70vw]
          w-[70vw]
          max-h-[1000px]
          max-w-[1000px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-secondaryOrtho
          blur-[220px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(17,34,78,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,78,0.025)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* Floating Orbs */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[10%]
          top-[20%]
          h-32
          w-32
          rounded-full
          border
          border-secondaryOrtho/10
        "
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[10%]
          bottom-[20%]
          h-40
          w-40
          rounded-full
          border
          border-primaryOrtho/10
        "
      />

      <div className="relative z-20 flex flex-col items-center px-6">
        {/* Logo Section */}
        <div
          className="
            relative

            h-[90px]
            w-[240px]

            sm:h-[110px]
            sm:w-[320px]

            md:h-[130px]
            md:w-[380px]

            lg:h-[150px]
            lg:w-[460px]

            xl:h-[170px]
            xl:w-[540px]
          "
        >
          {/* Scanner Beam */}
          <motion.div
            animate={{
              x: ["-120%", "120%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0

              w-24

              bg-gradient-to-r
              from-transparent
              via-secondaryOrtho/25
              to-transparent

              blur-xl
            "
          />

          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full"
          >
            <Image
              src="/logo.png"
              alt="Orthopaedic Hospital"
              fill
              priority
              sizes="
                (max-width: 640px) 240px,
                (max-width: 768px) 320px,
                (max-width: 1024px) 380px,
                540px
              "
              className="
                object-contain
                drop-shadow-[0_20px_50px_rgba(17,34,78,0.12)]
              "
            />
          </motion.div>
        </div>

        {/* Loading Text */}
        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
          className="
            mt-10

            text-center

            text-lg
            font-black

            tracking-[-0.03em]

            text-primaryOrtho

            sm:text-xl
            md:text-2xl
          "
        >
          Bringing Precision to Every Movement
        </motion.h2>

        <p
          className="
            mt-3

            text-center

            text-xs
            font-semibold

            uppercase

            tracking-[0.25em]

            text-secondaryOrtho

            sm:text-sm
          "
        >
          Advanced Orthopaedic Care
        </p>

        {/* Progress */}
        <div
          className="
            mt-8

            h-[4px]
            w-56

            overflow-hidden

            rounded-full

            bg-primaryOrtho/10
          "
        >
          <motion.div
            animate={{
              x: ["-100%", "320%"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              h-full
              w-20

              rounded-full

              bg-secondaryOrtho
            "
          />
        </div>
      </div>
    </div>
  );
}
