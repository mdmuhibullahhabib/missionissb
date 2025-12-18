"use client";

import { useQuery } from "@tanstack/react-query";

export default function useCourses() {
  const {
    data: courses,
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

      const data = await res.json();

      console.log("Fetched courses:", data);

      // API response structure: { success, data }
      return data?.data || [];
    },
  });

  return {
    courses,
    isLoading,
    isError,
    error,
    refetch,
  };
}
