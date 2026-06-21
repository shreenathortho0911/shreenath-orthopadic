"use client";

import Preloader from "@/components/common/PreLoader";
import { useEffect, useState } from "react";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("site-loaded");

    if (hasLoaded) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 0);

      return () => clearTimeout(timer);
    }

    sessionStorage.setItem("site-loaded", "true");

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return <>{children}</>;
}
