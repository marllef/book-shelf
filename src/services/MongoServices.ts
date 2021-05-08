import { connectToDatabase } from "~/utils/Database/mongodb";

export async function fetchDataFromDatabase() {
  const { db, client } = await connectToDatabase();

  if (client.isConnected()) {
    let data = await db.collection("books").find().toArray();
    return data;
  }
}
