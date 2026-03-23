"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface TableItem {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

interface AdminTableProps {
  data: TableItem[];
}

export default function AdminTable({ data }: AdminTableProps) {
  const router = useRouter();

 const [tableData, setTableData] = useState<TableItem[]>(data || []);
  const checkedRef = useRef(false);

  useEffect(() => {
    if (checkedRef.current) return;

    checkedRef.current = true;

    const isAdmin = localStorage.getItem("admin");

    if (!isAdmin) {
      router.replace("/login");
    }
  }, [router]);

  // ✅ UPDATE STATUS
  async function updateStatus(id: number, status: string) {
    try {
      await fetch("/api/update-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, status }),
      });

      setTableData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status } : item
        )
      );
    } catch (err) {
      console.error("Update failed", err);
    }
  }

  return (
    <div>
      {/* 🔥 LOGOUT */}
      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <button
  onClick={() => {
    localStorage.removeItem("admin");
    router.replace("/login");
  }}
  style={{
    background: "linear-gradient(135deg, #1F5E3B, #2E8B57)",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "all 0.3s ease"
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.2)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  }}
>
  Logout
</button>
      </div>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.service}</td>
              <td>{item.message}</td>

              <td>
                <select
                  value={item.status}
                  onChange={(e) =>
                    updateStatus(item.id, e.target.value)
                  }
                >
                  <option>New</option>
                  <option>Contacted</option>
                  <option>Closed</option>
                </select>
              </td>

              <td>
                {new Date(item.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}