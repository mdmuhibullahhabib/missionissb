"use client"

import IssbProcess from "@/components/home/IssbProcess";
import CoursesSection from "@/components/home/CoursesSection";
import Hero from "@/components/home/Hero";
import Banner from "@/components/home/Banner";

export default function Home() {
  return (
    <div>
      <Banner/>
      <IssbProcess/>
      <Hero/>
      <CoursesSection/>
    </div>
    
  );
}
