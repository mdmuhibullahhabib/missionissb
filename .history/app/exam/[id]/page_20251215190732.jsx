"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";
import McqCard from "./components/McqCard";
import SubmitModal from "./components/SubmitModal";

/* Fake Questions */
const questions = [
  {
    question: "Find the odd one out",
    options: ["VUTS", "NUTS", "PONM", "JIHG", "None of these"],
  },
  {
    question: "Choose the correct series",
    options: ["2, 6, 12", "3, 9, 27", "5, 10, 20", "7, 14, 28"],
  },
  {
    question: "Which word is different?",
    options: ["Dog", "Cat", "Tiger", "Car"],
  },
];

const ExamPage = () => {
  const [answers, setAnswers] = useState({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(35 * 60); // ✅ 35 min in seconds

  /* ================= TIMER LOGIC ================= */
  useEffect(() => {
    if (timeLeft <= 0) {
      // ✅ Auto submit when time is over
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  /* ================= HELPER FUNCTIONS ================= */
  const handleSelect = (qIndex, optIdx) => {
    setAnswers({ ...answers, [qIndex]: optIdx });
  };

  const handleSubmit = () => {
    setShowSubmitModal(false);
    alert("Exam Submitted!");
    console.log("Submitted Answers:", answers);
  };

  /* ================= FORMAT TIME ================= */
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="min-h-screen bg-white pb-28">

      {/* Header */}
      <div className="text-center py-6">
        <h1 className="text-2xl font-bold">Verbal Model Test 01</h1>
        <p className="text-gray-600">
          Total Questions: {questions.length} | Duration: 35 min
        </p>
      </div>

      {/* Questions */}
      <div className="max-w-3xl space-y-4 mx-auto px-4">
        {questions.map((q, index) => (
          <McqCard
            key={index}
            index={index}
            question={q.question}
            options={q.options}
            selectedAnswer={answers[index]}
            onSelect={(optIdx) => handleSelect(index, optIdx)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 font-medium">
          <Clock size={18} />
          <span>{formatTime(timeLeft)}</span> {/* ✅ Show countdown */}
        </div>

        <button
          onClick={() => setShowSubmitModal(true)}
          className="bg-green-900 text-white px-6 py-2 rounded-full"
        >
          Submit Exam
        </button>
      </div>

      {/* Submit Modal */}
      <SubmitModal
        open={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default ExamPage;
