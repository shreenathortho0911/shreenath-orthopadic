"use client";

import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import SectionHeader from "@/components/common/SectionHeader";

const facilities = [
  {
    id: "01",
    title: "Modular Operation Theater",
    image: "/facilities/ot.jpeg",
    description:
      "Advanced modular operation theaters designed for orthopedic procedures with sterile environments, precision workflow, and patient safety standards.",
    features: [
      "Laminar Air Flow",
      "Advanced Monitoring Systems",
      "Joint Replacement Ready",
      "Infection Control Standards",
    ],
  },
  {
    id: "02",
    title: "FDP C-Arm System",
    image: "/facilities/carm.jpeg",
    description:
      "Real-time imaging technology that assists surgeons with enhanced precision during orthopedic and trauma procedures.",
    features: [
      "Live Imaging",
      "High Resolution Guidance",
      "Enhanced Surgical Accuracy",
      "Advanced Visualization",
    ],
  },
  {
    id: "03",
    title: "Digital X-Ray",
    image: "/facilities/xray.jpeg",
    description:
      "Modern digital radiography providing faster diagnostics, clearer imaging, and efficient orthopedic assessments.",
    features: [
      "Rapid Reporting",
      "High Image Clarity",
      "Low Radiation Exposure",
      "Digital Records",
    ],
  },
  {
    id: "04",
    title: "Trauma & Emergency Care",
    image: "/facilities/room1.jpg",
    description:
      "Dedicated trauma care facilities for fractures, accidents, and emergency orthopedic interventions.",
    features: [
      "24/7 Emergency Care",
      "Fracture Management",
      "Trauma Specialists",
      "Immediate Response",
    ],
  },
  {
    id: "05",
    title: "Stretcher Lift Facility",
    image: "/facilities/lift.jpeg",
    description:
      "Specialized lift systems enabling safe and comfortable movement of patients throughout the hospital.",
    features: [
      "Easy Patient Transfer",
      "Safe Accessibility",
      "Emergency Support",
      "Comfortable Mobility",
    ],
  },
  {
    id: "06",
    title: "Dedicated Parking Facility",
    image: "/facilities/parking.jpeg",
    description:
      "Ample parking facilities designed for patients and visitors with convenient access to the hospital premises.",
    features: ["Easy Access", "Visitor Parking", "Emergency Vehicle Route", "Accessible Parking"],
  },
  {
    id: "07",
    title: "ICU & HDU Care",
    image: "/facilities/room2.jpg",
    description:
      "Dedicated intensive and high-dependency care units providing continuous monitoring and support for post-operative orthopedic patients.",
    features: [
      "24/7 Monitoring",
      "Critical Care Support",
      "Advanced Equipment",
      "Specialized Nursing",
    ],
  },
];

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const facility = facilities[activeIndex];

  const nextFacility = () => {
    setActiveIndex((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));
  };

  const prevFacility = () => {
    setActiveIndex((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <section className="relative overflow-hidden bg-tertiaryOrtho section-padding">
      {/* Background Effects */}
      <div className="absolute left-[-10%] top-[-10%] h-[400px] w-[400px] rounded-full bg-secondaryOrtho/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primaryOrtho/10 blur-[150px]" />

      <div className="container-wrapper relative">
        <SectionHeader
          badge="Hospital Facilities"
          title={
            <>
              Advanced Infrastructure Built For
              <br />
              <span className="text-secondaryOrtho">Orthopedic Excellence</span>
            </>
          }
          description="Explore our modern facilities designed to support precision treatment, patient comfort, and faster recovery."
        />

        {/* Facility Navigation */}
        <div className="mt-12 flex gap-3 overflow-x-scroll pb-2 no-scrollbar">
          {facilities.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`
                shrink-0 group cursor-pointer rounded-full border px-5 py-3 transition-all duration-300
                ${
                  activeIndex === index
                    ? "border-secondaryOrtho bg-primaryOrtho text-white"
                    : "border-primaryOrtho/10 bg-white text-primaryOrtho hover:border-secondaryOrtho/30"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-secondaryOrtho">{item.id}</span>
                <span className="font-semibold">{item.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Facility Showcase */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-[32px] border border-primaryOrtho/10 bg-white shadow-[0_20px_60px_rgba(17,34,78,0.06)]"
            >
              {/* ✅ FIX 1: Added grid-cols-1 for mobile */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
                {/* Image */}
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    className="group relative aspect-[16/10] cursor-pointer overflow-hidden lg:aspect-auto lg:h-full"
                    onClick={() => setIsOpen(true)}
                  >
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho/80 via-primaryOrtho/10 to-transparent" />
                  </motion.div>

                  {/* Floating Controls — desktop only */}
                  <div className="absolute hidden bottom-6 right-6 sm:flex gap-5">
                    <button
                      onClick={prevFacility}
                      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-primaryOrtho shadow-lg transition hover:scale-105"
                    >
                      <CaretLeft size={22} weight="bold" />
                    </button>
                    <button
                      onClick={nextFacility}
                      className="flex h-12 w-12 items-center cursor-pointer justify-center rounded-full bg-secondaryOrtho text-white shadow-lg transition hover:scale-105"
                    >
                      <CaretRight size={22} weight="bold" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl font-black text-primaryOrtho/10">{facility.id}</span>
                    <div className="h-px flex-1 bg-primaryOrtho/10" />
                  </div>

                  <h3 className="mt-5 text-3xl font-black tracking-[-0.03em] text-primaryOrtho">
                    {facility.title}
                  </h3>

                  <p className="mt-5 text-base leading-relaxed text-slate-600">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {facility.features.map((feature) => (
                      <motion.div
                        key={feature}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 rounded-2xl border border-primaryOrtho/10 bg-tertiaryOrtho px-4 py-4"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-secondaryOrtho" />
                        <span className="text-sm font-semibold text-primaryOrtho">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Stats */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div>
                      <h4 className="text-2xl font-black text-primaryOrtho">24/7</h4>
                      <p className="text-xs text-slate-500">Support</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-primaryOrtho">100%</h4>
                      <p className="text-xs text-slate-500">Patient Focus</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-primaryOrtho">7+</h4>
                      <p className="text-xs text-slate-500">Facilities</p>
                    </div>
                  </div>

                  {/* ✅ FIX 3: Mobile-only nav buttons */}
                  <div className="mt-6 flex gap-4 sm:hidden">
                    <button
                      onClick={prevFacility}
                      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white border border-primaryOrtho/10 text-primaryOrtho shadow-md transition hover:scale-105"
                    >
                      <CaretLeft size={20} weight="bold" />
                    </button>
                    <button
                      onClick={nextFacility}
                      className="flex h-11 w-11 items-center cursor-pointer justify-center rounded-full bg-secondaryOrtho text-white shadow-md transition hover:scale-105"
                    >
                      <CaretRight size={20} weight="bold" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Fullscreen Facility Modal — unchanged */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-black"
            >
              <div className="relative h-screen w-screen overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={facility.id}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-black/40" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black via-black/80 to-transparent" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute right-4 top-4 z-[100] flex size-10 cursor-pointer items-center justify-center rounded-full bg-secondaryOrtho text-white/70 shadow-2xl transition-all duration-300 hover:scale-110"
                >
                  <X weight="bold" className="size-6" />
                </button>

                <button
                  onClick={prevFacility}
                  className="absolute left-4 top-1/2 z-[100] flex size-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primaryOrtho shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <CaretLeft weight="bold" className="size-6" />
                </button>

                <button
                  onClick={nextFacility}
                  className="absolute right-4 top-1/2 z-[100] flex size-10 cursor-pointer -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primaryOrtho shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <CaretRight className="size-6" weight="bold" />
                </button>

                <div className="absolute bottom-0 left-0 right-0 z-50 px-5 pb-6 sm:px-8 md:px-12 lg:px-16 lg:pb-10">
                  <div className="mx-auto max-w-7xl">
                    <span className="inline-flex rounded-full bg-secondaryOrtho px-4 py-2 text-xs font-bold text-primaryOrtho">
                      Facility {facility.id}
                    </span>
                    <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {facility.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
                      {facility.description}
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {facility.features.map((feature) => (
                        <div
                          key={feature}
                          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-medium text-white backdrop-blur-lg"
                        >
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
