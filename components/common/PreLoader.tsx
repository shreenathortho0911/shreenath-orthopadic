"use client";

import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(
    () => [
      { left: "20%", top: "25%" },
      { left: "30%", top: "15%" },
      { left: "45%", top: "20%" },
      { left: "60%", top: "18%" },
      { left: "75%", top: "28%" },

      { left: "15%", top: "40%" },
      { left: "25%", top: "50%" },
      { left: "35%", top: "65%" },
      { left: "50%", top: "75%" },
      { left: "70%", top: "68%" },

      { left: "82%", top: "45%" },
      { left: "78%", top: "58%" },
      { left: "88%", top: "35%" },
      { left: "12%", top: "60%" },

      { left: "42%", top: "12%" },
      { left: "58%", top: "12%" },
      { left: "22%", top: "78%" },
      { left: "76%", top: "78%" },

      { left: "10%", top: "30%" },
      { left: "90%", top: "65%" },
    ],
    [],
  );

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".particle",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.03,
        ease: "power3.out",
      },
    )

      .fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.7,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power4.out",
        },
      )

      .fromTo(
        ringRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotate: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.7",
      )

      .to(
        ".particle",
        {
          x: () => gsap.utils.random(-100, 100),
          y: () => gsap.utils.random(-100, 100),
          opacity: 0,
          duration: 1,
          stagger: 0.01,
        },
        "-=0.5",
      )

      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      })

      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        pointerEvents: "none",
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-white"
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          className="particle absolute h-1.5 w-1.5 md:h-2 md:w-2 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "#F5821F" : "#10265C",
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      <div className="relative flex items-center justify-center">
        <div
          ref={ringRef}
          className="
            absolute
            h-[240px]
            w-[240px]

            sm:h-[300px]
            sm:w-[300px]

          md:h-[450px]
md:w-[450px]

lg:h-[500px]
lg:w-[500px]

            rounded-full
            border-[4px]
            md:border-[5px]
            border-[#F5821F]
          "
        />

        <img
          ref={logoRef}
          src="/logo.png"
          alt="Shreenath Orthopaedic"
          style={{
            maxWidth: "75vw",
          }}
          className="
            relative
            z-10
            w-[170px]

            sm:w-[220px]

           md:w-[250px]
lg:w-[300px]
xl:w-[340px]

            h-auto
            object-contain
            select-none
            pointer-events-none
          "
        />
      </div>
    </div>
  );
}
