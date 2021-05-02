import { connectToDatabase } from "~/utils/Database/mongodb";

export async function fetchData() {
  const { db, client } = await connectToDatabase();

  if (client.isConnected()) {
    let data = await db.collection("authors").find().toArray();
    return data;
  }
}
