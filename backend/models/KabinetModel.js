import { supabase } from "../config/config.js";

export async function getKabinetInfoS() {
  let { data: kabinfos, error } = await supabase
    .from("kabinet_info")
    .select("*");
  if (error) throw error;
  return kabinfos;
}

export async function createKabinetInfo(kabData) {
  let { data, error } = await supabase.from("kabinet_info").insert([kabData]);
  if (error) throw error;
  return data;
}

export async function updateKabinetInfo(kabId, kabData) {
  let { data, error } = await supabase
    .from("kabinet_info")
    .update(kabData)
    .eq("id", kabId);
  if (error) throw error;
  return data;
}

export async function deleteKabinetInfo(kabId) {
  let { error } = await supabase.from("kabinet_info").delete().eq("id", kabId);
  if (error) throw error;
  return true;
}
