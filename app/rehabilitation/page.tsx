"use client";
import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import RecoveryCTA from "@/components/common/RecoveryCTA";
import WhyChooseUs from "@/components/ui/home/WhyChooseUs";
import RecoveryJourneyTimeline from "@/components/ui/rehabilitation/RecoveryJourneyTimeline";
import RecoveryPrograms from "@/components/ui/rehabilitation/RecoveryPrograms";
import SurgeonRecoveryCare from "@/components/ui/rehabilitation/SurgeonRecoveryCare";
import WhyRecoveryMatters from "@/components/ui/rehabilitation/WhyRecoveryMatters";
import { CalendarBlank, ChatCircleDots } from "@phosphor-icons/react";

const page = () => {
  return (
    <div className="mt-10">
      <BreadcrumbSection
        title="Advanced Orthopedic Rehabilitation Care"
        currentPage="Rehabilitation"
        description="Personalized rehab programs focused on strength, mobility, and faster recovery."
      />
      <RecoveryPrograms />
      <RecoveryJourneyTimeline />
      <SurgeonRecoveryCare />
      <WhyRecoveryMatters />
      <WhyChooseUs />
      <RecoveryCTA
        badge="Recovery Support"
        title={
          <>
            Recovery Is The Final Step
            <span className="text-secondaryOrtho"> Toward Restoring Movement</span>
          </>
        }
        description="Personalized orthopedic rehabilitation programs designed to improve mobility and support long-term recovery."
        floatingBadge="Orthopedic Recovery Care"
        buttons={[
          {
            label: "Contact Us",
            href: "/contact",
            variant: "primary",
            icon: CalendarBlank,
          },

          {
            label: "See Treatments",
            href: "/treatments",
            variant: "secondary",
            icon: ChatCircleDots,
          },
        ]}
      />
    </div>
  );
};

export default page;
