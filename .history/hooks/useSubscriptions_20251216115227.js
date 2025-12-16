"use client";
import { useQuery } from "@tanstack/react-query";

export default function useSubscriptions(userId) {
  return useQuery({
    queryKey: ["subscriptions", userId],
    queryFn: async () => {
      try {
        const url = userId
          ? `/api/subscriptions?userId=${userId}`
          : "/api/subscriptions";

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("ডাটা আনতে সমস্যা হয়েছে");
        }

        const data = await res.json();

        // Console log to debug
        console.log("Fetched subscriptions:", data);

        return data;
      } catch (error) {
        console.error("Error fetching subscriptions:", error);
        throw error;
      }
    },
    // Optional: only fetch when userId exists (if required)
    enabled: userId !== undefined, 
  });
}
