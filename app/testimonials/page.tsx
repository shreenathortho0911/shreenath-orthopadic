import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import { StructuredData } from "@/components/seo/StructuredData";
import FeaturedRecoveryStory from "@/components/ui/testimonial/FeaturedRecoveryStory";
import RecoveryTransformationTimeline from "@/components/ui/testimonial/RecoveryTransformationTimeline";
import PremiumTestimonials from "@/components/ui/testimonial/TestimonialGridExperience";
import VideoTestimonialShowcase from "@/components/ui/testimonial/VideoTestimonialShowcase";
import { generateBreadcrumbSchema, generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  page: "testimonials",
});

// Breadcrumb schema for testimonials page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Testimonials", url: "/testimonials" },
]);

const TestimonialsPage = () => {
  return (
    <div className="mt-10">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Patient Experiences & Recovery Stories"
        currentPage="Reviews"
        description="Real recovery stories from our Orthopaedic patients."
      />
      <FeaturedRecoveryStory />
      <VideoTestimonialShowcase />
      <RecoveryTransformationTimeline />
      <PremiumTestimonials />
    </div>
  );
};

export default TestimonialsPage;
