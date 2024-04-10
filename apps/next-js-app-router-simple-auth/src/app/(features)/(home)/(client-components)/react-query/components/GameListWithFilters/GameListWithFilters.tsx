"use client";

import { useAllGames } from "@/app/(features)/(home)/(client-components)/react-query/react-queries/useAllGames";
import { GameList } from "@/app/components/GameList/GameList";
import { Input } from "@/app/components/Input/Input";
import { useState } from "react";

export const GameListWithFilters = () => {
  const [gameName, setGameName] = useState("");

  const {
    data: games,
    isLoading: isLoadingGames,
    isError: isErrorGames,
  } = useAllGames({
    gameName: gameName,
  });

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
      {isLoadingGames && <p>Loading games...</p>}
      {isErrorGames && <p>Error on loading games!</p>}
      {games && <GameList games={games} />}
    </div>
  );
};
