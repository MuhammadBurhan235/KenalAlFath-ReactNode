import { Router } from "express";
import {
  getAllKabinetInfo,
  createKabinetInfoHandler,
  updateKabinetInfoHandler,
  deleteKabinetInfoHandler,
} from "../controllers/KabinetController.js";

const router = Router();

router.get("/kabinfos", getAllKabinetInfo);
router.post("/kabinfo", createKabinetInfoHandler);
router.put("/kabinfo/:id", updateKabinetInfoHandler);
router.delete("/kabinfo/:id", deleteKabinetInfoHandler);

export default router;
