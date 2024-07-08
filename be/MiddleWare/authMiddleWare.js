import jwt from "jsonwebtoken";

export const authMiddleWare = function (roles) {
  return function (req, res, next) {
    try {
      const token = req.headers.authorization;
      console.log(token);

      const decoded = jwt.verify(token, process.env.Token_Key);
      console.log(decoded);

      if (!roles.includes(decoded.role)) {
        return res.status(401).json({ message: "You dont have access" });
      }
      next();
    } catch (error) {
      return res.status(401).json({ error });
    }
  };
};
