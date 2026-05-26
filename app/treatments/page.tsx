import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import BlogListing from "@/components/ui/treatment/BlogListing";

const page = () => {
  return (
    <div className="mt-20">
      <BreadcrumbSection
        title="Advanced Orthopedic Treatment Solutions"
        currentPage="Orthopedic Treatment"
        description="Specialized care focused on pain relief, recovery, and better mobility."
      />
      <BlogListing />
    </div>
  );
};

export default page;
