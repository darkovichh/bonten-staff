import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise; // <-- burada artık doğru MongoClient
    const db = client.db(process.env.MONGODB_DB);

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "Bilinmiyor";

    const result = await db.collection("visitors").insertOne({ ip, date: new Date() });

    res.status(200).json({ message: "Ziyaretçi kaydedildi", ip });
  } catch (err) {
    console.error("MongoDB Hata:", err);
    res.status(500).json({ message: "Kayıt yapılamadı", error: err.message });
  }
}
