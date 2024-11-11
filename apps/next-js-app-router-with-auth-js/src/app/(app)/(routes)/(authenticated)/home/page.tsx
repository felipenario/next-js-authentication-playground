import { CredentialsClientComponent } from "@/app/features/auth/components/credentials-client-component";
import { CredentialsServerComponent } from "@/app/features/auth/components/credentials-server-component";
import { getAllGames } from "@/app/features/games/api/get-all-games";
import { GameListWithFilters } from "@/app/features/games/components/list-with-filters/game-list-with-filters";
import { GameListWithoutFilters } from "@/app/features/games/components/list-without-filters/game-list-without-filters";
import { getQueryClient } from "@/app/utils/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function HomePage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery({
    queryKey: ["getGames"],
    queryFn: () => getAllGames(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex w-full flex-col items-center justify-center gap-9 px-4">
        <Suspense fallback={<div>loading client...</div>}>
          <GameListWithFilters />
        </Suspense>

        <Suspense fallback={<div>loading server...</div>}>
          <GameListWithoutFilters />
        </Suspense>

        <CredentialsClientComponent />
        <ErrorBoundary fallback={<div>Error Server</div>}>
          <Suspense fallback={<div>Loading Server...</div>}>
            <CredentialsServerComponent />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrationBoundary>
  );
}
