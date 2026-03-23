"use client";

import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";

export default function AdminPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/get-enquiries")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main style={{ padding: "120px 40px" }}>
      <h1>Enquiries Dashboard</h1>

      <AdminTable data={data} />
    </main>
  );
}