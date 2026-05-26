/**
 * SEO Configuration for Shreenath Orthopedic Hospital
 * Ahmedabad, Maninagar
 */

export const SITE_CONFIG = {
  name: "Shreenath Orthopedic Hospital",
  description:
    "Leading orthopedic hospital in Ahmedabad & Maninagar offering advanced treatments, rehabilitation services, and experienced orthopedic care.",
  url: "https://shreenathorthopedic.com",
  email: "info@shreenathorthopedic.com",
  phone: "+91-XXXXXXXXXX",
  locations: [
    {
      city: "Ahmedabad",
      area: "Maninagar",
      country: "India",
    },
  ],
  socials: {
    facebook: "https://facebook.com/shreenathorthopedic",
    instagram: "https://instagram.com/shreenathorthopedic",
    youtube: "https://youtube.com/@shreenathorthopedic",
  },
};

// Main Keywords for the Hospital
export const HOSPITAL_KEYWORDS = [
  // Brand Keywords
  "Shreenath Orthopedic Hospital",
  "Shreenath Orthopedic",

  // Location Keywords
  "Orthopedic Hospital Ahmedabad",
  "Orthopedic Hospital Maninagar",
  "Best Orthopedic Hospital in Ahmedabad",
  "Best Orthopedic Hospital in Maninagar",
  "Orthopedic Clinic Ahmedabad",
  "Orthopedic Doctor Ahmedabad",

  // Treatment Keywords
  "Joint Surgery Ahmedabad",
  "Knee Replacement Ahmedabad",
  "Hip Replacement Ahmedabad",
  "Shoulder Surgery Ahmedabad",
  "Spine Surgery Ahmedabad",
  "ACL Reconstruction",
  "Orthopedic Treatment",
  "Bone Fracture Treatment",

  // Service Keywords
  "Rehabilitation Services Ahmedabad",
  "Physiotherapy Ahmedabad",
  "Sports Medicine Ahmedabad",
  "Trauma Center Ahmedabad",
  "Orthopedic Consultation",

  // General Keywords
  "Best Orthopedic Doctor",
  "Orthopedic Specialist",
  "Experienced Orthopedic Surgeon",
  "Advanced Orthopedic Care",
];

// Page-specific SEO Data
export const PAGE_SEO_DATA: Record<
  string,
  {
    title: string;
    description: string;
    keywords: string[];
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalPath: string;
  }
