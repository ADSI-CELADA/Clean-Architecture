export function errorMiddleware(err, req, res, next) {
  const status = err.status || 500;

  return res.status(status).json({
    success: false,
    error: err.message || "Error interno del servidor"
  });
}
