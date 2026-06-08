import React from "react";

export const roleMiddleware = (...allowdRoles) => { // [] des roles
  return (req, res, next) => {
    // sécurité : authMiddleware doit être exécuté avant
    if (!req.user || req.user.role) {
      return res.status(403).json({ message: "Accés refusé" });
    }
    // Vérification du rôle
    if (!allowdRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Permission insuffisantes" });
    }
    next();
  };
};
