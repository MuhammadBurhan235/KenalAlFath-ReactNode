import {
  getDepPusatInfoS,
  createDepPusatInfo,
  updateDepPusatInfo,
  deleteDepPusatInfo,
} from "../models/DepPusatModel.js";

export async function getAllDepPusatInfo(req, res) {
  try {
    const deppsinfo = await getDepPusatInfoS();
    res.json(deppsinfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createDepPusatInfoHandler(req, res) {
  try {
    const deppData = req.body;
    const newDeppInfo = await createDepPusatInfo(deppData);
    res.json(newDeppInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateDepPusatInfoHandler(req, res) {
  try {
    const deppId = req.params.id;
    const deppData = req.body;
    const updatedDeppInfo = await updateDepPusatInfo(deppId, deppData);
    res.json(updatedDeppInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteDepPusatInfoHandler(req, res) {
  try {
    const deppId = req.params.id;
    await deleteDepPusatInfo(deppId);
    res.json({ message: "Departemen Pusat Info berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
