import { pool } from "@/lib/db";
import AdminTable from "./AdminTable";

export default async function AdminPage() {
  const result = await pool.query("SELECT * FROM enquiries ORDER BY created_at DESC");

  return (
    <main style={{ padding: "120px 40px 40px 40px" }}>
      <h1>Enquiries Dashboard</h1>

      <AdminTable data={result.rows} />
    </main>
  );
}