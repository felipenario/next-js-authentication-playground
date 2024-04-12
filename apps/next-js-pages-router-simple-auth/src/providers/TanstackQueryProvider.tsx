import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

type TanstackQueryProviderProps = {
  children?: ReactNode;
};

export const TanstackQueryProvider = ({
  children,
}: TanstackQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
