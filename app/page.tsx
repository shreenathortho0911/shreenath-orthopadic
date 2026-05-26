"use client";
import RecoveryCTA from "@/components/common/RecoveryCTA";
import OrthopedicOverview from "@/components/ui/home/OrthopedicOverview";
import PremiumMedicalCarousel from "@/components/ui/home/PremiumMedicalCarousel";
import RecoveryJourneySection from "@/components/ui/home/RecoveryJourneySection";
import TreatmentsSection from "@/components/ui/home/TreatmentsSection";
import WhyChooseUs from "@/components/ui/home/WhyChooseUs";
import PremiumTestimonials from "@/components/ui/testimonial/TestimonialGridExperience";
import { CalendarBlank, ChatCircleDots } from "@phosphor-icons/react";

const page = () => {
  return (
    <div>
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
              label: "Book Appointment",
              href: "/contact",
              variant: "primary",
              icon: CalendarBlank,
            },

            {
              label: "Talk To Specialist",
              href: "/treatments",
              variant: "secondary",
              icon: ChatCircleDots,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default page;
