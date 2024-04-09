import { getAllGames } from "@/app/(logged)/(home)/requests/getAllGames";
import { GameList } from "@/app/components/GameList/GameList";

export const GameListWithoutFilters = async () => {
  const games = await getAllGames();

  return <GameList games={games} />;
};
