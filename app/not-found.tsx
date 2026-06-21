"use client";

import { House, PhoneCall } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-tertiaryOrtho px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondaryOrtho/10 blur-[120px]" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(rgba(17,34,78,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,34,78,0.03)_1px,transparent_1px)]
            bg-[size:36px_36px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="
            mt-8

            text-[90px]
            font-black
            leading-none
            tracking-[-0.08em]

            text-primaryOrtho

            sm:text-[120px]
            md:text-[150px]
          "
        >
          404
        </motion.h1>

        {/* Orange Line */}
        <div className="mt-3 h-1.5 w-24 rounded-full bg-secondaryOrtho" />

        {/* Heading */}
        <h2
          className="
            mt-6

            text-2xl
            font-black

            text-primaryOrtho

            sm:text-3xl
            md:text-4xl
          "
        >
          Page Not Found
        </h2>

        <p
          className="
            mt-4

            max-w-lg

            text-sm
            leading-relaxed

            text-primaryOrtho/60

            sm:text-base
          "
        >
          The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back
          to the right place.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <Link
            href="/"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-secondaryOrtho

              px-8

              font-semibold
              text-white

              shadow-[0_15px_40px_rgba(248,123,27,0.35)]

              transition-all
              duration-300

              hover:-translate-y-1
            "
          >
            <House size={18} weight="fill" />
            Back Home
          </Link>

          <Link
            href="/contact"
            className="
              inline-flex
              h-14
              items-center
              justify-center
              gap-2

              rounded-2xl

              border border-primaryOrtho/10

              bg-white

              px-8

              font-semibold

              text-primaryOrtho

              transition-all
              duration-300

              hover:border-secondaryOrtho/30
              hover:-translate-y-1
            "
          >
            <PhoneCall size={18} weight="fill" />
            Contact Us
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-xs font-medium tracking-wide text-primaryOrtho/40">
          SHREENATH ORTHOPAEDIC HOSPITAL • AHMEDABAD
        </p>
      </div>
    </main>
  );
}
