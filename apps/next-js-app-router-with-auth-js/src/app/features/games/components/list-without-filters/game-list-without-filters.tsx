import { getAllGames } from "@/app/features/games/api/get-all-games";
import { GameList } from "@/app/components/game-list/game-list";

export const GameListWithoutFilters = async () => {
  const games = await getAllGames();

  return <GameList games={games} />;
};
