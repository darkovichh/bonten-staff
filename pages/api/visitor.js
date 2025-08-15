// pages/api/visitor.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "visitors.json");

  // Ziyaretçi IP'sini al
  const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress || "Bilinmiyor";

  // Daha önceki veriyi oku
  let visitors = [];
  if (fs.existsSync(filePath)) {
    visitors = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }

  // Yeni ziyaretçi ekle (IP ve tarih)
  visitors.push({ ip, date: new Date().toISOString() });

  // Dosyaya kaydet
  fs.writeFileSync(filePath, JSON.stringify(visitors, null, 2));

  res.status(200).json({ message: "Ziyaretçi kaydedildi", ip });
}
