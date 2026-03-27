import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM enquiries ORDER BY created_at DESC");
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("FULL ERROR:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: false, error: "Unknown error" }, { status: 500 });
  }
}