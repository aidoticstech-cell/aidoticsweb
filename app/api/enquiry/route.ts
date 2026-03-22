import { pool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming data:", body);
    const { name, phone, service, message } = body;

    await pool.query(
      "INSERT INTO enquiries (name, phone, service, message) VALUES ($1, $2, $3, $4)",
      [name, phone, service, message]
    );

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}