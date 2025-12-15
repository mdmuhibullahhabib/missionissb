"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SubmitModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  /* -----------------------------
     Mock Question Data (42 Qs)
  ----------------------------- */
  const MOCK_QUESTIONS = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    status:
      (i + 1 >= 1 && i + 1 <= 7) ||
      (i + 1 >= 9 && i + 1 <= 13) ||
      (i + 1 >= 15 && i + 1 <= 22) ||
      (i + 1 >= 29 && i + 1 <= 30)
        ? "attempted"
        : "remaining",
  }));

  // Stats (You can make dynamic later)
  const attemptedCount = MOCK_QUESTIONS.filter(q => q.status === "attempted").length;
  const remainingCount = MOCK_QUESTIONS.filter(q => q.status === "remaining").length;
  const timeLeft = "28:45";

  // ✅ Map question status to Tailwind classes
  const getQuestionClass = (status) => {
    switch (status) {
      case "attempted":
        return "bg-green-700 text-white";
      case "remaining":
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  };

  return (
    // ✅ Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Click outside to close
    >
      {/* ✅ Modal Container */}
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent modal click closing
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Exam Summary</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {/* Stats */}
          <div className="mb-6 flex space-x-8 text-lg">
            <div className="flex flex-col">
              <span className="text-gray-500">Attempted</span>
              <span className="font-bold text-gray-800">{attemptedCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Remaining</span>
              <span className="font-bold text-gray-800">{remainingCount}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Time Left</span>
              <span className="font-bold text-green-600">{timeLeft}</span>
            </div>
          </div>

          {/* Question Grid */}
          <div className="grid grid-cols-7 gap-3">
            {MOCK_QUESTIONS.map((q) => (
              <div
                key={q.id}
                className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-colors ${getQuestionClass(q.status)}`}
              >
                {q.id}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onSubmit}
            className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-lg transition-colors"
          >
            End Exam & See Result
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
