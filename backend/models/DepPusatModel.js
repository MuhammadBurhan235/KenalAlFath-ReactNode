import { supabase } from "../config/config.js";

export async function getDepPusatInfoS() {
  let { data: deppinfos, error } = await supabase
    .from("deppusat_info")
    .select("*");
  if (error) throw error;
  return deppinfos;
}

export async function createDepPusatInfo(deppData) {
  let { data, error } = await supabase.from("deppusat_info").insert([deppData]);
  if (error) throw error;
  return data;
}

export async function updateDepPusatInfo(deppId, deppData) {
  let { data, error } = await supabase
    .from("deppusat_info")
    .update(deppData)
    .eq("id", deppId);
  if (error) throw error;
  return data;
}

export async function deleteDepPusatInfo(deppId) {
  let { error } = await supabase
    .from("deppusat_info")
    .delete()
    .eq("id", deppId);
  if (error) throw error;
  return true;
}
