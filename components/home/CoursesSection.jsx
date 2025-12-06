import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "ISSB Full Course",
    description: "Complete guidance from start to finish for ISSB preparation.",
    image: "/courses/issb-full.jpg",
    link: "/courses/issb-full",
  },
  {
    id: 2,
    title: "IQ & Aptitude Practice",
    description: "Sharpen your IQ and Aptitude skills with daily practice sets.",
    image: "/courses/iq-practice.jpg",
    link: "/courses/iq-practice",
  },
  {
    id: 3,
    title: "Interview Preparation",
    description: "Learn to ace ISSB interviews with expert tips and mock sessions.",
    image: "/courses/interview.jpg",
    link: "/courses/interview-prep",
  },
  {
    id: 4,
    title: "Physical Fitness Course",
    description: "Prepare physically and mentally for ISSB tests.",
    image: "/courses/fitness.jpg",
    link: "/courses/physical-fitness",
  },
];

export default function CoursesSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 uppercase">
          Our Courses
        </h2>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Choose the right course to start your ISSB journey today.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-700 flex-1">{course.description}</p>
              <Link
                href={course.link}
                className="mt-4 inline-block bg-green-900 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-green-800 transition text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
