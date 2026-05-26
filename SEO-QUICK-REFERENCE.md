# SEO Quick Reference Guide

## 🚀 Quick Start: Adding SEO to a New Page

### Step 1: Define SEO Data (if needed)

Add to `lib/seo-config.ts` in `PAGE_SEO_DATA`:

```typescript
yourPage: {
  title: "Your Page Title - Shreenath Orthopedic Hospital Ahmedabad",
  description: "Your page description with target keywords.",
  keywords: ["keyword1", "keyword2", "Ahmedabad", "Maninagar"],
  ogTitle: "Your Page Title",
  ogDescription: "Your OG description",
  canonicalPath: "/your-page",
},
```

### Step 2: Import and Use in Page

```typescript
import { generatePageMetadata, generateBreadcrumbSchema } from "@/lib/metadata-generator";
import { StructuredData } from "@/components/seo/StructuredData";
import type { Metadata } from "next";

// Add metadata export
export const metadata: Metadata = generatePageMetadata({
  page: "yourPage", // Key from PAGE_SEO_DATA
});

// Add breadcrumb schema
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Your Page", url: "/your-page" },
]);

export default function YourPage() {
  return (
    <div>
      <StructuredData schema={breadcrumbSchema} />
      {/* Page content */}
    </div>
  );
}
```

---

## 📝 Common SEO Tasks

### Adding FAQ Section

```typescript
import { generateFAQSchema } from "@/lib/metadata-generator";

const faqSchema = generateFAQSchema([
  {
    question: "What is orthopedic surgery?",
    answer: "Orthopedic surgery is a medical specialty..."
  },
  {
    question: "How long is recovery?",
    answer: "Recovery time varies depending..."
  },
]);

// Use in page:
<StructuredData schema={faqSchema} />
```

### Adding Patient Reviews/Ratings

```typescript
import { generateRatingSchema } from "@/lib/metadata-generator";

const ratingSchema = generateRatingSchema({
  ratingValue: 4.8,
  bestRating: 5,
  worstRating: 1,
  ratingCount: 250,
  reviewCount: 45,
});

<StructuredData schema={ratingSchema} />
```

### Adding Doctor/Specialist Profile

```typescript
import { generateDoctorSchema } from "@/lib/metadata-generator";

const doctorSchema = generateDoctorSchema({
  name: "Dr. John Doe",
  specialization: "Orthopedic Surgeon",
  image: "/doctors/john-doe.jpg",
  qualifications: ["MD", "Fellowship in Orthopedic Surgery"],
});

<StructuredData schema={doctorSchema} />
```

### Adding Blog Post Metadata

**Already implemented!** Blog posts automatically get:

- Dynamic title from blog data
- Dynamic description from blog excerpt
- Article schema with publish date
- Breadcrumb navigation

Just ensure your blog data includes: `title`, `excerpt`, `published`, `author`, `image`

---

## 🔑 Keyword Strategy

### Hospital Keywords (Always Use)

- "Shreenath Orthopedic Hospital"
- "Orthopedic Hospital Ahmedabad"
- "Orthopedic Hospital Maninagar"
- "Best Orthopedic Hospital"

### Treatment Keywords (Treatment Pages)

- "Joint Surgery Ahmedabad"
- "Knee Replacement"
- "Hip Replacement"
- "Spine Surgery"
- "ACL Reconstruction"

### Service Keywords (Service Pages)

- "Rehabilitation Services"
- "Physiotherapy"
- "Sports Medicine"
- "Trauma Care"

### Location Keywords (All Pages)

- Include "Ahmedabad" or "Maninagar" when relevant
- Add "Gujarat" for broader reach

---

## ✅ SEO Checklist for New Pages

