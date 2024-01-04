import { Router } from "express";
import {
  getLikesAll,
  createLikes,
  updatePost,
  removeId,
} from "../src/controllers/likeControllers.js";
import { notFound } from "../src/controllers/likeControllers.js";
const router = Router();

router.get("/posts", getLikesAll);
router.post("/posts", createLikes);
router.put("/posts/like/:id", updatePost);
router.delete("/posts/:id", removeId);

router.all("*", notFound);

export default router;
