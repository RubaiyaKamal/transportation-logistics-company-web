import { MongoClient } from "mongodb";

let client: MongoClient | null = null;

export async function storeLead(
  kind: "contact" | "quote",
  data: Record<string, unknown>
) {
  const uri = process.env.MONGODB_URI;
  if (!uri) return;

  try {
    client ??= new MongoClient(uri);
    await client.connect();
    const db = client.db(process.env.MONGODB_DB ?? "scaldis_logistics");
    await db.collection("leads").insertOne({
      kind,
      ...data,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("[leads] could not store lead", error);
  }
}
