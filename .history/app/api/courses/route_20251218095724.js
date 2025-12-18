import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to collection
    const productsCollection = await dbConnect(
      collectionNamesobj.productsCollection
    );

    // Fetch products
    const products = await productsCollection.find({}).toArray();

    // Success response
    return NextResponse.json(
      {
        success: true,
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ MongoDB Fetch Error:", error);

    // Error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch products",
      },
      { status: 500 }
    );
  }
}
