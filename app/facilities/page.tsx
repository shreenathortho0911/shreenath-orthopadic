import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import { StructuredData } from "@/components/seo/StructuredData";
import AdvancedFacilitiesSection from "@/components/ui/facilities/AdvancedFacilitiesSection";
import { generateBreadcrumbSchema, generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  page: "facilities",
});

// Breadcrumb schema for facilities page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Facilities", url: "/facilities" },
]);

const FacilitiesPage = () => {
  return (
    <div className="mt-10">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Orthopedic Facilities"
        currentPage="Facilities"
        description="Modern facilities focused on orthopedic treatment and recovery."
      />
      <AdvancedFacilitiesSection />
    </div>
  );
};

export default FacilitiesPage;
