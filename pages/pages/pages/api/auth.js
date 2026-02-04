import { getDB } from "../../lib";

export default async function handler(req, res) {
  const { email } = req.body;
  const db = await getDB();

  let user = await db.collection("users").findOne({ email });
  if (!user) {
    await db.collection("users").insertOne({
      email,
      balance: 0
    });
  }

  res.json({ success: true });
}
