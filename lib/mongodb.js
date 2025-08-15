// pages/api/visitor.js
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0] ||
    req.socket.remoteAddress ||
    "Bilinmiyor";

  await db.collection("visitors").insertOne({
    ip,
    date: new Date()
  });

  res.status(200).json({ message: "Ziyaretçi kaydedildi", ip });
}
