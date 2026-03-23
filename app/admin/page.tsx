"use client";

import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";

interface TableItem {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [data, setData] = useState<TableItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/get-enquiries");
        const result = await res.json();

        if (!res.ok) {
          throw new Error(result.error || "Failed to fetch");
        }

        setData(result.data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // ✅ Loading state
  if (loading) {
    return (
      <main style={{ padding: "120px 40px" }}>
        <h1>Enquiries Dashboard</h1>
        <p>Loading...</p>
      </main>
    );
  }

  // ❌ Error state
  if (error) {
    return (
      <main style={{ padding: "120px 40px" }}>
        <h1>Enquiries Dashboard</h1>
        <p style={{ color: "red" }}>{error}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "120px 40px" }}>
      <h1>Enquiries Dashboard</h1>

      <AdminTable data={data} />
    </main>
  );
}