"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export default function useUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        // NextAuth session থেকে current user data পাওয়া
        const session = await getSession();
        console.log("Current session:", session);

        if (!session?.user) {
          throw new Error("No user logged in");
        }

        // Optional: যদি server API থেকে user details নিতে চাও
        // const res = await fetch(`/api/users/${session.user.id}`);
        // if (!res.ok) throw new Error("Failed to fetch user data");
        // const userData = await res.json();

        return session.user;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    },
    enabled: true, // query auto run হবে
  });
}
