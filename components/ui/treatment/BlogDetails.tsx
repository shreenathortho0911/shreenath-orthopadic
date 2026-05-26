"use client";

import { useBlog } from "@/services/hooks/useBlog";
import { useLatestBlogs } from "@/services/hooks/useLatestBlogs";
import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface BlogImage {
  url: string;
}

interface BlogItem {
  id: string;
  title: string;
  published: string;
  content: string;
  images?: BlogImage[];
}

interface BlogDetailsProps {
  blogId: string;
}

export default function BlogDetails({ blogId }: BlogDetailsProps) {
  const { data: blog, isLoading, isError } = useBlog(blogId);
  const { data: latestBlogsData } = useLatestBlogs(5);

  // Extract image from HTML
  const extractImage = (html: string): string | null => {
    const match = html.match(/<img[^>]+src="([^"]+)"/);
    return match ? match[1] : null;
  };

  // Remove first image from HTML to prevent duplication in content
  const removeFirstImageFromHTML = (html: string): string => {
    return html.replace(/<img[^>]+src="[^"]*"[^>]*\/?>/i, "");
  };

  // Clean HTML for preview
  const cleanHTML = (html: string): string => {
    return (
      html
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim()
        .substring(0, 120) + "..."
    );
  };

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center section-padding container-wrapper items-center min-h-screen bg-gradient-to-br from-tertiaryOrtho via-gray-50 to-tertiaryOrtho">
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-full border-4 border-primaryOrtho border-t-secondaryOrtho animate-spin" />
          <p className="text-primaryOrtho font-semibold">Loading blog...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (isError || !blog) {
    return (
      <div className="min-h-screen section-padding container-wrapper flex items-center justify-center bg-gradient-to-br from-tertiaryOrtho via-gray-50 to-tertiaryOrtho">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primaryOrtho mb-2">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">
            Sorry, the blog you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primaryOrtho text-white rounded-lg hover:bg-primaryOrtho/90 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const mainImage = extractImage(blog.content);
  const publishDate = new Date(blog.published).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Extract items array and filter out current blog
  const latestBlogsArray: BlogItem[] = latestBlogsData?.items || [];
  const relatedBlogs = latestBlogsArray.filter((b: BlogItem) => b.id !== blogId);

  return (
    <div className="relative bg-gradient-to-br section-padding container-wrapper  from-tertiaryOrtho via-gray-50 to-tertiaryOrtho min-h-screen ">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondaryOrtho/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primaryOrtho/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Main Grid - Left Content (2/3), Right Sticky Sidebar (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <Link
                href="/treatments"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primaryOrtho to-primaryOrtho/80 text-white font-semibold hover:shadow-lg hover:from-primaryOrtho hover:to-primaryOrtho transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-md"
              >
                <ArrowLeft size={20} weight="bold" />
                All Treatments
              </Link>
            </motion.div>

            <div className="bg-white/90 backdrop-blur-md border border-primaryOrtho/10 rounded-3xl shadow-lg overflow-hidden">
              <div className="p-6 sm:p-10 md:p-12">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primaryOrtho mb-4 leading-tight">
                  {blog.title}
                </h1>

                {/* Date */}
                <p className="text-sm md:text-base text-gray-600 mb-8 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-secondaryOrtho rounded-full"></span>
                  Published on{" "}
                  <span className="font-semibold text-primaryOrtho">{publishDate}</span>
                </p>

                {/* Featured Image */}
                {mainImage && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg"
                  >
                    <Image
                      src={mainImage}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                )}

                {/* Blog Content with Videos in Original Position */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="blog-content-styled max-w-none text-gray-800 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: removeFirstImageFromHTML(blog.content),
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Right Column (1/3 width) */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block lg:col-span-1"
          >
            <div className="sticky top-32 space-y-6">
              {/* About Section */}
              <div className="bg-gradient-to-br from-secondaryOrtho/10 to-primaryOrtho/5 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-primaryOrtho mb-3 flex items-center gap-2">
                  <span className="inline-block w-1 h-5 bg-gradient-to-b from-secondaryOrtho to-primaryOrtho rounded-full"></span>
                  About Shreenath
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  At Shreenath Orthopedic, we provide expert orthopedic care and rehabilitation
                  guidance to support your journey to recovery. Our specialists are committed to
                  helping you heal naturally and return to your best self.
                </p>
              </div>

              {/* Latest Blogs */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-primaryOrtho mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-secondaryOrtho to-primaryOrtho rounded-full"></span>
                  Latest Blogs
                </h3>
                <ul className="space-y-4">
                  {relatedBlogs.slice(0, 4).map((post: BlogItem, idx: number) => {
                    const postImage = extractImage(post.content);
                    const postDate = new Date(post.published).toLocaleDateString("en-GB");

                    return (
                      <motion.li
                        key={post.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Link
                          href={`/blog/${encodeURIComponent(post.id)}`}
                          className="flex gap-3 p-3 rounded-lg hover:bg-primaryOrtho/5 transition-all duration-300 group hover:scale-102"
                        >
                          {postImage && (
                            <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                              <Image
                                src={postImage}
                                alt={post.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-primaryOrtho group-hover:text-secondaryOrtho transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">{postDate}</p>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Categories */}
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-bold text-primaryOrtho mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-5 bg-gradient-to-b from-secondaryOrtho to-primaryOrtho rounded-full"></span>
                  Explore More
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="/treatments"
                    className="px-3 py-1.5 text-xs font-semibold bg-secondaryOrtho/20 text-secondaryOrtho border border-secondaryOrtho/30 rounded-full hover:bg-secondaryOrtho/30 transition-colors"
                  >
                    Treatments
                  </Link>
                  <Link
                    href="/about"
                    className="px-3 py-1.5 text-xs font-semibold bg-primaryOrtho/10 text-primaryOrtho border border-primaryOrtho/20 rounded-full hover:bg-primaryOrtho/20 transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Mobile Sidebar - Shows below content on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:hidden mt-10 space-y-6"
        >
          {/* Mobile - About Section */}
          <div className="bg-gradient-to-br from-secondaryOrtho/10 to-primaryOrtho/5 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md">
            <h3 className="text-lg font-bold text-primaryOrtho mb-3">About Shreenath</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              At Shreenath Orthopedic, we provide expert orthopedic care and rehabilitation guidance
              to support your journey to recovery. Our specialists are committed to helping you heal
              naturally and return to your best self.
            </p>
          </div>

          {/* Mobile - Latest Blogs */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md">
            <h3 className="text-lg font-bold text-primaryOrtho mb-4">Latest Blogs</h3>
            <ul className="space-y-4">
              {relatedBlogs.slice(0, 4).map((post: BlogItem, idx: number) => {
                const postImage = extractImage(post.content);
                const postDate = new Date(post.published).toLocaleDateString("en-GB");

                return (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${encodeURIComponent(post.id)}`}
                      className="flex gap-3 p-3 rounded-lg hover:bg-primaryOrtho/5 transition-all duration-300"
                    >
                      {postImage && (
                        <div className="relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                          <Image src={postImage} alt={post.title} fill className="object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-primaryOrtho hover:text-secondaryOrtho transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">{postDate}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile - Explore More */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-primaryOrtho/10 shadow-md">
            <h3 className="text-lg font-bold text-primaryOrtho mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/treatments"
                className="px-3 py-1.5 text-xs font-semibold bg-secondaryOrtho/20 text-secondaryOrtho border border-secondaryOrtho/30 rounded-full hover:bg-secondaryOrtho/30 transition-colors"
              >
                Treatments
              </Link>
              <Link
                href="/about"
                className="px-3 py-1.5 text-xs font-semibold bg-primaryOrtho/10 text-primaryOrtho border border-primaryOrtho/20 rounded-full hover:bg-primaryOrtho/20 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
