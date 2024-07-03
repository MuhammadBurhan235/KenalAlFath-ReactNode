import {
  getKabinetInfoS,
  createKabinetInfo,
  updateKabinetInfo,
  deleteKabinetInfo,
} from "../models/KabinetModel.js";

export async function getAllKabinetInfo(req, res) {
  try {
    const kabsinfo = await getKabinetInfoS();
    res.json(kabsinfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function createKabinetInfoHandler(req, res) {
  try {
    const kabData = req.body;
    const newKabInfo = await createKabinetInfo(kabData);
    res.json(newKabInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateKabinetInfoHandler(req, res) {
  try {
    const kabId = req.params.id;
    const kabData = req.body;
    const updatedKabInfo = await updateKabinetInfo(kabId, kabData);
    res.json(updatedKabInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteKabinetInfoHandler(req, res) {
  try {
    const kabId = req.params.id;
    await deleteKabinetInfo(kabId);
    res.json({ message: "Departemen Pusat Info berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
