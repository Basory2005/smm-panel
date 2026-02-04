import { smm } from "../../lib";

export default async function handler(req, res) {
  const data = await smm("services");
  res.json(data.slice(0, 20));
}
