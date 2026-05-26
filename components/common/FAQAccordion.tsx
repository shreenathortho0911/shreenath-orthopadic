"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
}

export function FAQAccordion({ data }: FAQAccordionProps) {
  const [activeFAQ, setActiveFAQ] = useState<number>(0);

  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const isActive = activeFAQ === index;

        return (
          <motion.div
            key={index}
            layout
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden rounded-[26px] border border-primaryOrtho/10 bg-white shadow-[0_15px_40px_rgba(15,23,42,0.04)]"
          >
            {/* Question */}
            <button
              onClick={() => setActiveFAQ(isActive ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <h3 className="text-sm font-black leading-[1.5] tracking-[-0.02em] text-primaryOrtho sm:text-[15px]">
                {item.question}
              </h3>

              <div
                className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-secondaryOrtho text-white"
                    : "bg-secondaryOrtho/10 text-secondaryOrtho"
                }`}
              >
                {isActive ? <Minus size={18} weight="bold" /> : <Plus size={18} weight="bold" />}
              </div>
            </button>

            {/* Answer */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-primaryOrtho/10 px-5 pb-5 pt-4 sm:px-6">
                    <p className="text-sm leading-relaxed text-primaryOrtho/60">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
