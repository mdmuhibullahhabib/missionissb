"use client";

import React, { useState } from "react";
import useSubscriptions from "@/hooks/useSubscriptions";

const McqCard = () => {
  const { subscriptions, isLoading } = useSubscriptions();

  const activeSubscription = subscriptions?.find(
    (sub) => sub.status === "active"
  );
  const isSubscribed = !!activeSubscription;

  /* ---------------- QUESTIONS ---------------- */
  const questions = [
    {
      title: "Find the next: 10, 30, 68, 130, ?, ?",
      options: ["150, 190", "222, 350", "165, 190", "225, 350"],
      correctIndex: 1,
    },
    {
      title: "Find the odd one out",
      options: ["VUTS", "NUTS", "PONM", "LKJI"],
      correctIndex: 1,
    },
    {
      title: "If A = 1, B = 2 ... Z = 26, what is the value of CAT?",
      options: ["24", "26", "27", "29"],
      correctIndex: 0,
    },
    {
      title: "Find the missing number: 5, 10, 20, 40, ?",
      options: ["45", "60", "80", "100"],
      correctIndex: 2,
    },
    {
      title: "Which word does not belong to the group?",
      options: ["Chair", "Table", "Bed", "Door"],
      correctIndex: 3,
    },
    {
      title: "Find the next number: 1, 4, 9, 16, ?",
      options: ["20", "25", "30", "36"],
      correctIndex: 1,
    },
    {
      title:
        "If 5 men can complete a work in 10 days, how many days will 10 men take?",
      options: ["2", "5", "10", "20"],
      correctIndex: 1,
    },
    {
      title: "Find the missing number: 3, 9, 27, ?, 243",
      options: ["54", "72", "81", "108"],
      correctIndex: 2,
    },
    {
      title: "Find the odd one out",
      options: ["Rose", "Lotus", "Lily", "Mango"],
      correctIndex: 3,
    },
    {
      title:
        "If today is Monday, what day will it be after 15 days?",
      options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      correctIndex: 2,
    },
  ];

  /* ---------------- STATE ---------------- */
  const [answers, setAnswers] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleSelect = (qIndex, optIndex) => {
    if (!isSubscribed) {
      setShowModal(true);
      return;
    }
    if (answers[qIndex] !== undefined) return;

    setAnswers((prev) => ({
      ...prev,
      [qIndex]: optIndex,
    }));
  };

  const getOptionStyle = (qIndex, optIndex, correctIndex) => {
    if (answers[qIndex] === undefined)
      return "bg-gray-50 hover:bg-gray-100";

    if (optIndex === correctIndex)
      return "bg-green-100 border-green-500 text-green-700";

    if (optIndex === answers[qIndex])
      return "bg-red-100 border-red-500 text-red-700";

    return "bg-gray-50";
  };

  if (isLoading) return <div className="p-4">Loading...</div>;

  /* ---------------- UI ---------------- */
  return (
    <>
      <div className="space-y-6">
        {questions.map((q, qIndex) => (
          <div
            key={qIndex}
            className="bg-white border p-6 rounded-xl shadow-sm relative"
          >
            {/* QUESTION */}
            <h3
              className={`font-semibold text-lg ${
                !isSubscribed
                  ? "blur-[2px] opacity-60 select-none"
                  : ""
              }`}
              onClick={() => !isSubscribed && setShowModal(true)}
            >
              {qIndex + 1}. {q.title}
            </h3>

            {/* OPTIONS */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt, i) => (
                <div
                  key={i}
                  onClick={() =>
                    handleSelect(qIndex, i)
                  }
                  className={`px-4 py-3 rounded-lg border cursor-pointer transition-all ${getOptionStyle(
                    qIndex,
                    i,
                    q.correctIndex
                  )}`}
                >
                  {String.fromCharCode(65 + i)}. {opt}
                </div>
              ))}
            </div>

            {/* LOCK BADGE */}
            {!isSubscribed && (
              <div className="absolute top-3 right-3 text-xs bg-red-600 text-white px-3 py-1 rounded-full">
                🔒 Locked
              </div>
            )}
          </div>
        ))}
      </div>

      {/* SUBSCRIPTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-80 p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold text-center mb-2">
              Get Full Access
            </h2>
            <p className="text-gray-600 text-center text-sm">
              Unlock all questions by buying subscription.
            </p>

            <button className="w-full mt-5 bg-green-600 text-white py-2 rounded-lg">
              Buy Subscription
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-3 border py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default McqCard;
