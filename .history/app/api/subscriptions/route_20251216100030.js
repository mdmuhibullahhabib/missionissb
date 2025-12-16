import express from "express";
import ExamResult from "../models/ExamResult.js";
import dbConnect, { collectionNamesobj } from "@/lib/dbconnect";
import { NextResponse } from "next/server";

const router = express.Router();

router.post("/subscriptions", async (req, res) => {
  try {
    const result = await ExamResult.create(req.body);
    res.status(201).json({
      success: true,
      resultId: result._id,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.get("/subscriptions/:id", async (req, res) => {
  const result = await ExamResult.findById(req.params.id);
  res.json(result);
});

export default router;
