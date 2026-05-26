import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import InsuranceSupportSection from "@/components/ui/about/InsuranceSupportSection";
import FloatingConnectDock from "@/components/ui/contact/FloatingConnectDock";
import HospitalHoursFAQSection from "@/components/ui/contact/HospitalHoursFAQSection";
import PremiumAppointmentForm from "@/components/ui/contact/PremiumAppointmentForm";
import SmartLocationSection from "@/components/ui/contact/SmartLocationSection";
import SmartPainSelectorSection from "@/components/ui/contact/SmartPainSelectorSection";

const page = () => {
  return (
    <div className="mt-10">
      <BreadcrumbSection
        title="Let’s Connect For Better Care"
        currentPage="Contact Us"
        description="Connect with our orthopedic experts for appointments and patient support."
      />
      <SmartPainSelectorSection />
      <FloatingConnectDock />
      <HospitalHoursFAQSection />
      <SmartLocationSection />
      <InsuranceSupportSection />
      <PremiumAppointmentForm />
    </div>
  );
};

export default page;
