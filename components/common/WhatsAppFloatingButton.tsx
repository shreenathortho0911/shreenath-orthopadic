"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function WhatsAppFloatingButton() {
  const phoneNumber = "919265666262";
  const message = encodeURIComponent(
    "Hello Shreenath Orthopaedic Hospital, I am interested in your orthopedic care services. Please provide information regarding consultation, treatment options, and appointment scheduling.",
  );

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-999 group"
    >
      <div
        className="
          relative
          flex items-center justify-center
          w-14 h-14
          sm:w-16 sm:h-16
          lg:w-[72px] lg:h-[72px]
          rounded-full
          bg-[#25D366]
          text-white
          shadow-[0_8px_30px_rgba(37,211,102,0.45)]
          transition-all duration-300
          hover:scale-110
          hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]
        "
      >
        {/* Ping Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

        <WhatsappLogo weight="fill" className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" />
      </div>

      {/* Tooltip */}
      <div
        className="
          absolute right-20 top-1/2 -translate-y-1/2
          bg-white text-gray-900
          px-3 py-2 rounded-lg
          shadow-lg
          text-sm font-medium
          whitespace-nowrap
          opacity-0 invisible
          group-hover:opacity-100
          group-hover:visible
          transition-all duration-300
          hidden md:block
        "
      >
        Chat with us
      </div>
    </Link>
  );
}
