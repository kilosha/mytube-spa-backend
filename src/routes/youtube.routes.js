import express from "express";
import YoutubeControllers from "../controllers/youtube.controller.js";

const router = express.Router();

router.get("/search", YoutubeControllers.getVideos);

export default router;