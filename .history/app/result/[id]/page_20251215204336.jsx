"use client";

import { CheckCircle2, XCircle, SkipForward, Trophy, Target, Globe, Clock, EyeOff, RotateCcw, HelpCircle, Grid } from "lucide-react";
import { CheckCircle2, XCircle, SkipForward, Trophy, Target, Globe, Clock, EyeOff, RotateCcw, HelpCircle, Grid } from "lucide-react";

/* ---------------- Small Reusable Components ---------------- */

const PageHeader = () => (
  <div className="text-center space-y-1 mb-6">
    <h1 className="text-2xl font-semibold">Verbal Model Test 02</h1>
    <p className="text-sm text-muted-foreground">
      Total Questions- 100 | Marks- 100
    </p>
    <p className="text-sm text-muted-foreground">Duration- 35min</p>
  </div>
);

const ScoreRow = ({ icon: Icon, label, value, color = "text-green-600" }) => (
  <div className="flex items-center justify-center gap-2 text-sm">
    <Icon className={`w-4 h-4 ${color}`} />
    <span className="text-muted-foreground">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

const ScoreBoard = () => (
  <div className="max-w-xl mx-auto rounded-2xl border bg-white shadow-sm">
    <div className="py-6 space-y-3 text-center">
      <h2 className="text-lg font-semibold mb-3">Your Score Board</h2>

      <ScoreRow icon={CheckCircle2} label="Correct Answers" value="8" />
      <ScoreRow icon={XCircle} label="Wrong Answers" value="19" color="text-red-500" />
      <ScoreRow icon={SkipForward} label="Skipped Questions" value="73" color="text-yellow-500" />
      <ScoreRow icon={Trophy} label="Obtained Marks" value="8" />
      <ScoreRow icon={Target} label="Total Marks" value="100" />
      <ScoreRow icon={Globe} label="Total Question" value="100" />
      <ScoreRow icon={Clock} label="Total Time" value="7 min : 48 sec" />

      <div className="flex justify-end gap-2 pt-2">
        <butt

const ActionButtons = () => (
  <div className="flex justify-center gap-4 mt-8">
    <Button className="bg-emerald-900 hover:bg-emerald-800 gap-2 px-8 rounded-xl">
      <HelpCircle className="w-4 h-4" /> Post Doubt
    </Button>
    <Button className="bg-emerald-900 hover:bg-emerald-800 gap-2 px-8 rounded-xl">
      <RotateCcw className="w-4 h-4" /> Re-Exam
    </Button>
  </div>
);

/* ---------------- Main Page ---------------- */

export default function ResultPage() {
  return (
    <section className="min-h-screen bg-background px-4 py-10">
      <PageHeader />
      <ScoreBoard />
      <ActionButtons />
    </section>
  );
}
