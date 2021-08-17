import express from "express";
// import verifyToken from "../verifyToken";
import verifyToken from "../util/verifyToken.js";

import { getUsers, registerUser, updateUser, deleteUser } from "./users.contr.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", registerUser);

router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
