// pages/api/stats.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "visitors.json");

  if (!fs.existsSync(filePath)) {
    return res.status(200).json({ total: 0, visitors: [] });
  }

  const visitors = JSON.parse(fs.readFileSync(filePath, "utf8"));

  res.status(200).json({
    total: visitors.length,
    visitors
  });
}
