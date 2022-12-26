import express from "express";
import userRoutes from "./users.js";
import commentRoutes from "./comments.js";
import likeRoutes from "./likes.js";
import postRoutes from "./posts.js";
import authRoutes from "./auth.js";

const router = express.Router();

router.use(`/posts`, postRoutes);
router.use(`/comments`, commentRoutes);
router.use(`/likes`, likeRoutes);
router.use(`/users`, userRoutes);
router.use(`/auth`, authRoutes);

export default router;
