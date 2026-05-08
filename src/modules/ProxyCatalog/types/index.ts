export type ProxyCatalogItem = {
  id: number;
  name: string;
  url: string;
  domains: {
    id: number;
    domain: string;
  }[];
};
