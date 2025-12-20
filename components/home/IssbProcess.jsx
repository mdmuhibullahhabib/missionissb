"use client";

import { useState } from "react";
import {
  FileText,
  Brain,
  Image as ImageIcon,
  Pen,
  MessageSquare,
  Activity,
  ClipboardList,
  Users,
  Target,
  Mic,
  HeartPulse,
  IdCard,
  ShieldCheck,
  Stethoscope,
  Briefcase,
} from "lucide-react";

const data = [
  {
    day: "Reporting",
    items: [
      {
        title: "Reporting (4:00 – 5:00 PM)",
        desc: "Candidates must report to the ISSB center within the scheduled time.",
        icon: ClipboardList,
      },
    ],
  },
  {
    day: "First Day",
    items: [
      { title: "Before ISSB", desc: "Initial briefing and instructions", icon: ClipboardList },
      { title: "Intelligence Test", desc: "Verbal & non-verbal intelligence test", icon: Brain },
      { title: "PPDT", desc: "Picture Perception & Discussion Test", icon: ImageIcon },
      { title: "Essay Writing", desc: "Written expression assessment", icon: Pen },
      { title: "Incomplete Story", desc: "Story completion test", icon: FileText },
      { title: "Picture Story", desc: "Story writing from picture", icon: ImageIcon },
      { title: "Incomplete Sentences", desc: "Psychological sentence test", icon: FileText },
      { title: "Word Association Test (WAT)", desc: "Word-based psychology test", icon: MessageSquare },
      { title: "Self Criticism", desc: "Self evaluation", icon: Users },
      { title: "Self Assessment", desc: "Personal assessment session", icon: ClipboardList },
    ],
  },
  {
    day: "Second Day",
    items: [
      { title: "Group Discussion", desc: "Communication & leadership evaluation", icon: Users },
      { title: "Progressive Group Task (PGT)", desc: "Group problem solving task", icon: Target },
      { title: "Half Group Task (HGT)", desc: "Small group coordination task", icon: Target },
      { title: "Extempore Speech", desc: "Instant speaking test", icon: Mic },
      { title: "Physical Ability Test (PAT)", desc: "Physical fitness test", icon: Activity },
      { title: "Bio Data", desc: "Personal background review", icon: IdCard },
      { title: "DP Viva", desc: "Deputy President interview", icon: ShieldCheck },
    ],
  },
  {
    day: "Third Day",
    items: [
      { title: "Planning Exercise", desc: "Planning and strategy test", icon: Target },
      { title: "GTO Viva", desc: "Group Testing Officer interview", icon: ShieldCheck },
      { title: "Command Task (CT)", desc: "Leadership task", icon: Briefcase },
      { title: "Mutual Assessment", desc: "Peer evaluation", icon: Users },
      { title: "Medical Test", desc: "Medical fitness examination", icon: Stethoscope },
    ],
  },
  {
    day: "Result",
    items: [
      {
        title: "Final Result",
        desc: "ISSB final result announcement and selection status.",
        icon: ClipboardList,
      },
    ],
  },
];


export default function IssbProcess() {
  const [active, setActive] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-green-900 mb-10">
        আইএসএসবি প্রস্তুতি
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((dayBlock, i) => (
          <div key={i} className="border rounded-xl bg-white shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-900 to-green-700 text-white text-center py-3 rounded-t-xl font-semibold">
              {dayBlock.day}
            </div>

            {/* Items */}
            <div className="p-4 space-y-2">
              {dayBlock.items.map((item, idx) => {
                const Icon = item.icon;
                const isActive = active === `${i}-${idx}`;

                return (
                  <div key={idx}>
                    <button
                      onClick={() =>
                        setActive(isActive ? null : `${i}-${idx}`)
                      }
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg
                                 bg-gray-50 hover:bg-green-50 transition text-left"
                    >
                      <Icon className="w-4 h-4 text-green-700 shrink-0" />
                      <span className="text-sm font-medium text-gray-800">
                        {item.title}
                      </span>
                    </button>

                    {/* Expandable Content */}
                    {isActive && (
                      <div className="ml-7 mt-2 mb-2 text-sm text-gray-600">
                        {item.desc}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
