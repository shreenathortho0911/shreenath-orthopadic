import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import { StructuredData } from "@/components/seo/StructuredData";
import BlogListing from "@/components/ui/treatment/BlogListing";
import { generateBreadcrumbSchema, generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  page: "treatments",
});

// Breadcrumb schema for treatments page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Treatments", url: "/treatments" },
]);

const TreatmentsPage = () => {
  return (
    <div className="mt-10">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Advanced Orthopaedic Treatment Solutions"
        currentPage="Treatment"
        description="Specialized care focused on pain relief, recovery, and better mobility."
      />
      <BlogListing />
    </div>
  );
};

export default TreatmentsPage;
