"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) {
      localStorage.setItem("admin", "true");
      router.push("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <main style={{ padding: "100px", textAlign: "center" }}>
      <h1>Admin Login</h1>

      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", marginTop: "20px" }}
      />

      <br /><br />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </main>
  );
}