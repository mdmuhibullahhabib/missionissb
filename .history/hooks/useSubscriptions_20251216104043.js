"use client";
import { useQuery } from "@tanstack/react-query";

export default function useSubscriptions(userId) {
  return useQuery({
    queryKey: ["subscriptions", userId],
    queryFn: async () => {
      const url = userId
        ? `/api/subscriptions?userId=${userId}`
        : "/api/subscriptions";

      const res = await fetch(url);
      if (!res.ok) throw new Error("ডাটা আনতে সমস্যা হয়েছে");
      return res.json();
    }
  });
}
