import { CredentialsClientComponent } from "@/app/features/auth/components/credentials-client-component";
import { CredentialsServerComponent } from "@/app/features/auth/components/credentials-server-component";
import { getAllGames } from "@/app/features/games/api/get-all-games";
import { GameListWithFilters } from "@/app/features/games/components/list-with-filters/game-list-with-filters";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function HomeReactQueryPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getGames"],
    queryFn: () => getAllGames(),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<p>Loading Client...</p>}>
          <CredentialsClientComponent />
        </Suspense>
        <Suspense fallback={<p>Loading Server...</p>}>
          <CredentialsServerComponent />
        </Suspense>
        <GameListWithFilters />
      </HydrationBoundary>
    </div>
  );
}
