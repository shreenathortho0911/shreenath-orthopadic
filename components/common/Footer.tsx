"use client";

import { Envelope, InstagramLogo, MapPin, Phone } from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/about" },
    { label: "Treatments", href: "/treatments" },
    { label: "Rehabilitation", href: "/rehabilitation" },
    { label: "Facilities", href: "/facilities" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  const treatments = [
    "Joint Replacement",
    "Sports Injury",
    "Trauma Surgery",
    "Spine Care",
    "Fracture Management",
  ];

  return (
    <footer className="relative overflow-hidden bg-primaryOrtho text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-secondaryOrtho/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondaryOrtho/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <div className="container-wrapper px-6 py-13">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-3xl font-black tracking-tight">Shreenath Orthopaedic Hospital</h3>

              <p className="mt-5 text-sm leading-7 text-white/70">
                Delivering advanced orthopaedic care with expertise in joint replacement, trauma
                surgery, sports injury management, and comprehensive bone & joint treatments.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {[InstagramLogo].map((Icon, index) => (
                  <Link
                    key={index}
                    href="https://www.instagram.com/doc.homy0911/?hl=en"
                    target="_blank"
                    className="
                        flex h-11 w-11 items-center justify-center
                        rounded-full
                        border border-white/10
                        bg-white/5
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-secondaryOrtho
                        hover:scale-110
                      "
                  >
                    <Icon size={20} weight="fill" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="mb-5 text-lg font-bold">Specialities</h4>

              <ul className="space-y-3">
                {treatments.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-white/70 transition-colors hover:text-secondaryOrtho"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-lg font-bold">Quick Links</h4>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="
                        text-sm
                        text-white/70
                        transition-colors
                        hover:text-secondaryOrtho
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-lg font-bold">Contact Information</h4>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <Phone size={20} className="mt-0.5 text-secondaryOrtho" />
                  <span className="text-sm text-white/70">+91 9265666262</span>
                </div>

                <div className="flex gap-3">
                  <Envelope size={20} className="mt-0.5 text-secondaryOrtho" />
                  <span className="text-sm text-white/70">info@shreenathorthopaedic.com</span>
                </div>

                <div className="flex gap-3">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-secondaryOrtho" />
                  <span className="text-sm leading-6 text-white/70">
                    305-308, Trivia One, Opp. Kankaria Road, Maninagar, Ahmedabad, Gujarat – 380028
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-white/10 pt-6 flex justify-center">
            <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
              <p className="text-sm text-white/60">
                © {year} Shreenath Orthopaedic Hospital. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
