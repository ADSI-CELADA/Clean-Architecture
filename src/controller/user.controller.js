import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../services/users.services.js"

export function findAll(req, res) {
    return res.status(200).json({ success: true, data: getAllUsers() })
};

export function findOne(req, res) {
    const user = getUserById(req.params.id);
    return res.status(200).json({ success: true, data: user })
};

export function create(req, res) {
    const newUser = createUser(req.body);
    return res.status(201).json({ data: newUser })
}

export function update(req, res) {
    const { id } = req.params;
    const updataUser = updateUser(id, req.body);
    return res.status(201).json({ data: updataUser })
};

export function remove(req, res) {
    const { id } = req.params;
    const deletUser = deleteUser(id);
    return res.status(200).json({ data: deletUser })
}