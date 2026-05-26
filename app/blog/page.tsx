import BreadcrumbSection from "@/components/common/BreadcrumbSection";
import { StructuredData } from "@/components/seo/StructuredData";
import BlogListing from "@/components/ui/treatment/BlogListing";
import { generateBreadcrumbSchema, generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  page: "blog",
});

// Breadcrumb schema for blog page
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Blog", url: "/blog" },
]);

const BlogPage = () => {
  return (
    <div className="mt-20">
      <StructuredData schema={breadcrumbSchema} />
      <BreadcrumbSection
        title="Orthopedic Health Tips & Articles"
        currentPage="Blog"
        description="Expert insights, recovery tips, and health articles from Shreenath Orthopedic Hospital."
      />
      <BlogListing />
    </div>
  );
};

export default BlogPage;
