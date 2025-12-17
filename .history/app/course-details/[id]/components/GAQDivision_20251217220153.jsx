"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function LectureDetailsAccordion({ lectures = [], faqs = [] }) {
  const [openLecture, setOpenLecture] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleLectures = showAll ? lectures : lectures.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* LECTURES */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold mb-3">লেকচার ডিটেইলস</h2>

        {visibleLectures.map((lec, index) => (
          <div key={index} className="border rounded-md mb-2">
            <button
              onClick={() =>
                setOpenLecture(openLecture === index ? null : index)
              }
              className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium"
            >
              {lec.title}
              <ChevronDown
                className={`w-4 h-4 transition ${
                  openLecture === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openLecture === index && (
              <div className="px-3 pb-3 text-xs text-gray-500">
                {lec.desc}
              </div>
            )}
          </div>
        ))}

        {!showAll && lectures.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="text-xs border px-3 py-1 rounded"
          >
            Show More ({lectures.length - 4})
          </button>
        )}
      </div>

      {/* FAQ */}
      <div className="bg-white border rounded-lg p-4">
        <h2 className="font-bold mb-3">সাধারণ জিজ্ঞাসা</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md mb-2">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full flex justify-between items-center px-3 py-2 text-sm font-medium"
            >
              {faq.question}
              <ChevronDown
                className={`w-4 h-4 transition ${
                  openFaq === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openFaq === index && (
              <div className="px-3 pb-3 text-xs text-gray-500">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
