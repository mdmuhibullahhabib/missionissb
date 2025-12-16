"use client";

import useSubscriptions from "@/hooks/useSubscriptions";
import { motion } from "framer-motion";
import { BookOpen, Brain, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "ISSB Full Preparation Course",
    desc: "Complete guideline + psychological tests + interview + group tasks.",
    icon: <Brain className="w-12 h-12 text-green-700" />,
    link: "/courses/issb-full-prep",
  },
  {
    id: 2,
    title: "Psychological Test Mastery",
    desc: "Word association test, picture perception, story writing & more.",
    icon: <Lightbulb className="w-12 h-12 text-green-700" />,
    link: "/courses/psychology",
  },
  {
    id: 3,
    title: "ISSB IQ & Verbal/Non-verbal",
    desc: "Boost your IQ with curated model tests & real exam patterns.",
    icon: <Target className="w-12 h-12 text-green-700" />,
    link: "/courses/iq-course",
  },
  {
    id: 4,
    title: "Book Reading & Notes",
    desc: "Army, Navy, Air Force manuals + study materials + MCQ bank.",
    icon: <BookOpen className="w-12 h-12 text-green-700" />,
    link: "/courses/books",
  },
];

export default function Courses() {
    const { data, isLoading, error } = useSubscriptions();

    clg

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-900">
          Our Premium Courses
        </h2>
        <p className="text-gray-600 mt-2">
          Start your ISSB journey with structured guidance and expert-designed modules.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition group border border-green-100"
          >
            <div className="flex justify-center mb-4 group-hover:scale-110 transition">
              {course.icon}
            </div>

            <h3 className="text-xl font-semibold text-green-900 text-center">
              {course.title}
            </h3>

            <p className="text-gray-600 text-center mt-2 text-sm">
              {course.desc}
            </p>

            {/* Button */}
            <div className="mt-6 text-center">
              <Link
                href={course.link}
                className="inline-block bg-green-700 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-800 transition"
              >
                Start Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
