"use client";

import Hero from "@/components/Hero";
import ImageSections from "@/components/ImageSections";
import FAQ from "@/components/FAQ";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<null | HTMLDivElement>(null);

  return (
    <div>
      <Hero exampleRef={ref} />
      <ImageSections exampleRef={ref} />
      <FAQ />
    </div>
  );
}
