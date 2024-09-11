import express from "express";
import usersRoutes from "./users.routes.js";
import authRoutes from "./auth.routes.js";
import youtubeRoutes from "./youtube.routes.js";

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/auth", authRoutes);
router.use("/youtube", youtubeRoutes);

export default router;