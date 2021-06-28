import express from "express";
// import verifyToken from "../verifyToken";
import verifyToken from "../token/verifyToken.js";

import {
  getUsers,
  getUser,
  getUserList,
  registerUser,
  authUser,
  updateUser,
  deleteUser,
} from "./users.contr.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/list", getUserList);
router.post("/", registerUser);
router.post("/login", authUser);
//NOT CONFIGURED YET
router.get("/:id", getUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
