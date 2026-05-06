type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions = {
  method?: HttpMethod;
  body?: unknown;
};

export const httpClient = async <T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> => {
  // Stub: reserved for backend integration.
  console.info("HTTP stub request", { endpoint, ...options });
  return Promise.resolve({} as T);
};
