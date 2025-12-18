import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

// =================== POST: Submit Exam Result ===================
export async function POST(request) {
  try {
    const body = await request.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { success: false, message: "Request body is empty" },
        { status: 400 }
      );
    }

    const examResultCollection = await dbConnect(collectionNamesobj.examResultCollection);
    const result = await examResultCollection.insertOne(body);

    return NextResponse.json(
      { success: true, message: "Exam result submitted successfully", resultId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("MongoDB Error (POST):", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit exam result", error: error.message },
      { status: 500 }
    );
  }
}

// =================== GET: Get Exam Result by ID ===================
export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return NextResponse.json(
        { success: false, message: "Invalid result ID" },
        { status: 400 }
      );
    }

    const examResultCollection = await dbConnect(collectionNamesobj.examResultCollection);
    const result = await examResultCollection.findOne({ _id: new ObjectId(id) });

    if (!result) {
      return NextResponse.json(
        { success: false, message: "Exam result not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error) {
    console.error("MongoDB Error (GET):", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch exam result", error: error.message },
      { status: 500 }
    );
  }
}
