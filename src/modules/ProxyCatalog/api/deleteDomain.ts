import { api } from "@/shared/axios/axiosConfig";

export const deleteDomain = async (domainId: number) => {
  try {
    const response = await api.delete(`/domain/${domainId}`).then((res) => {
      return res.data;
    });

    return response;
  } catch (error) {
    console.error(error);

    throw error;
  }
};
