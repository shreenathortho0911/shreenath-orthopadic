"use client";

import RecoveryCTA from "@/components/common/RecoveryCTA";
import { StructuredData } from "@/components/seo/StructuredData";
import OrthopedicOverview from "@/components/ui/home/OrthopedicOverview";
import PremiumMedicalCarousel from "@/components/ui/home/PremiumMedicalCarousel";
import RecoveryJourneySection from "@/components/ui/home/RecoveryJourneySection";
import TreatmentsSection from "@/components/ui/home/TreatmentsSection";
import WhyChooseUs from "@/components/ui/home/WhyChooseUs";
import PremiumTestimonials from "@/components/ui/testimonial/TestimonialGridExperience";
import { generateBreadcrumbSchema } from "@/lib/metadata-generator";
import { ChatCircleDots, HandHeartIcon } from "@phosphor-icons/react";

// Breadcrumb schema for home page
const breadcrumbSchema = generateBreadcrumbSchema([{ name: "Home", url: "/" }]);

export function HomePageContent() {
  return (
    <div>
      <StructuredData schema={breadcrumbSchema} />
      <div className=" mt-10">
        {/* <Hero /> */}
        <PremiumMedicalCarousel />
        <OrthopedicOverview />
        <TreatmentsSection />
        <WhyChooseUs />
        <PremiumTestimonials />
        <RecoveryJourneySection />
        <RecoveryCTA
          badge="Trusted Orthopedic Care"
          title={
            <>
              Book Your
              <span className="text-secondaryOrtho"> Orthopedic Consultation Today</span>
            </>
          }
          description="Connect with experienced orthopedic specialists at Shreenath Orthopedic Hospital for advanced treatments, personalized recovery plans, and compassionate patient care."
          floatingBadge="Advanced Orthopedic Support"
          buttons={[
            {
              label: "Rehabilitation",
              href: "/rehabilitation",
              variant: "primary",
              icon: HandHeartIcon,
            },

            {
              label: "Talk To Specialist",
              href: "/contact#appointment",
              variant: "secondary",
              icon: ChatCircleDots,
            },
          ]}
        />
      </div>
    </div>
  );
}
