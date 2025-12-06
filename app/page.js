"use client"

import Archive from "@/components/home/Archive";
import CoursesSection from "@/components/home/CoursesSection";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CoursesSection/>
      <Archive/>
    </div>
    
  );
}
