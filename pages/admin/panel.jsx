// pages/admin/panel.js
import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [stats, setStats] = useState({ total: 0, visitors: [] });

  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff", fontFamily: "sans-serif" }}>
      <h1>📊 Admin Panel</h1>
      <p>Toplam Ziyaretçi: {stats.total}</p>

      <h2>Ziyaretçi Listesi</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", background: "#222", color: "#fff" }}>
        <thead>
          <tr>
            <th>IP Adresi</th>
            <th>Tarih</th>
          </tr>
        </thead>
        <tbody>
          {stats.visitors.map((v, i) => (
            <tr key={i}>
              <td>{v.ip}</td>
              <td>{new Date(v.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
