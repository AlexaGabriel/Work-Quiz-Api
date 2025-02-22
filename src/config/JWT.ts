import jwt from "jsonwebtoken"

const SECRET_KEY = process.env.JWT_SECRET || "minha_chave_secreta";

export const generateToken = (payload: string | object | Buffer<ArrayBufferLike>) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET_KEY);
};

