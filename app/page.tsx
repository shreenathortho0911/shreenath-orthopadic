import { generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";
import { HomePageContent } from "./home-content";

export const metadata: Metadata = generatePageMetadata({
  page: "home",
});

export default function HomePage() {
  return <HomePageContent />;
}
