"use client";

import { useQuery } from "@tanstack/react-query";
import { getSession } from "next-auth/react";

export default function useUser() {

    const { data: session, status } = useSession();
    const email = session?.user?.email;
    
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

        return session.user;
      } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
      }
    },
    enabled: true,
  });
}
