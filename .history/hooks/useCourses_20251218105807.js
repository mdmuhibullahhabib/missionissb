"use client";

import { useQuery } from "@tanstack/react-query";

export default function useCourses() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("/api/courses");

      if (!res.ok) {
        throw new Error("কোর্স ডাটা আনতে সমস্যা হয়েছে");
      }

      const result = await res.json();
      console.log("API RESULT 👉", result);

      // ✅ SUPPORT BOTH STRUCTURES
      if (Array.isArray(result)) return result;
      if (Array.isArray(result.data)) return result.data;

      return [];
    },
  });

  return {
    courses: data || [],
    isLoading,
    isError,
    error,
    refetch,
  };
}
