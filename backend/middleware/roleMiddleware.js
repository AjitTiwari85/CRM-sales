// 🔹 Role-based Authorization
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.userRole || !roles.includes(req.userRole)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};
