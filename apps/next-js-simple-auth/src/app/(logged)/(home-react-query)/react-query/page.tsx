import { getAllGames } from "@/app/(logged)/(home)/server-actions/getAllGames";
import { GameListWithFilters } from "@/app/(logged)/(home-react-query)/react-query/components/GameListWithFilters/GameListWithFilters";
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
