"use client";

import SectionHeader from "@/components/common/SectionHeader";
import { useBlogs } from "@/services/hooks/useBlogs";
import { ArrowRight } from "@phosphor-icons/react";
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
  excerpt?: string;
  summary?: string;
  images?: BlogImage[];
}

export default function BlogListing() {
  const { data, isLoading } = useBlogs();

  const blogs: BlogItem[] = data?.items || [];

  // Extract image from Blogger HTML
  const extractImage = (html: string): string | null => {
    const match = html.match(/<img[^>]+src="([^">]+)"/);
    return match ? match[1] : null;
  };

  // Clean HTML
  const cleanHTML = (html: string): string => {
    if (!html) return "";

    return html
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<head[\s\S]*?<\/head>/gi, " ")
      .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  // Get short description
  const getShortDescription = (html: string): string => {
    const cleanText = cleanHTML(html);
    const words = cleanText.split(" ").slice(0, 18);
    return words.join(" ") + (words.length >= 18 ? "..." : "");
  };

  if (isLoading) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-tertiaryOrtho via-gray-50 to-tertiaryOrtho min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-secondaryOrtho/10 blur-3xl" />
          <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-primaryOrtho/5 blur-3xl" />
        </div>

        <div className="relative max-w-9xl mx-auto px-5 md:px-6 lg:px-8">
          <div className="mt-16 md:mt-24 flex items-center justify-center min-h-[300px]">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full border-4 border-primaryOrtho border-t-secondaryOrtho animate-spin" />
              <p className="text-primaryOrtho font-semibold">Loading blogs...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!blogs || blogs.length === 0) {
    return (
      <section className="relative overflow-hidden bg-tertiaryOrtho py-16 md:py-24">
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
          <SectionHeader
            badge="Orthopedic Knowledge Hub"
            title={
              <>
                Recovery Starts With
                <br />
                <span className="text-secondaryOrtho">Better Understanding</span>
              </>
            }
            description="Explore expert orthopedic insights, rehabilitation guidance, pain management strategies, and modern recovery treatments curated by specialists."
          />
          <div className="mt-16 text-center">
            <p className="text-lg text-primaryOrtho font-medium">
              No blogs available at the moment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pb-10 bg-tertiaryOrtho ">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-150px] right-[-100px] w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-secondaryOrtho/10 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[-100px] w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full bg-primaryOrtho/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        {/* <SectionHeader
          badge="Orthopedic Knowledge Hub"
          title={
            <>
              Recovery Starts With
              <br />
              <span className="text-secondaryOrtho">Better Understanding</span>
            </>
          }
          description="Explore expert orthopedic insights, rehabilitation guidance, pain management strategies, and modern recovery treatments curated by specialists."
        /> */}

        {/* Blogs Grid - Uniform Small Cards */}
        <div className="mt-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogs.map((blog, index) => {
            const image =
              extractImage(blog.content) ||
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop";

            const descriptionSource = blog.excerpt || blog.summary || blog.content;
            const description = getShortDescription(descriptionSource);

            return (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${encodeURIComponent(blog.id)}`} className="group block h-full">
                  <div
                    className={`
                      relative overflow-hidden h-full
                      rounded-2xl
                      bg-white
                      transition-all duration-500 ease-out
                      shadow-md hover:shadow-2xl
                      hover:shadow-primaryOrtho/20
                      flex flex-col
                    `}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gray-100 h-40 sm:h-56 lg:h-64 w-full">
                      <Image
                        src={image}
                        alt={blog.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 3}
                      />
                    </div>

                    {/* Content Container */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col">
                      {/* Title */}
                      <h3
                        className={`
                          font-bold text-primaryOrtho leading-snug
                          transition-colors duration-300
                          group-hover:text-secondaryOrtho
                          text-lg md:text-xl
                          line-clamp-2
                        `}
                      >
                        {blog.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-gray-600 leading-relaxed text-sm line-clamp-2">
                        {description}
                      </p>

                      {/* Read More Link */}
                      <Link
                        href={`/blog/${blog.id}`}
                        className="mt-auto pt-4 inline-flex items-center gap-2 text-primaryOrtho font-semibold hover:text-secondaryOrtho transition-colors duration-300"
                      >
                        Read More
                        <ArrowRight
                          size={16}
                          weight="bold"
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
