import jsonwebtoken from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  //
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("No token -> No access");

  try {
    const verified = jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    if (verified) {
      next();
    }
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

export default verifyToken;
