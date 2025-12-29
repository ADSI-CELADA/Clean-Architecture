import { getUsersCollection } from "../repository/user.repository.js";
import { ObjectId } from "mongodb"

export async function createUser({ name, email }) {
  if (!name || !email) {
    throw new Error("Nombre y email son obligatorios");
  }

  const user = { name, email };

  const collection = getUsersCollection();
  const result = await collection.insertOne(user);

  return {
    id: result.insertedId,
    ...user
  };
}


export async function getAllUsers() {
  const collection = getUsersCollection();
  const users = await collection.find().toArray();
  return users;
};

export async function getUserById(id) {
  const collection = getUsersCollection();
  const user = await collection.findOne({ _id: new ObjectId(id) })
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export async function updateUser(id, data) {
  await getUserById(id);

  const collection = getUsersCollection();

  const updateData = {};
  if (data.name !== undefined) updateData.name = data.name;
  if (data.email !== undefined) updateData.email = data.email;

  const updateUser = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: updateData },
    { returnDocument: "after" }
  );

  return updateUser.value;
}

export async function deleteUser(id) {
  
  await getUserById(id);

  const collection = getUsersCollection();
  const deleteUSer = await collection.findOneAndDelete({ _id : new ObjectId(id) })

  return deleteUSer.value;

}


