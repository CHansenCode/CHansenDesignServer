import express from "express";
// import verifyToken from "../verifyToken";
import verifyToken from "../verifyToken.js";

import {
  getUsers,
  getUser,
  registerUser,
  authUser,
  updateUser,
  deleteUser,
} from "./users.contr.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", registerUser);
router.post("/login", verifyToken, authUser);

//NOT CONFIGURED YET
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
