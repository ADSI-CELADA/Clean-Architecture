import { db } from "../database/mongo.js";

export async function getUsersCollection() {
    return db.collection("users");
}

export async function createUsersCollection() {
    
}