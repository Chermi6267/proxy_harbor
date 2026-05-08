import { api } from "@/shared/axios/axiosConfig";
import { ProxyFormData } from "../types";

export const addProxy = async (data: ProxyFormData) => {
  const result = await api.post("/proxy", data);

  return result;
};
