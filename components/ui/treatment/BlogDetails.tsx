"use client";

import { useBlog } from "@/services/hooks/useBlog";
import { useLatestBlogs } from "@/services/hooks/useLatestBlogs";
import { ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

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

  /**
   * The uploaded HTML is the complete blog design.
   * We render it inside an iframe so its hero, image, typography,
   * spacing and article sections stay exactly as authored.
   */
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const resizeBlogViewer = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    try {
      const doc = iframe.contentDocument;

      if (!doc?.body || !doc.documentElement) return;

      iframe.style.height = "0px";

      const height = Math.max(
        doc.body.scrollHeight,
        doc.body.offsetHeight,
        doc.documentElement.scrollHeight,
        doc.documentElement.offsetHeight,
        doc.documentElement.clientHeight,
      );

      iframe.style.height = `${Math.max(height, 500)}px`;
    } catch {
      iframe.style.height = "1000px";
    }
  }, []);

  const handleBlogViewerLoad = useCallback(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    resizeObserverRef.current?.disconnect();
    resizeObserverRef.current = null;

    try {
      const doc = iframe.contentDocument;

      if (!doc) return;

      // Only add safety rules. Do NOT redesign the uploaded HTML.
      const style = doc.createElement("style");

      style.setAttribute("data-blog-viewer-safety", "true");

      style.textContent = `
        html,
        body {
          width: 100% !important;
          max-width: 100% !important;
          min-width: 0 !important;
          margin-left: 0 !important;
          margin-right: 0 !important;
          overflow-x: hidden !important;
        }

        img,
        video,
        table {
          max-width: 100% !important;
        }

        img {
          height: auto;
        }

        * {
          box-sizing: border-box;
        }
      `;

      doc.head?.appendChild(style);

      if (doc.body && "ResizeObserver" in window) {
        const observer = new ResizeObserver(() => {
          resizeBlogViewer();
        });

        observer.observe(doc.body);
        resizeObserverRef.current = observer;
      }

      Array.from(doc.images || []).forEach((image) => {
        if (!image.complete) {
          image.addEventListener("load", resizeBlogViewer, { once: true });
        }
      });

      resizeBlogViewer();
      requestAnimationFrame(resizeBlogViewer);
      setTimeout(resizeBlogViewer, 100);
      setTimeout(resizeBlogViewer, 500);
    } catch {
      resizeBlogViewer();
    }
  }, [resizeBlogViewer]);

  useEffect(() => {
    const handleResize = () => resizeBlogViewer();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserverRef.current?.disconnect();
      resizeObserverRef.current = null;
    };
  }, [resizeBlogViewer]);

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

  // Latest blogs are used only by the right sidebar.
  // The main blog remains untouched inside blog.content.
  const latestBlogsArray: BlogItem[] = latestBlogsData?.items || [];
  const relatedBlogs = latestBlogsArray.filter((b: BlogItem) => b.id !== blogId);

  const extractSidebarImage = (html: string): string | null => {
    if (!html) return null;

    const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);

    return match?.[1] || null;
  };

  return (
    <div className="relative bg-gradient-to-br section-padding container-wrapper  from-tertiaryOrtho via-gray-50 to-tertiaryOrtho min-h-screen ">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondaryOrtho/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primaryOrtho/5 rounded-full blur-3xl" />
      </div>

      <div className="relative   pt-3">
        {/* =========================================================
            DESKTOP:
            LEFT = the uploaded HTML blog, rendered exactly as authored.
            RIGHT = the existing sidebar UI, sticky while the blog is
                    scrolling and naturally stops at the blog/grid end.
        ========================================================= */}
        {/* Back to Treatments */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-7"
        >
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primaryOrtho to-primaryOrtho/80 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-6 sm:text-base"
          >
            <ArrowLeft size={20} weight="bold" />
            All Treatments
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px] lg:gap-10 xl:gap-12">
          {/* LEFT: EXACT UPLOADED HTML BLOG */}
          <motion.main
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-w-0 w-full"
          >
            <div className="w-full min-w-0 overflow-hidden rounded-[24px] bg-white shadow-[0_14px_40px_rgba(17,34,78,0.10)] ring-1 ring-primaryOrtho/10 sm:rounded-[28px]">
              <iframe
                ref={iframeRef}
                title={blog.title}
                srcDoc={blog.content}
                onLoad={handleBlogViewerLoad}
                sandbox="allow-same-origin allow-forms allow-popups"
                scrolling="no"
                className="block w-full min-w-0 border-0"
                style={{
                  width: "100%",
                  minWidth: "0",
                  minHeight: "500px",
                  height: "1000px",
                  border: "0",
                  display: "block",
                }}
              />
            </div>
          </motion.main>

          {/* RIGHT: EXISTING STICKY SIDEBAR UI */}
          <aside className="sticky top-28 hidden h-fit min-w-0 self-start lg:block">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* About Section */}
              <div className="rounded-2xl border border-primaryOrtho/10 bg-gradient-to-br from-secondaryOrtho/10 to-primaryOrtho/5 p-5 shadow-md backdrop-blur-md transition-shadow duration-300 hover:shadow-xl">
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
              <div className="rounded-2xl border border-primaryOrtho/10 bg-white/95 p-5 shadow-md backdrop-blur-md transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-lg font-bold text-primaryOrtho mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-secondaryOrtho to-primaryOrtho rounded-full"></span>
                  Latest Blogs
                </h3>

                <ul className="space-y-4">
                  {relatedBlogs.slice(0, 4).map((post: BlogItem, idx: number) => {
                    const postImage = extractSidebarImage(post.content);
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
                          className="group flex gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-300 hover:border-primaryOrtho/10 hover:bg-primaryOrtho/[0.035] hover:shadow-sm"
                        >
                          {postImage && (
                            <div className="relative h-[76px] w-[100px] flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-primaryOrtho/10 to-secondaryOrtho/10 shadow-sm ring-1 ring-primaryOrtho/10">
                              <Image
                                src={postImage}
                                alt={post.title}
                                fill
                                sizes="92px"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-primaryOrtho/35 via-transparent to-transparent" />
                            </div>
                          )}

                          <div className="flex min-w-0 flex-1 flex-col justify-center">
                            <h4 className="line-clamp-2 text-sm font-semibold leading-snug text-primaryOrtho transition-colors group-hover:text-secondaryOrtho">
                              {post.title}
                            </h4>

                            <div className="mt-2 flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-secondaryOrtho" />
                              <p className="text-[11px] font-medium text-gray-500">{postDate}</p>
                            </div>
                          </div>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>

              {/* Explore More */}
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
            </motion.div>
          </aside>
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
                const postImage = extractSidebarImage(post.content);
                const postDate = new Date(post.published).toLocaleDateString("en-GB");

                return (
                  <li key={post.id}>
                    <Link
                      href={`/blog/${encodeURIComponent(post.id)}`}
                      className="flex gap-3 p-3 rounded-lg hover:bg-primaryOrtho/5 transition-all duration-300"
                    >
                      {postImage && (
                        <div className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-primaryOrtho/10 to-secondaryOrtho/10 shadow-sm ring-1 ring-primaryOrtho/10">
                          <Image
                            src={postImage}
                            alt={post.title}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
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
