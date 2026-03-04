export type ApiClient = {
  get: <T>(path: string) => Promise<T>;
  post: <T>(path: string, body: unknown) => Promise<T>;
};

export const api: ApiClient = {
  async get<T>(_path: string): Promise<T> {
    throw new Error('api.get not implemented');
  },
  async post<T>(_path: string, _body: unknown): Promise<T> {
    throw new Error('api.post not implemented');
  },
};
