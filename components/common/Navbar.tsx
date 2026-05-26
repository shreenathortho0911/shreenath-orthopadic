"use client";

import { ArrowUpRight, List, PhoneCall, X } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Treatments", path: "/treatments" },
  { name: "Rehabilitation", path: "/rehabilitation" },
  { name: "Facilities", path: "/facilities" },
  { name: "Testimonials", path: "/testimonials" },
  // { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
    fixed left-1/2 -translate-x-1/2 z-[999] overflow-hidden
    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
    bg-tertiaryOrtho/90 backdrop-blur-xl

    ${
      scrolled
        ? "top-4 w-[94%] max-w-[1380px] rounded-full border border-primaryOrtho/50 shadow-[0_15px_60px_rgba(0,0,0,0.35)] py-1.5"
        : "top-0 w-full rounded-none border-b border-primaryOrtho/50 shadow-[0_10px_40px_rgba(0,0,0,0.18)] py-2"
    }
  `}
      >
        {/* Premium Animated Glow */}
        <div
          className={`
      pointer-events-none absolute inset-0 overflow-hidden
      transition-all duration-700
      ${scrolled ? "opacity-100 scale-100" : "opacity-80 scale-[1.08]"}
    `}
        >
          {/* Main Gradient Glow */}
          <div
            className={`
        absolute inset-0
        bg-gradient-to-r
        from-primaryOrtho/30
        via-secondaryOrtho/20
        to-primaryOrtho/30

        ${scrolled ? "blur-2xl" : "blur-3xl"}
      `}
          />

          {/* Top Premium Shine */}
          <div
            className={`
        absolute top-0 left-1/2 -translate-x-1/2
        h-[1px]
        ${scrolled ? "w-[70%]" : "w-full"}
        bg-gradient-to-r
        from-transparent
        via-white/70
        to-transparent
        transition-all duration-700
      `}
          />

          {/* Left Glow Orb */}
          <div
            className={`
        absolute -left-10 top-1/2 -translate-y-1/2
        rounded-full bg-primaryOrtho/30
        blur-[70px] animate-pulse
        transition-all duration-700

        ${scrolled ? "h-24 w-24" : "h-40 w-40"}
      `}
          />

          {/* Right Glow Orb */}
          <div
            className={`
        absolute -right-10 top-1/2 -translate-y-1/2
        rounded-full bg-secondaryOrtho/30
        blur-[70px] animate-pulse
        transition-all duration-700 delay-100

        ${scrolled ? "h-24 w-24" : "h-40 w-40"}
      `}
          />

          {/* Soft Bottom Reflection */}
          <div
            className={`
        absolute bottom-0 left-1/2 -translate-x-1/2
        h-[40%]
        rounded-full blur-3xl
        bg-gradient-to-r
        from-primaryOrtho/20
        via-secondaryOrtho/30
        to-primaryOrtho/20
        transition-all duration-700

        ${scrolled ? "w-[60%]" : "w-[90%]"}
      `}
          />
        </div>
        <div
          className={`${scrolled ? "px-5 md:px-8" : "container mx-auto px-4 sm:px-6 lg:px-8"} transition-all duration-500`}
        >
          <div className="h-[64px] md:h-[72px] xl:h-[80px] flex items-center justify-between gap-4">
            {/* Logo */}

            <Link
              href="/"
              className="relative flex items-center shrink-0"
              aria-label="Shreenath Home"
            >
              <Image
                src="/logo.png"
                alt="Shreenath Logo"
                width={200}
                height={80}
                priority
                className="w-[100px] sm:w-[130px] md:w-[150px] xl:w-[180px] h-15 md:h-20 object-contain"
              />
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden xl:flex items-center gap-10" aria-label="Primary">
              {navLinks.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`group relative py-2 text-[15px] sm:text-[15.5px] md:text-[16px] font-semibold tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-secondaryOrtho"
                        : "text-primaryOrtho hover:text-secondaryOrtho"
                    }`}
                  >
                    <span className="relative inline-block">{item.name}</span>

                    <span
                      className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 h-[3px] rounded-full bg-secondaryOrtho transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg shadow-secondaryOrtho/50 ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}

            <div className="flex items-center gap-2.5 md:gap-3 shrink-0">
              <a
                href="tel:+91XXXXXXXXXX"
                aria-label="Call us"
                className="md:hidden grid place-items-center w-10 h-10 rounded-full border-2 border-primaryOrtho/40 bg-transparent text-primaryOrtho hover:border-secondaryOrtho hover:text-secondaryOrtho transition-all duration-300 hover:scale-110"
              >
                <PhoneCall size={18} weight="fill" />
              </a>

              <Link
                href="/contact"
                className="group relative  overflow-hidden rounded-full bg-secondaryOrtho! px-7 py-4 text-sm font-semibold text-tertiaryOrtho shadow-[0_10px_30px_rgba(248,123,27,0.35)] transition-all duration-300 hover:scale-[1.03] md:text-base hidden! md:inline-flex! md:justify-center md:items-center md:gap-3"
              >
                Contact Us
                <ArrowUpRight size={16} weight="bold" />
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation"
                aria-expanded={menuOpen}
                className="xl:hidden grid place-items-center w-10 h-10 rounded-full border-2 border-primaryOrtho/40 bg-transparent text-primaryOrtho hover:border-secondaryOrtho hover:text-secondaryOrtho transition-all duration-300 hover:scale-110"
              >
                <List size={20} weight="bold" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE MENU */}

      <div
        className={`xl:hidden fixed inset-0 z-1001 transition-all duration-500 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Background panel */}

        <div
          className={`absolute inset-0 bg-tertiaryOrtho transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Content */}

        <div
          className={`relative h-full w-full flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {/* Header */}

          <div className="container mx-auto flex items-center justify-between px-8 sm:px-12 lg:px-16 py-6 border-b border-secondaryOrtho/15 shadow-md">
            <Image
              src="/logo.png"
              alt="Shreenath Logo"
              width={140}
              height={50}
              className="w-[100px] sm:w-[130px] h-15 object-contain"
            />

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
              className="grid place-items-center w-10 h-10 rounded-full border-2 border-primaryOrtho/40 bg-transparent text-primaryOrtho hover:border-secondaryOrtho hover:text-secondaryOrtho hover:rotate-90 hover:scale-110 transition-all duration-300"
            >
              <X size={20} weight="bold" className="text-secondaryOrtho" />
            </button>
          </div>

          {/* Body */}

          <div className="flex-1 overflow-y-auto flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10">
            <nav className="flex-1 flex flex-col gap-2" aria-label="Mobile">
              {navLinks.map((item, idx) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      transitionDelay: menuOpen ? `${idx * 60 + 200}ms` : "0ms",
                    }}
                    className={`group flex-1 flex items-center gap-4 sm:gap-6 px-4 sm:px-5 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                    } ${isActive ? "bg-secondaryOrtho/15" : "hover:bg-primaryOrtho/5"}`}
                  >
                    {/* Index number */}

                    <span
                      className={`font-stats text-[13px] sm:text-[14px] font-bold tracking-wider tabular-nums w-8 transition-colors duration-300 ${
                        isActive
                          ? "text-secondaryOrtho"
                          : "text-primaryOrtho group-hover:text-secondaryOrtho"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Vertical divider */}

                    <span
                      className={`block w-px h-7 transition-colors duration-300 ${
                        isActive
                          ? "bg-secondaryOrtho"
                          : "bg-primaryOrtho/20 border-l border-primaryOrtho/20 group-hover:border-secondaryOrtho"
                      }`}
                    />

                    {/* Link label */}

                    <span className="relative flex-1 py-1">
                      <span
                        className={`relative inline-block text-[15px] sm:text-[15.5px] md:text-base font-semibold tracking-wide transition-all duration-300 group-hover:translate-x-1 ${
                          isActive ? "text-secondaryOrtho" : "text-primaryOrtho"
                        }`}
                      >
                        {item.name}

                        <span
                          className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] rounded-full bg-secondaryOrtho transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg shadow-secondaryOrtho ${
                            isActive
                              ? "w-full opacity-100"
                              : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                          }`}
                        />
                      </span>
                    </span>

                    {/* Trailing chip */}

                    <span
                      className={`grid place-items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-400 ${
                        isActive
                          ? "bg-secondaryOrtho text-primaryOrtho opacity-100 scale-100"
                          : "bg-primaryOrtho/10 text-primaryOrtho opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    >
                      <ArrowUpRight size={15} weight="bold" />
                    </span>
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact"
              className="group relative mt-5 flex flex-row gap-2 justify-between  w-60 items-center mx-auto overflow-hidden rounded-full bg-secondaryOrtho! px-7 py-4 text-sm font-semibold text-tertiaryOrtho shadow-[0_10px_30px_rgba(248,123,27,0.35)] transition-all duration-300 hover:scale-[1.03] md:text-base"
            >
              Contact Us
              <ArrowUpRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
