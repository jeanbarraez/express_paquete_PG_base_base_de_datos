import { Router } from "express";
 import {getLikesAll,createLikes } from '../src/controllers/likeControllers.js'
 import {notFound} from '../src/controllers/likeControllers.js'
const router = Router();


router.get("/posts",getLikesAll)
router.post("/posts",createLikes)
router.all("*", notFound)

export default router