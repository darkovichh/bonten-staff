import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [stats, setStats] = useState({ total: 0, visitors: [] });

  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <h1>📊 Admin Panel</h1>
      <p>Toplam Ziyaretçi: {stats.total}</p>

      <h2>Ziyaretçi Listesi</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>IP Adresi</th>
            <th>Ülke & Şehir</th>
            <th>Tarih & Saat</th>
          </tr>
        </thead>
        <tbody>
          {stats.visitors.map((v, i) => (
            <tr key={i} style={{ height: "40px" }}>
              <td>{v.ip}</td>
              <td>{v.country}, {v.city}</td>
              <td>{new Date(v.date).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
