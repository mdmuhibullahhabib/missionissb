"use client";

import Image from "next/image";
import { CheckCircle, PlayCircle } from "lucide-react";
import LectureDetailsAccordion from "./components/GAQDivision";
import { useParams } from "next/navigation";
import useCourses from "@/hooks/useCourses";


export default function CourseDetails() {
  /* ================= SINGLE COURSE DATA ================= */
  const courseData = {
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

    lectures: [
      { title: "Before ISSB", desc: "ISSB শুরুর আগের প্রস্তুতি" },
      { title: "Intelligence Test", desc: "IQ ও Mental ability test" },
      { title: "PPDT", desc: "Picture perception & discussion" },
      { title: "Essay Writing", desc: "Essay writing strategy" },
      { title: "Group Discussion", desc: "GD rules & practice" },
      { title: "Extempore Speech", desc: "Instant speech technique" },
      { title: "Physical Ability Test", desc: "Physical readiness" },
      { title: "Medical Test", desc: "Medical preparation guide" },
    ],

    faqs: [
      {
        question: "কোর্স কিভাবে করবেন?",
        answer:
          "এই কোর্সটি ধাপে ধাপে ISSB প্রস্তুতির জন্য সাজানো হয়েছে।",
      },
      {
        question: "এই কোর্স কারা করবে?",
        answer:
          "যারা ISSB তে অংশগ্রহণ করতে চায় এবং পূর্ণাঙ্গ গাইডলাইন চায়।",
      },
    ],

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

    const { courses, isLoading, isError, error } = useCourses();
  
    console.log("HOOK COURSES 👉", courses);
  const params = useParams();
  console.log(params)

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* ================= LEFT ================= */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          {courseData.title}
        </h1>

        <p className="text-gray-600 leading-relaxed">
          {courseData.description}
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl">
          {courseData.features.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* DETAILS */}
        <Section title="কোর্সের বিস্তারিত বিবরণ">
          {courseData.details.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Section>

        {/* AUDIENCE */}
        <Section title="এই সাবস্ক্রিপশনটি যাদের জন্য">
          {courseData.audience.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </Section>

        {/* MENTOR */}
        <div className="border rounded-xl p-5">
          <h2 className="font-semibold mb-2">মেন্টরদের সম্পর্কে</h2>
          <p className="text-sm text-gray-700">
            {courseData.mentorInfo}
          </p>
        </div>

        {/* LECTURE + FAQ */}
        <LectureDetailsAccordion
          lectures={courseData.lectures}
          faqs={courseData.faqs}
        />
      </div>

      {/* ================= RIGHT ================= */}
      <div className="border rounded-2xl p-4 space-y-4 h-fit sticky top-20">
        <div className="relative rounded-xl overflow-hidden">
          <Image
            src={courseData.image}
            alt="Course Preview"
            width={400}
            height={220}
            className="w-full object-cover"
          />
          <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">
            ৳{courseData.price.current}
          </span>
          <span className="line-through text-gray-400">
            ৳{courseData.price.old}
          </span>
        </div>

        <button className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-xl">
          সাবস্ক্রিপশন কিনুন
        </button>

        <div className="border-t pt-3">
          <h4 className="font-semibold text-sm mb-2">
            This course includes:
          </h4>
          <ul className="text-sm space-y-1">
            {courseData.includes.map((item) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Section ---------- */
function Section({ title, children }) {
  return (
    <div className="border rounded-xl p-5">
      <h2 className="font-semibold mb-3">{title}</h2>
      <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700">
        {children}
      </ul>
    </div>
  );
}
