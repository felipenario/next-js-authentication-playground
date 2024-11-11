"use client";

import { GameList } from "@/app/components/game-list/game-list";
import { Input } from "@/app/components/ui/input";
import { useAllGames } from "@/app/features/games/api/get-all-games";
import { useState } from "react";

export const GameListWithFilters = () => {
  const [gameName, setGameName] = useState("");

  const { data: games, isError: isErrorGames } = useAllGames({
    gameName: gameName,
  });

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
      {isErrorGames && <p>Error on loading games!</p>}
      {games && <GameList games={games} />}
    </div>
  );
};
