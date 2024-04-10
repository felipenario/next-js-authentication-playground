import { GameListWithoutFilters } from "@/app/(features)/(home)/(server-components)/components/GameListWithoutFilters/GameListWithoutFilters";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function HomePage() {
  return (
    <div>
      <ErrorBoundary fallback={<p>Error fetching games</p>}>
        <Suspense fallback={<p>Loading games...</p>}>
          <GameListWithoutFilters />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
