import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import FAQSection from "@/components/ui/about/FAQSection";
import InsuranceSupportSection from "@/components/ui/about/InsuranceSupportSection";
import LeadDoctorSection from "@/components/ui/about/LeadDoctorSection";
import MissionVisionSection from "@/components/ui/about/MissionVisionSection";
import OurStorySection from "@/components/ui/about/OurStorySection";
import RecoveryPhilosophySection from "@/components/ui/about/RecoveryPhilosophySection";
import SpecialtiesSection from "@/components/ui/about/SpecialtiesSection";
import WhyTrustUsSection from "@/components/ui/about/WhyTrustUsSection";

const page = () => {
  return (
    <div className="mt-10">
      <BreadcrumbSection
        title="About Shreenath Orthopedic Hospital"
        currentPage="About Us"
        description="Trusted orthopedic care with experienced specialists and modern treatments."
      />
      <OurStorySection />
      <MissionVisionSection />
      <LeadDoctorSection />
      <WhyTrustUsSection />
      <SpecialtiesSection />
      <RecoveryPhilosophySection />
      <InsuranceSupportSection />
      <FAQSection />
    </div>
  );
};

export default page;
