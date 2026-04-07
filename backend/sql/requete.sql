-- Création d'un utilisateur users
 "INSERT INTO users (email, password_hash, verify_token) VALUES (?, ?, ?)",
      [email, passwordHash, verifyToken],

--Pour trouver un users dans la base de donées
`SELECT * FROM users WHERE email = ?`, [email]

--Verification token
`SELECT * FROM users WHERE verify_token=?`, [token]

--Verification de l'utilisateur avec son Id
`UPDATE users SET is_verified=1, verify_token=NULL WHERE id=?`, [userId]

