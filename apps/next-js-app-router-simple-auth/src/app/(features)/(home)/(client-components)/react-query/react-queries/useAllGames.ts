import { getAllGames } from "@/app/(features)/(home)/(server-components)/requests/getAllGames";
import { useQuery } from "@tanstack/react-query";

export const useAllGames = ({ gameName }: { gameName?: string }) => {
  return useQuery({
    queryKey: ["getGames", gameName],
    queryFn: () => getAllGames({ name: gameName }),
  });
};
