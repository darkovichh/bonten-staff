// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Lütfen Mongo URI'yi .env.local içine ekle");
}

if (process.env.NODE_ENV === "development") {
  // Geliştirme modunda global değişkende sakla
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Prod modunda
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
