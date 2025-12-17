"use client";

import Image from "next/image";
import { CheckCircle, PlayCircle } from "lucide-react";
import GAQDivision from "./components/GAQDivision";

export default function CourseDetails() {
  /* ================= COURSE DATA ================= */
  const course = {
    title: "ISSB: The Ultimate Mind Hacks 6 Months Subscription",

    description:
      "৬ মাসের অধিক সময় ধরে ISSB ক্যাডেটদের জন্য নিয়মিত ক্লাস, মক টেস্ট এবং সাইকোলজিক্যাল গাইডলাইনের মাধ্যমে সম্পূর্ণ প্রস্তুতি নিশ্চিত করা হবে।",

    features: [
      "প্রফেশনাল গাইডলাইন",
      "ফুল টেস্ট",
      "মেন্টাল প্রিপারেশন গাইড",
      "সাইকোলজিক্যাল ডেভেলপমেন্ট",
      "ম্যারাথন ক্লাস",
      "মেন্টর সাপোর্ট",
    ],

    details: [
      "IQ Practice",
      "PPDT",
      "Picture Story",
      "Incomplete Story",
      "Incomplete Sentences",
      "Word Association Test",
      "Group Discussion",
      "Extempore Speech",
      "Essay Writing",
      "Self Criticism",
      "Biodata Analysis",
    ],

    audience: [
      "যারা আইএসএসবিতে অংশগ্রহণ করবে।",
      "যারা কথা বলতে গেলে নার্ভাস হয়ে যায়।",
      "যারা ঢাকার বাইরে থেকে প্রস্তুতি নিতে চায়।",
      "যাদের অফলাইন কোচিং এ থাকা-খাওয়ার সমস্যা রয়েছে।",
    ],

    mentorInfo:
      "অভিজ্ঞ এক্স অফিস্যার ক্যাডেট ও গ্রিনকার্ড হোল্ডারদের মাধ্যমে আইএসএসবি গাইডলাইন প্রদান করা হয়।",

    price: {
      current: 1500,
      old: 2500,
    },

    includes: [
      "লাইভ সেশন",
      "প্রতিটি টপিক টেস্ট",
      "সাইকোলজিক্যাল গাইডলাইন",
      "২৪/৭ মেন্টর সাপোর্ট",
    ],

    image: "/course-preview.jpg",
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* ================= Left Content ================= */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">{course.title}</h1>

        <p className="text-gray-600 leading-relaxed">
          {course.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
          {course.features.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Course Details */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">
            কোর্সের বিস্তারিত বিবরণ
          </h2>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
            {course.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Audience */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">
            এই সাবস্ক্রিপশনটি যাদের জন্য
          </h2>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
            {course.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Mentor */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold text-lg mb-3">
            মেন্টরদের সম্পর্কে
          </h2>
          <p className="text-sm text-gray-700">
            {course.mentorInfo}
          </p>
        </div>

        <GAQDivision />
      </div>

      {/* ================= Right Sidebar ================= */}
      <div className="border rounded-2xl shadow-sm p-4 space-y-4 h-fit">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={course.image}
            alt="Course Preview"
            width={400}
            height={220}
            className="w-full object-cover"
          />
          <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white" />
        </div>

        <h3 className="font-semibold text-sm">{course.title}</h3>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">
            ৳{course.price.current}
          </span>
          <span className="line-through text-gray-400">
            ৳{course.price.old}
          </span>
        </div>

        <div className="grid grid-cols-4 text-center text-sm">
          {["দিন", "ঘন্টা", "মিনিট", "সেকেন্ড"].map((t) => (
            <div key={t}>
              <p className="font-bold text-green-700">00</p>
              <p className="text-gray-500">{t}</p>
            </div>
          ))}
        </div>

        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl font-semibold">
          সাবস্ক্রিপশন কিনুন
        </button>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2 text-sm">
            This course includes:
          </h4>
          <ul className="space-y-1 text-sm text-gray-700">
            {course.includes.map((item) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
