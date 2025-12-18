"use client";

import { useEffect, useState } from "react";

export default function useCourses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);

        const res = await fetch("/api/courses");

        if (!res.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await res.json();

        if (result.success) {
          setCourses(result.data);
        } else {
          throw new Error(result.message || "Something went wrong");
        }
      } catch (err) {
        console.error("❌ useCourses error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, isLoading, error };
}
