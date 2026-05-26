import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import FeaturedRecoveryStory from "@/components/ui/testimonial/FeaturedRecoveryStory";
import RecoveryTransformationTimeline from "@/components/ui/testimonial/RecoveryTransformationTimeline";
import PremiumTestimonials from "@/components/ui/testimonial/TestimonialGridExperience";
import VideoTestimonialShowcase from "@/components/ui/testimonial/VideoTestimonialShowcase";

const page = () => {
  return (
    <div className="mt-10">
      <BreadcrumbSection
        title="Patient Experiences & Recovery Stories"
        currentPage="Testimonials"
        description="Real recovery stories from our orthopedic patients."
      />
      <FeaturedRecoveryStory />
      <VideoTestimonialShowcase />
      <RecoveryTransformationTimeline />
      <PremiumTestimonials />
    </div>
  );
};

export default page;
