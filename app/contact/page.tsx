import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import { StructuredData } from "@/components/seo/StructuredData";
import InsuranceSupportSection from "@/components/ui/about/InsuranceSupportSection";
import FloatingConnectDock from "@/components/ui/contact/FloatingConnectDock";
import HospitalHoursFAQSection from "@/components/ui/contact/HospitalHoursFAQSection";
import PremiumAppointmentForm from "@/components/ui/contact/PremiumAppointmentForm";
import SmartLocationSection from "@/components/ui/contact/SmartLocationSection";
import SmartPainSelectorSection from "@/components/ui/contact/SmartPainSelectorSection";
import { generateBreadcrumbSchema, generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  page: "contact",
});

// Breadcrumb schema for contact page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact Us", url: "/contact" },
]);

const ContactPage = () => {
  return (
    <div className="mt-10">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Let's Connect For Better Care"
        currentPage="Contact Us"
        description="Connect with our Orthopaedic experts for appointments and patient support."
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

export default ContactPage;
