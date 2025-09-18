import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Upgrade from "@/components/Home/upgrade";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Software Solutions by Vivora - Leading Tech Company in Sri Lanka",
  description: "Premier software development company from University of Moratuwa, Sri Lanka. Specializing in custom software solutions, web development, and digital transformation.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Platform />
      <TimeLine />
      <Portfolio />
      <Work />
      <Upgrade />
      <Perks />
    </main>
  );
}
