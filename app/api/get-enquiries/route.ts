import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    return NextResponse.json(result.rows);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("FULL ERROR:", error.message);
      return NextResponse.json({ error: error.message });
    }

    return NextResponse.json({ error: "Unknown error" });
  }
}