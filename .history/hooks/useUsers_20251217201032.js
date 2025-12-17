"use client";

import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function useUser() {
  const { data: session, status } = useSession();
  const email = session?.user?.email;

  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user", email],
    enabled: !!email && status === "authenticated",
    queryFn: async () => {
      const res = await fetch(`/api/users?email=${email}`);

      if (!res.ok) {
        throw new Error("User ডাটা আনতে সমস্যা হয়েছে");
      }

      const data = await res.json();

      console.log("Fetched user by email:", data);

      // যদি array আসে, single user নাও
      return Array.isArray(data) ? data[0] : data;
    },
  });

  return {
    user,
    isLoading,
    isError,
    error,
    refetch,
  };
}
