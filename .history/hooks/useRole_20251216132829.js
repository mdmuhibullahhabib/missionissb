"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export default function useRole() {
  return useQuery({
    queryKey: ["currentUserRole"],
    queryFn: async () => {
      try {
        const session = await getSession();
        console.log("Current session:", session);

        if (!session?.user) {
          throw new Error("No user logged in");
        }

        // ধরে নিচ্ছি session.user.role আছে
        const role = session.user.role || "user"; // default role
        console.log("User role:", role);

        return role;
      } catch (error) {
        console.error("Error fetching user role:", error);
        throw error;
      }
    },
    enabled: true,
  });
}
