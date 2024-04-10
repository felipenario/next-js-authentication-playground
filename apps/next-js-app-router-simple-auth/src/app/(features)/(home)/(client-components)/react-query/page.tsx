import { GameListWithFilters } from "@/app/(features)/(home)/(client-components)/react-query/components/GameListWithFilters/GameListWithFilters";
import { getAllGames } from "@/app/(features)/(home)/(server-components)/requests/getAllGames";
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
