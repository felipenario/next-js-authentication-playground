import { nestServiceClient } from "@/api/clients/nestServiceClient";
import { QueryFnOptions } from "@/lib/react-query";
import { Game } from "@/types/game";
import { useQuery } from "@tanstack/react-query";

export const getGamesPath = "/games";

export const getGames = async (name?: string) => {
  const gamesRes = await nestServiceClient.get<Game[]>(getGamesPath, {
    params: {
      ...(name && {
        name: name,
      }),
    },
  });

  return gamesRes.data;
};

type UseGamesOptions<TData = Game[]> = {
  gameName?: string;
  options?: QueryFnOptions<Game[], TData>;
};

export const getGamesQueryKey = "getAllGames";

export const useGames = <TData = Game[]>({
  gameName,
  options = {},
}: UseGamesOptions<TData> = {}) => {
  return useQuery({
    ...options,
    queryKey: [getGamesQueryKey, gameName],
    queryFn: () => getGames(gameName),
  });
};
