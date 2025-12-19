import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { ObjectId } from "mongodb";

export async function POST(req) {
  try {
    // ================= 1️⃣ Auth check =================
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { courseId } = await req.json();

    // ================= 2️⃣ Course fetch =================
    const courseCollection = await dbConnect(
      collectionNamesobj.coursesCollection
    );

    const course = await courseCollection.findOne({
      _id: new ObjectId(courseId),
    });

    if (!course) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // ================= 3️⃣ Create transaction =================
    const transactionId = "BKASH_" + Date.now();

    // ================= 4️⃣ Save pending subscription =================
    const subscriptionCollection = await dbConnect(
      collectionNamesobj.subscriptionCollection
    );

    await subscriptionCollection.insertOne({
      userEmail: session.user.email,
      courseId: course._id,
      courseTitle: course.title,
      price: course.price.current,
      currency: "BDT",
      paymentMethod: "bkash",
      transactionId,
      status: "pending",
      createdAt: new Date(),
    });

    // ================= 5️⃣ Call bKash API (SIMULATED) =================
    // ⚠️ এখানে real project এ fetch দিয়ে bKash create-payment API call হবে

    const bkashURL = `https://sandbox.bkash.com/checkout?trxID=${transactionId}`;

    // ================= 6️⃣ Return checkout URL =================
    return NextResponse.json({
      bkashURL,
      transactionId,
    });

  } catch (error) {
    console.error("BKASH ERROR:", error);
    return NextResponse.json(
      { error: "Payment initialization failed" },
      { status: 500 }
    );
  }
}
