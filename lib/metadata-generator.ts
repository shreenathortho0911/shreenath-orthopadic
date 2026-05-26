/**
 * SEO Metadata Generator
 * Reusable utility to generate optimized metadata for each page
 */

import { Metadata } from "next";
import { PAGE_SEO_DATA, SITE_CONFIG } from "./seo-config";

type PageKey = keyof typeof PAGE_SEO_DATA;

interface GenerateMetadataParams {
  page: PageKey;
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
  customCanonical?: string;
}

/**
 * Generate SEO metadata for a page
 */
export function generatePageMetadata(params: GenerateMetadataParams): Metadata {
  const pageData = PAGE_SEO_DATA[params.page];

  if (!pageData) {
    console.warn(`No SEO data found for page: ${params.page}`);
  }

  const title = params.title || pageData?.title || SITE_CONFIG.name;
  const description = params.description || pageData?.description || SITE_CONFIG.description;
  const keywords = params.keywords || pageData?.keywords || [];
  const canonicalUrl =
    params.customCanonical || `${SITE_CONFIG.url}${pageData?.canonicalPath || "/"}`;
  const ogImage = params.ogImage || "/og-image.jpg";

  return {
    title,
    description,
    keywords,
    openGraph: {
      title: pageData?.ogTitle || title,
      description: pageData?.ogDescription || description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
    robots: {
      index: !params.noindex,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE", // TODO: Add your Google Search Console verification code
    },
  };
}

/**
 * Generate structured data (JSON-LD) for a page
 */
export function generateStructuredData(schema: Record<string, unknown>): string {
  return JSON.stringify(schema);
}

/**
 * Get SEO-optimized meta tags as JSON
 */
export function getSEOData(page: PageKey) {
  return PAGE_SEO_DATA[page];
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: `${SITE_CONFIG.url}${breadcrumb.url}`,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article/BlogPost schema
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Organization",
      name: article.author,
    },
  };
}

/**
 * Generate Doctor/Medical Professional schema
 */
export function generateDoctorSchema(doctor: {
  name: string;
  specialization: string;
  image?: string;
  qualifications?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: doctor.name,
    jobTitle: doctor.specialization,
    image: doctor.image,
    qualifications: doctor.qualifications,
  };
}

/**
 * Generate AggregateRating schema (for testimonials/reviews)
 */
export function generateRatingSchema(rating: {
  ratingValue: number;
  bestRating?: number;
  worstRating?: number;
  ratingCount: number;
  reviewCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: rating.ratingValue,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1,
    ratingCount: rating.ratingCount,
    reviewCount: rating.reviewCount || rating.ratingCount,
  };
}
