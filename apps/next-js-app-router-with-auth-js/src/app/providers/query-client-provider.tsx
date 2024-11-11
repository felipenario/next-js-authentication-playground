"use client";

import { getQueryClient } from "@/app/utils/get-query-client";
import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = getQueryClient();

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
