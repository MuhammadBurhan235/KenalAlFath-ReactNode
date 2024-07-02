import { Router } from "express";
import {
  getAllDepPusatInfo,
  createDepPusatInfoHandler,
  updateDepPusatInfoHandler,
  deleteDepPusatInfoHandler,
} from "../controllers/DepPusatController.js";

const router = Router();

router.get("/deppinfos", getAllDepPusatInfo);
router.post("/deppinfo", createDepPusatInfoHandler);
router.put("/deppinfo/:id", updateDepPusatInfoHandler);
router.delete("/deppinfo/:id", deleteDepPusatInfoHandler);

export default router;