- [ ] Add page to `PAGE_SEO_DATA` in `seo-config.ts`
- [ ] Import `generatePageMetadata` and add metadata export
- [ ] Add breadcrumb schema
- [ ] Use semantic HTML (H1, H2, H3)
- [ ] Add alt text to images
- [ ] Include internal links to related pages
- [ ] Write descriptive page title (50-60 characters)
- [ ] Write compelling meta description (155-160 characters)
- [ ] Add structured data if applicable (FAQ, Rating, Article, etc.)
- [ ] Test in Google Mobile-Friendly Test
- [ ] Verify in Lighthouse SEO score

---

## 🔍 Testing Your SEO

### Check Meta Tags

In browser DevTools (F12):

1. Go to Network tab
2. Load page
3. Click on document
4. Check Response HTML for:
   - `<title>` tag
   - `<meta name="description">`
   - `<meta property="og:title">`
   - `<link rel="canonical">`

### Validate Structured Data

1. Go to [schema.org validator](https://validator.schema.org/)
2. Paste page URL or HTML
3. Check for errors/warnings

### Mobile Testing

1. Go to [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
2. Enter your page URL
3. Verify it's mobile-friendly

### Performance Check

1. Run Lighthouse in Chrome DevTools
2. Check SEO score (should be 90+)

---

## 📊 Monitoring SEO Performance

### Essential Tools:

1. **Google Search Console** - Monitor search appearance
2. **Google Analytics 4** - Track organic traffic
3. **Lighthouse** - Performance/SEO audits

### Key Metrics to Monitor:

- Impressions in Google Search
- Click-through rate (CTR)
- Average position in search results
- Organic traffic volume
- Top performing pages
- Bounce rate on organic traffic

---

## 🛠️ Common Issues & Solutions

### Issue: Page not appearing in Google search

**Solution:**

1. Submit sitemap to Google Search Console
2. Request indexing in Search Console
3. Wait 2-4 weeks for crawling
4. Ensure robots.txt allows indexing

### Issue: Wrong title/description showing

**Solution:**

1. Verify metadata export is correct
2. Check `generatePageMetadata()` call
3. Clear browser cache
4. Check if robots.txt blocks page

### Issue: Structured data validation errors

**Solution:**

1. Check schema.org documentation
2. Verify schema structure matches format
3. Use validator tool to identify issues
4. Ensure all required fields are present

### Issue: Low CTR (Click-Through Rate)

**Solution:**

1. Rewrite meta descriptions to be more compelling
2. Add numbers or emojis where appropriate (test)
3. Ensure title includes target keyword
4. Make description match search intent

---

## 📚 File Reference

**Core SEO Files:**

- `lib/seo-config.ts` - Configuration and keywords
- `lib/metadata-generator.ts` - Utility functions
- `components/seo/StructuredData.tsx` - Schema component
- `app/robots.ts` - Crawler rules
- `app/sitemap.ts` - XML sitemap
- `app/layout.tsx` - Root metadata

**Documentation:**

- `SEO-IMPLEMENTATION-GUIDE.md` - Complete guide

---

## 🎯 Best Practices

1. **Keep It Natural** - Don't keyword stuff, write for users
2. **One H1 Per Page** - Main heading should be unique
3. **Internal Links** - Link to related pages
4. **Fresh Content** - Regularly update blog
5. **Mobile First** - Design for mobile users
6. **Load Speed** - Optimize images and code
7. **Unique Content** - Avoid duplicate content
8. **Call to Action** - Make it easy to contact
9. **Local Keywords** - Use Ahmedabad/Maninagar/Gujarat
10. **User Focus** - SEO follows good UX

---

## 💡 Pro Tips

- Add FAQ schema to FAQ sections
- Include patient testimonials with rating schema
- Create internal link clusters (related content)
- Use descriptive anchor text for internal links
- Add breadcrumb navigation to all pages
- Update blog regularly (2-4x per month minimum)
- Create content for featured snippets (definitions, lists, tables)
- Monitor keyword rankings monthly
- Optimize for voice search (conversational keywords)
- Ensure HTTPS on all pages (already done in Next.js)
