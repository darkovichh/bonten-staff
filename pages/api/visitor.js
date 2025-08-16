import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    // Kullanıcının gerçek IP'si
    let ip =
      req.headers["x-forwarded-for"]?.split(",")[0] || 
      req.socket.remoteAddress || 
      "Bilinmiyor";

    // Localhost testi için dummy IP
    if (ip === "::1" || ip === "127.0.0.1") ip = "8.8.8.8";

    let country = "Bilinmiyor";
    let city = "Bilinmiyor";

    try {
      const geoRes = await fetch(`https://ipinfo.io/${ip}/json?token=YOUR_TOKEN`);
      const geoData = await geoRes.json();
      country = geoData.country || "Bilinmiyor";
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