> = {
  home: {
    title: "Shreenath Orthopedic Hospital - Best Orthopedic Care in Ahmedabad, Maninagar",
    description:
      "Experience advanced orthopedic treatments at Shreenath Orthopedic Hospital in Ahmedabad. Expert surgeons, modern facilities, and comprehensive rehabilitation services.",
    keywords: [
      ...HOSPITAL_KEYWORDS,
      "Advanced Orthopedic Hospital",
      "24/7 Orthopedic Care",
      "Trusted Hospital Ahmedabad",
    ],
    ogTitle: "Shreenath Orthopedic Hospital - Expert Orthopedic Care in Ahmedabad",
    ogDescription:
      "Leading orthopedic hospital offering joint replacement, spine surgery, and rehabilitation in Ahmedabad & Maninagar.",
    canonicalPath: "/",
  },

  about: {
    title: "About Shreenath Orthopedic Hospital - Mission, Vision & Our Specialists",
    description:
      "Learn about Shreenath Orthopedic Hospital's mission, team of expert orthopedic surgeons, and commitment to exceptional patient care in Ahmedabad.",
    keywords: [
      "Orthopedic Hospital About",
      "Expert Orthopedic Surgeons",
      "Hospital Mission Vision",
      "Specialized Orthopedic Team",
      "Professional Orthopedic Care",
    ],
    ogTitle: "About Shreenath Orthopedic Hospital - Dedicated to Your Recovery",
    ogDescription:
      "Meet our team of experienced orthopedic specialists dedicated to your health and recovery.",
    canonicalPath: "/about",
  },

  treatments: {
    title: "Orthopedic Treatments & Services - Shreenath Orthopedic Hospital Ahmedabad",
    description:
      "Comprehensive orthopedic treatments including joint replacement, spine surgery, ACL reconstruction, and trauma care in Ahmedabad.",
    keywords: [
      ...HOSPITAL_KEYWORDS,
      "Joint Replacement",
      "Spine Surgery",
      "ACL Reconstruction",
      "Orthopedic Procedures",
      "Advanced Surgical Treatments",
      "Trauma Care",
    ],
    ogTitle: "Orthopedic Treatments - Joint, Spine & Trauma Surgery Services",
    ogDescription:
      "Explore our range of orthopedic treatments including joint replacement, spine surgery, and advanced orthopedic procedures.",
    canonicalPath: "/treatments",
  },

  facilities: {
    title: "Hospital Facilities - Shreenath Orthopedic Hospital Ahmedabad",
    description:
      "State-of-the-art facilities at Shreenath Orthopedic Hospital including advanced surgical equipment, imaging, and patient care amenities.",
    keywords: [
      "Hospital Facilities",
      "Advanced Medical Equipment",
      "Modern Surgical Theater",
      "Patient Amenities",
      "Hospital Infrastructure",
      "Diagnostic Facilities",
    ],
    ogTitle: "Modern Facilities - Advanced Orthopedic Hospital Equipment",
    ogDescription:
      "Discover our state-of-the-art facilities designed for optimal orthopedic care and patient comfort.",
    canonicalPath: "/facilities",
  },

  rehabilitation: {
    title: "Rehabilitation & Recovery Services - Shreenath Orthopedic Hospital",
    description:
      "Comprehensive rehabilitation and recovery programs for post-operative care, physiotherapy, and pain management in Ahmedabad.",
    keywords: [
      "Rehabilitation Services",
      "Physiotherapy Ahmedabad",
      "Post-operative Recovery",
      "Pain Management",
      "Physical Therapy",
      "Recovery Programs",
      "Rehabilitation Center",
    ],
    ogTitle: "Rehabilitation & Recovery Programs - Expert Physiotherapy Services",
    ogDescription:
      "Professional rehabilitation and recovery services to help you return to normal life after orthopedic treatment.",
    canonicalPath: "/rehabilitation",
  },

  contact: {
    title: "Contact Shreenath Orthopedic Hospital - Ahmedabad, Maninagar",
    description:
      "Contact us at Shreenath Orthopedic Hospital in Ahmedabad, Maninagar. Book appointments, get directions, and reach our orthopedic specialists.",
    keywords: [
      "Contact Orthopedic Hospital",
      "Hospital Phone Number",
      "Hospital Address Ahmedabad",
      "Book Appointment",
      "Contact Orthopedic Doctor",
    ],
    ogTitle: "Contact Us - Shreenath Orthopedic Hospital Ahmedabad",
    ogDescription:
      "Get in touch with Shreenath Orthopedic Hospital to book your consultation or learn more about our services.",
    canonicalPath: "/contact",
  },

  testimonials: {
    title: "Patient Testimonials & Success Stories - Shreenath Orthopedic Hospital",
    description:
      "Read inspiring patient testimonials and success stories of orthopedic treatments and recovery at Shreenath Orthopedic Hospital.",
    keywords: [
      "Patient Testimonials",
      "Success Stories",
      "Patient Reviews",
      "Recovery Stories",
      "Hospital Reviews Ahmedabad",
    ],
    ogTitle: "Patient Success Stories - Real Recovery Experiences",
    ogDescription:
      "Discover inspiring stories from patients who have successfully recovered at Shreenath Orthopedic Hospital.",
    canonicalPath: "/testimonials",
  },

  blog: {
    title: "Orthopedic Blog & Health Tips - Shreenath Orthopedic Hospital Ahmedabad",
    description:
      "Expert orthopedic insights, health tips, treatment guides, and wellness articles from Shreenath Orthopedic Hospital.",
    keywords: [
      "Orthopedic Blog",
      "Health Tips",
      "Treatment Guide",
      "Orthopedic Articles",
      "Wellness Blog",
      "Joint Health",
      "Recovery Tips",
    ],
    ogTitle: "Orthopedic Blog - Expert Health Tips & Treatment Guides",
    ogDescription:
      "Read expert articles and tips about orthopedic health, treatments, and recovery.",
    canonicalPath: "/blog",
  },
};

// Local Business Schema for Google
export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  image: "/og-image.jpg",
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Hospital Street Address",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "380023",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Ahmedabad",
    },
    {
      "@type": "City",
      name: "Gandhinagar",
    },
  ],
  medicalSpecialty: [
    "Orthopedic Surgery",
    "Orthopedic Medicine",
    "Physical Medicine and Rehabilitation",
  ],
  sameAs: [
    SITE_CONFIG.socials.facebook,
    SITE_CONFIG.socials.instagram,
    SITE_CONFIG.socials.youtube,
  ],
};

// Organization Schema
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: "/logo.png",
  description: SITE_CONFIG.description,
  foundingDate: "2010",
  sameAs: [
    SITE_CONFIG.socials.facebook,
    SITE_CONFIG.socials.instagram,
    SITE_CONFIG.socials.youtube,
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
  },
};
