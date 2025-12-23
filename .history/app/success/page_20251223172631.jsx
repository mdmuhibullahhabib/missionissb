"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center mt[-] bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full text-center animate-fadeIn">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-green-700 mb-4">পেমেন্ট সফল!</h1>
        <p className="text-gray-700 mb-6">
          আপনার সাবস্ক্রিপশন সফলভাবে সক্রিয় হয়েছে। 
          এখন আপনি সমস্ত কোর্স এবং মডেল টেস্ট ব্যবহার করতে পারবেন।
        </p>

        <Link
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          হোমপেজে ফিরে যান
        </Link>

        <div className="mt-6 text-gray-500 text-sm">
          যদি কোন সমস্যা থাকে, আমাদের <Link href="/contact" className="underline text-green-600">সাপোর্ট</Link> সাথে যোগাযোগ করুন।
        </div>
      </div>
    </div>
  );
}
