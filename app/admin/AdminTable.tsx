"use client";
import { useEffect } from "react";
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

useEffect(() => {
  const isAdmin = localStorage.getItem("admin");

  if (!isAdmin) {
    router.push("/login");
  }
}, [router]);
  async function updateStatus(id: number, status: string) {
        await fetch("/api/update-status", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, status }),
        });
    }

  return (
    <div>
      {/* 🔥 LOGOUT BUTTON */}
    <div
  style={{
    position: "sticky",
    top: "80px",
    zIndex: 20,
    textAlign: "right",
    marginBottom: "20px"
  }}
>
      <button
  onClick={() => {
    localStorage.removeItem("admin");
    window.location.href = "/login";
  }}
  style={{
    background: "#1F5E3B",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  Logout
</button>
    </div>

    <table style={{ width: "100%", marginTop: "20px" }}>
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
        {data.map((item: TableItem) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.service}</td>
            <td>{item.message}</td>

            <td>
              <select
                defaultValue={item.status}
                onChange={(e) => updateStatus(item.id, e.target.value)}
              >
                <option>New</option>
                <option>Contacted</option>
                <option>Closed</option>
              </select>
            </td>

            <td>{new Date(item.created_at).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}
