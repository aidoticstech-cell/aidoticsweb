import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    // ✅ VALIDATION
    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "Missing id or status" },
        { status: 400 }
      );
    }

    let dbStatus = "new";
    if (status === "Contacted") dbStatus = "read";
    if (status === "Closed") dbStatus = "replied";

    await pool.query(
      "UPDATE contacts SET status = $1 WHERE id = $2",
      [dbStatus, id]
    );

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("UPDATE ERROR:", error.message);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Unknown error" },
      { status: 500 }
    );
  }
}