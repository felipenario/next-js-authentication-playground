import { getAllGames } from "@/app/features/games/api/get-all-games";
import { GameListWithFilters } from "@/app/features/games/components/list-with-filters/game-list-with-filters";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function HomeReactQueryPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getGames"],
    queryFn: () => getAllGames(),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GameListWithFilters />
      </HydrationBoundary>
    </div>
  );
}
