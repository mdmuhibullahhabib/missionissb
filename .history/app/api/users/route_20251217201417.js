import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// GET → all users OR single user by email
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    const usersCollection = await dbConnect(
      collectionNamesobj.usersCollection
    );

    // যদি email থাকে → single user
    if (email) {
      const user = await usersCollection.findOne({ email });

      return NextResponse.json(user ?? null, { status: 200 });
    }

    // 🔹 যদি email না থাকে → সব user
    const users = await usersCollection.find({}).toArray();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("User API Error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch user data" },
      { status: 500 }
    );
  }
}
