import  pool  from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Incoming data:", body);
    const { name, phone, service, message } = body;

    const combinedMessage = service ? `[Service: ${service}] ${message}` : message;

    await pool.query(
      "INSERT INTO contacts (name, phone, message) VALUES ($1, $2, $3)",
      [name, phone, combinedMessage]
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