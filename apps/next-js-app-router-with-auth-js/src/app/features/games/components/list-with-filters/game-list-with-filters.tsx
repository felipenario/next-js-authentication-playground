"use client";

import { GameList } from "@/app/components/game-list/game-list";
import { Input } from "@/app/components/ui/input";
import { useAllGames } from "@/app/features/games/api/get-all-games";
import { Suspense, useState } from "react";

export const GameListWithFilters = () => {
  const [gameName, setGameName] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
      <Suspense fallback={<p>Loading...</p>}>
        <GamesList gameName={gameName} />
      </Suspense>
    </div>
  );
};

const GamesList = ({ gameName }: { gameName: string }) => {
  const { data: games, isError: isErrorGames } = useAllGames({
    gameName: gameName,
  });

  return (
    <>
      {isErrorGames && <p>Error on loading games!</p>}
      {games && <GameList games={games} />}
    </>
  );
};
