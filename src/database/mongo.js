import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

export let db;

export async function connectMongo() {
  try {
    await client.connect();
    db = client.db("crud_users");
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("Error conectando MongoDB", error);
    process.exit(1);
  }
}
