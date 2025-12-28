export function validateCreateUser(req, res, next) {
    const { name, email } = req.body;

    if (!name || !email) throw new Error("Datos incompletos");

    if (typeof name !== "string" || typeof email !== "string") throw new Error("Deben ser strings");

    if (!name.trim() || !email.trim()) throw new Error("Los campos no pueden estar vacíos");

    next()
}
