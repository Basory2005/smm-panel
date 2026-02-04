import { MongoClient } from "mongodb";

export async function getDB() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  return client.db("smm");
}

export async function smm(action, data = {}) {
  const res = await fetch("https://blesspanel.store/api/v2", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      key: process.env.SMM_API_KEY,
      action,
      ...data
    })
  });
  return res.json();
}
