import { getAllGames } from "@/app/(logged)/(home)/server-actions/getAllGames";
import { GameList } from "@/app/components/GameList/GameList";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function HomePage() {
  const games = await getAllGames();

  return (
    <div>
      <ErrorBoundary fallback={<p>Error fetching games</p>}>
        <Suspense fallback={<p>Loading games...</p>}>
          <GameList games={games} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
