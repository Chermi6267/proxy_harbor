import { api } from "@/shared/axios/axiosConfig";
import { type ProxyCatalogItem } from "../types";

export const fetchProxies = async () => {
  try {
    const response = await api("/proxy").then((res) => {
      return res.data as ProxyCatalogItem[];
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
