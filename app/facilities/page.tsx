import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import AdvancedFacilitiesSection from "@/components/ui/facilities/AdvancedFacilitiesSection";

const page = () => {
  return (
    <div className="mt-10">
      <BreadcrumbSection
        title="Orthopedic Facilities"
        currentPage="Facilities"
        description="Modern facilities focused on orthopedic treatment and recovery."
      />
      <AdvancedFacilitiesSection />
    </div>
  );
};

export default page;
