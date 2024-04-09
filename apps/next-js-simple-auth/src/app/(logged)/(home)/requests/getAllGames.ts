import { Game } from "@/app/(logged)/(home)/types/game";
import { nestServiceFetch } from "@/app/clients/nestServiceFetch";
import { useQuery } from "@tanstack/react-query";

export const useAllGames = ({ gameName }: { gameName?: string }) => {
  return useQuery({
    queryKey: ["getGames", gameName],
    queryFn: () => getAllGames({ name: gameName }),
  });
};

export const getAllGames = async ({ name }: { name?: string } = {}) => {
  const gamesRes = await nestServiceFetch<Game[]>({
    path: `/games${name ? `?name=${name}` : ""}`,
  });

  return gamesRes;
};
