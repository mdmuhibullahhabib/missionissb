"use client";

import {
  CheckCircle2,
  XCircle,
  SkipForward,
  Trophy,
  Target,
  Globe,
  Clock,
  EyeOff,
  RotateCcw,
  HelpCircle,
  Grid,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";


export default function ResultPage() {
  // -------- Fake Result Data (ISSB Demo) --------
  const resultData = {
    examName: "Verbal Model Test 02",
    totalQuestions: 100,
    totalMarks: 100,
    duration: "35min",
    correct: 8,
    wrong: 19,
    skipped: 73,
    obtainedMarks: 8,
    timeTaken: "7 min : 48 sec",
  };

    const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/exam-result/${id}`)
      .then(res => res.json())
      .then(data => setResult(data));
  }, [id]);

  if (!result) return <p>Loading...</p>;

  return (
    <section className="min-h-screen bg-white px-4 py-10">
      {/* -------- Header -------- */}
      <div className="text-center space-y-1 mb-6">
        <h1 className="text-2xl font-semibold">{resultData.examName}</h1>
        <p className="text-sm text-gray-500">
          Total Questions- {resultData.totalQuestions} | Marks- {resultData.totalMarks}
        </p>
        <p className="text-sm text-gray-500">Duration- {resultData.duration}</p>
      </div>

      {/* -------- Score Board -------- */}
      <div className="max-w-xl mx-auto rounded-2xl border shadow-sm">
        <div className="py-6 space-y-3 text-center">
          <h2 className="text-lg font-semibold mb-3">Your Score Board</h2>

          <div className="flex items-center justify-center gap-2 text-sm">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">Correct Answers:</span>
            <span className="font-medium">{resultData.correct}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <XCircle className="w-4 h-4 text-red-500" />
            <span className="text-gray-500">Wrong Answers:</span>
            <span className="font-medium">{resultData.wrong}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <SkipForward className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-500">Skipped Questions:</span>
            <span className="font-medium">{resultData.skipped}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Trophy className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">Obtained Marks:</span>
            <span className="font-medium">{resultData.obtainedMarks}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">Total Marks:</span>
            <span className="font-medium">{resultData.totalMarks}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">Total Question:</span>
            <span className="font-medium">{resultData.totalQuestions}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-green-600" />
            <span className="text-gray-500">Total Time:</span>
            <span className="font-medium">{resultData.timeTaken}</span>
          </div>

          {/* -------- Tools -------- */}
          <div className="flex justify-end gap-2 pt-2 pr-4">
            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-black">
              <EyeOff className="w-4 h-4" /> Hide Solve
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Grid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* -------- Actions -------- */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-2 rounded-xl">
          <HelpCircle className="w-4 h-4" /> Post Doubt
        </button>
        <button className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-2 rounded-xl">
          <RotateCcw className="w-4 h-4" /> Re-Exam
        </button>
      </div>
    </section>
  );
}
