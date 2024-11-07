import { Game } from "@/app/features/games/types/game";
import { nestServiceFetch } from "@/app/clients/nest-service-fetch";
import { useQuery } from "@tanstack/react-query";

export const getAllGames = async ({ name }: { name?: string } = {}) => {
  const gamesRes = await nestServiceFetch<Game[]>({
    path: `/games${name ? `?name=${name}` : ""}`,
  });

  return gamesRes;
};

export const useAllGames = ({ gameName }: { gameName?: string }) => {
  return useQuery({
    queryKey: ["getGames", gameName],
    queryFn: () => getAllGames({ name: gameName }),
  });
};
