import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const visitors = await db.collection("visitors").find({}).sort({ date: -1 }).toArray();

    res.status(200).json({
      total: visitors.length,
      visitors
    });
  } catch (err) {
    console.error("MongoDB Hata:", err);
    res.status(500).json({ message: "Stats alınamadı", error: err.message });
  }
}
