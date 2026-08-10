import { StructuredData } from "@/components/seo/StructuredData";
import BlogDetails from "@/components/ui/treatment/BlogDetails";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/metadata-generator";
import { getBlogById } from "@/services/blog.service";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const { id } = await params;
    const decodedId = decodeURIComponent(id);
    const blog = await getBlogById(decodedId);

    return {
      title: `${blog.title || "Blog Post"} - Shreenath Orthopedic Hospital`,
      description:
        blog.excerpt || blog.summary || "Read this article from Shreenath Orthopedic Hospital.",
      keywords: [...(blog.tags || []), "Orthopedic Blog", "Health Tips", "Orthopedic Health"],
      openGraph: {
        title: blog.title || "Blog Post",
        description: blog.excerpt || blog.summary || "Read our latest orthopedic health article.",
        type: "article",
        url: `https://shreenathorthopedic.in/blog/${id}`,
        images: [
          {
            url: blog.image || "/og-image.jpg",
            width: 1200,
            height: 630,
            alt: blog.title || "Blog Post",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.title || "Blog Post",
        description: blog.excerpt || blog.summary || "Read our latest orthopedic health article.",
        images: [blog.image || "/og-image.jpg"],
      },
      alternates: {
        canonical: `https://shreenathorthopedic.in/blog/${id}`,
      },
    };
  } catch (error) {
    return {
      title: "Blog Post - Shreenath Orthopedic Hospital",
      description: "Read our latest article from Shreenath Orthopedic Hospital.",
    };
  }
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Decode the blog ID from URL encoding
  const decodedId = decodeURIComponent(id);

  // Fetch blog data for structured data
  let blogData = null;
  try {
    blogData = await getBlogById(decodedId);
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  // Generate article schema
  const articleSchema = blogData
    ? generateArticleSchema({
        title: blogData.title,
        description: blogData.excerpt || blogData.summary || "",
        image: blogData.image,
        datePublished: blogData.published || new Date().toISOString(),
        dateModified: blogData.modified || blogData.published || new Date().toISOString(),
        author: blogData.author || "Shreenath Orthopedic Hospital",
      })
    : null;

  // Breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blogData?.title || "Article", url: `/blog/${id}` },
  ]);

  return (
    <div className="mt-15">
      {articleSchema && <StructuredData schema={articleSchema} />}
      <StructuredData schema={breadcrumbSchema} />
      <BlogDetails blogId={decodedId} />
    </div>
  );
}
