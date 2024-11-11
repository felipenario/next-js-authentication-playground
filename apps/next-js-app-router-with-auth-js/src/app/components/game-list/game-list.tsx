import { GameCard } from "@/app/components/game-card/game-card";
import { GameListProps } from "@/app/components/game-list/game-list.types";

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
