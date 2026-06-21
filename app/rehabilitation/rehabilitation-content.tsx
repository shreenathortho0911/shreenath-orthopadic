"use client";

import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import RecoveryCTA from "@/components/common/RecoveryCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import WhyChooseUs from "@/components/ui/home/WhyChooseUs";
import RecoveryJourneyTimeline from "@/components/ui/rehabilitation/RecoveryJourneyTimeline";
import RecoveryPrograms from "@/components/ui/rehabilitation/RecoveryPrograms";
import SurgeonRecoveryCare from "@/components/ui/rehabilitation/SurgeonRecoveryCare";
import WhyRecoveryMatters from "@/components/ui/rehabilitation/WhyRecoveryMatters";
import { generateBreadcrumbSchema } from "@/lib/metadata-generator";
import { CalendarBlank, ChatCircleDots } from "@phosphor-icons/react";

// Breadcrumb schema for rehabilitation page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Rehabilitation", url: "/rehabilitation" },
]);

export function RehabilitationContent() {
  return (
    <div className="mt-10">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Advanced Orthopaedic Rehabilitation Care"
        currentPage="Rehab"
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
        description="Personalized Orthopaedic rehabilitation programs designed to improve mobility and support long-term recovery."
        floatingBadge="Orthopaedic Recovery Care"
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
}
