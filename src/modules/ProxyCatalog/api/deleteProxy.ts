import { api } from "@/shared/axios/axiosConfig";

export const deleteProxy = async (proxyId: number) => {
  try {
    const response = await api.delete(`/proxy/${proxyId}`).then((res) => {
      return res.data;
    });

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
