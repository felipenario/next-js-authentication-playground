import { GameCard } from "@/app/components/GameCard/GameCard";
import { GameListProps } from "@/app/components/GameList/GameList.types";

export const GameList = ({ games }: GameListProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {games.map((game) => {
        return (
          <GameCard key={game.id} name={game.name} coverUrl={game.coverArt} />
        );
      })}
    </div>
  );
};
