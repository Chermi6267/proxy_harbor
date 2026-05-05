import { api } from "@/shared/axios/axiosConfig";
import { ProxyItem } from "../store/proxy.store";

export const fetchProxies = async () => {
  try {
    const response = await api("/proxy").then((res) => {
      return res.data as ProxyItem[];
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
