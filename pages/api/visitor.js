import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "Bilinmiyor";

    // IP'den ülke ve şehir alma
    let country = "Bilinmiyor";
    let city = "Bilinmiyor";

    try {
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoRes.json();
      country = geoData.country_name || "Bilinmiyor";
      city = geoData.city || "Bilinmiyor";
    } catch (e) {
      console.error("GeoIP hatası:", e);
    }

    await db.collection("visitors").insertOne({
      ip,
      country,
      city,
      date: new Date()
    });

    res.status(200).json({ message: "Ziyaretçi kaydedildi", ip, country, city });
  } catch (err) {
    console.error("MongoDB Hata:", err);
    res.status(500).json({ message: "Kayıt yapılamadı", error: err.message });
  }
}
