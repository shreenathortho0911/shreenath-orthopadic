/**
 * Reusable SEO Component for Structured Data (JSON-LD)
 * Add this component to pages that need structured data
 */

interface StructuredDataProps {
  schema: Record<string, any>;
}

/**
 * Component to render JSON-LD structured data
 * Usage:
 * <StructuredData schema={LOCAL_BUSINESS_SCHEMA} />
 */
export function StructuredData({ schema }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  twitterHandle?: string;
  canonicalUrl?: string;
}

/**
 * Deprecated: Use generatePageMetadata from metadata-generator.ts instead
 * This is kept for reference only
 */
export function SEOHead(props: SEOHeadProps) {
  // Note: In Next.js with App Router, use generateMetadata export
  // This component is only for reference
  return null;
}

/**
 * Reusable component to render meta description
 */
export function MetaDescription({ content }: { content: string }) {
  return <meta name="description" content={content} />;
}

/**
 * Reusable component to render canonical link
 */
export function CanonicalLink({ href }: { href: string }) {
  return <link rel="canonical" href={href} />;
}
