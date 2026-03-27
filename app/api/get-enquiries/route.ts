import { NextResponse } from "next/server";
import pool from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC");
    
    const mappedRows = result.rows.map(row => {
      let service = "General Inquiry";
      let message = row.message || "";
      
      const match = message.match(/^\[Service: (.*?)\] (.*)$/s);
      if (match) {
        service = match[1];
        message = match[2];
      }
      
      let mappedStatus = "New";
      if (row.status === "read") mappedStatus = "Contacted";
      if (row.status === "replied") mappedStatus = "Closed";

      return {
        id: row.id,
        name: row.name,
        phone: row.phone,
        service,
        message,
        status: mappedStatus,
        created_at: row.created_at
      };
    });

    return NextResponse.json({ success: true, data: mappedRows });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("FULL ERROR:", error.message);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: false, error: "Unknown error" }, { status: 500 });
  }
}