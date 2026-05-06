import { httpClient } from "./httpClient";

type ServerInfo = {
  name: string;
  chronicle: string;
  rates: string;
};

export const getServerInfo = async () => {
  return httpClient<ServerInfo>("/server/info");
};
