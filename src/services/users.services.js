import { users } from "../data/data.js";
import crypto from "crypto";
import { getUsersCollection } from "../repository/user.repository.js";

export function createUser({ name, email }) {
  if (!name || !email) {
    throw new Error("Nombre y email son obligatorios");
  }

  const user = {
    id: crypto.randomUUID(),
    name,
    email
  };

  users.push(user);
  return user;
}

export async function getAllUsers() {
  const collection = getUsersCollection();
  const users = await collection.find().toArray();
  return users;
};

export function getUserById(id) {
  const user = users.find(u => u.id == id);
  if (!user) throw new Error("Usuario no encontrado");
  return user;
};

export function updateUser(id, data) {
  const user = getUserById(id);

  if (!user) throw new Error("Usuario no encontrado");

  user.name = data.name ?? user.name;
  user.email = data.email ?? user.email;

  return user;
};

export function deleteUser(id) {
  const index = users.findIndex(u => u.id == id);
  if (index === -1) throw new Error("Usuario no encontrado");
  return users.splice(index, 1)[0];
}


