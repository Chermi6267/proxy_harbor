import { api } from "@/shared/axios/axiosConfig";

export const addDomianToProxy = async (domain: string, proxyId: number) => {
  try {
    const response = await api
      .post(`/domain/add_to_proxy/${proxyId}`, {
        domain: domain,
      })
      .then((res) => {
        console.log(res.data);
      });

    return response;
  } catch (error) {
    console.error(error);
  }
};
