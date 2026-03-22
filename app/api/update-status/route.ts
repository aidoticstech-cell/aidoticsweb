import { pool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, status } = body;

    await pool.query(
      "UPDATE enquiries SET status=$1 WHERE id=$2",
      [status, id]
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