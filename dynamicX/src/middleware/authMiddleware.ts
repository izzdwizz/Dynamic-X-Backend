import jwt, { JwtPayload } from "jsonwebtoken";

export const authenticate = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, "secretkey") as JwtPayload;

    if (!decoded.userId) {
      return res.status(403).json({ error: "Invalid token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};
