export type FetchClientProps = RequestInit & {
  params?: Record<string, string>;
};

export type FetchDefaultErrorResponse = {
  message?: string;
};

export type FetchClientError = {
  statusCode: number;
  message: string;
  error: Error;
};
