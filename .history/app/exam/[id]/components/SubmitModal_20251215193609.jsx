"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

// --- Constants for stats ---
const ATTEMPTED_COUNT = 27;
const REMAINING_COUNT = 73;
const TIME_LEFT = "28:45";

// --- Mock question grid data (42 questions) ---
const MOCK_QUESTIONS = Array.from({ length: 42 }, (_, i) => {
    const id = i + 1;
    let status = "remaining";

    // Manually mark attempted questions based on visual pattern
    if (
        (id >= 1 && id <= 7) ||
        (id >= 9 && id <= 13) ||
        (id >= 15 && id <= 22) ||
        (id >= 29 && id <= 30) ||
        id === 8
    ) {
        status = "attempted";
    }

    return { id, status };
});

const SubmitModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    // Function to map question status to Tailwind classes
    const getQuestionClass = (status) => {
        switch (status) {
            case "attempted":
                return "bg-[#146C43] text-white"; // Dark green
            case "remaining":
            default:
                return "bg-white text-gray-700 border border-gray-300"; // Light gray
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-start pt-16 justify-center bg-white/30 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-800">Exam Summary</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 p-1"
                    >
                        <AiOutlineClose size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-5 flex space-x-5">
                    {/* Stats */}
                    <div className="mb-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Attempted</span>
                            <span className="font-semibold text-lg text-gray-900">
                                {ATTEMPTED_COUNT}
                            </span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">Remaining</span>
                            <span className="font-semibold text-lg text-gray-900">
                                {REMAINING_COUNT}
                            </span>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                            <span className="text-lg font-medium text-gray-700">Time Left</span>
                            <span className="font-bold text-2xl text-[#146C43]">{TIME_LEFT}</span>
                        </div>
                    </div>

                    {/* Question Grid */}
                    <div className="grid grid-cols-7 gap-x-2 gap-y-3">
                        {MOCK_QUESTIONS.map((q) => (
                            <div
                                key={q.id}
                                className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-semibold ${getQuestionClass(
                                    q.status
                                )}`}
                            >
                                {q.id}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 pt-0">
                    <button
                        onClick={onSubmit}
                        className="w-full py-3 bg-[#D93630] hover:bg-red-700 text-white font-medium rounded-md shadow-md transition-colors"
                    >
                        End Exam & See Result
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SubmitModal;
