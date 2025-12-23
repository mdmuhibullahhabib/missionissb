"use client";

import React from "react";
import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center animate-fadeIn">
        <XCircle className="w-20 h-20 text-red-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-red-600 mb-4">পেমেন্ট বাতিল হয়েছে!</h1>
        <p className="text-gray-700 mb-6">
          আপনার পেমেন্ট প্রক্রিয়া সম্পন্ন হয়নি। আপনি চাইলে আবার চেষ্টা করতে পারেন।
        </p>

        <Link
          href="/course-details"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          পুনরায় চেষ্টা করুন
        </Link>

        <div className="mt-6 text-gray-500 text-sm">
          যদি কোন সমস্যা থাকে, আমাদের <Link href="/contact" className="underline text-red-600">সাপোর্ট</Link> সাথে যোগাযোগ করুন।
        </div>
      </div>
    </div>
  );
}
