import { httpClient } from "./httpClient";

type LoginPayload = {
  username: string;
  password: string;
};

type RegisterPayload = {
  username: string;
  email?: string;
  password: string;
};

export const login = async (payload: LoginPayload) => {
  await httpClient("/auth/login", { method: "POST", body: payload });
};

export const register = async (payload: RegisterPayload) => {
  await httpClient("/auth/register", { method: "POST", body: payload });
};
