import { api } from "@/shared/axios/axiosConfig";
import { type ProxyCatalogItem } from "../types";

export const updateProxy = async (data: ProxyCatalogItem) => {
  try {
    const response = await api
      .put(`/proxy/${data.id}`, {
        name: data.name,
        url: data.url,
        domains: data.domains,
      })
      .then((res) => {
        return res.data as ProxyCatalogItem[];
      });

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
