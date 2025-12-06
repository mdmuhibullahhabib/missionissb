"use client"

import Archive from "@/components/home/Archive";
import CoursesSection from "@/components/home/CoursesSection";
import Hero from "@/components/home/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <h1 className="text-red-500">this is home</h1>
      <CoursesSection/>
      <Archive/>
      <Footer/>
    </div>

  );
}
