import { generatePageMetadata } from "@/lib/metadata-generator";
import type { Metadata } from "next";
import { RehabilitationContent } from "./rehabilitation-content";

export const metadata: Metadata = generatePageMetadata({
  page: "rehabilitation",
});

export default function RehabilitationPage() {
  return <RehabilitationContent />;
}
