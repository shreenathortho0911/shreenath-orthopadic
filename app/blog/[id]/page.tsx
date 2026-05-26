import BlogDetails from "@/components/ui/treatment/BlogDetails";

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // Decode the blog ID from URL encoding
  const decodedId = decodeURIComponent(id);

  return (
    <div className="mt-15">
      <BlogDetails blogId={decodedId} />
    </div>
  );
}
