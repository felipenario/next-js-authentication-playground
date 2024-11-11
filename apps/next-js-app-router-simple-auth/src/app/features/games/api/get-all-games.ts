import { Game } from "@/app/features/games/types/game";
import { nestServiceFetch } from "@/app/api/nest-service-fetch";
import { useSuspenseQuery } from "@tanstack/react-query";

export const getAllGames = async ({ name }: { name?: string } = {}) => {
  const gamesRes = await nestServiceFetch<Game[]>(
    `/games${name ? `?name=${name}` : ""}`
  );

  return gamesRes;
};

export const useAllGames = ({ gameName }: { gameName?: string }) => {
  return useSuspenseQuery({
    queryKey: ["getGames", gameName],
    queryFn: () => getAllGames({ name: gameName }),
  });
};
