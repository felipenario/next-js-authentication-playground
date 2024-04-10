import { Game } from "@/app/(features)/(home)/(server-components)/types/game";
import { nestServiceFetch } from "@/app/clients/nestServiceFetch";

export const getAllGames = async ({ name }: { name?: string } = {}) => {
  const gamesRes = await nestServiceFetch<Game[]>({
    path: `/games${name ? `?name=${name}` : ""}`,
  });

  return gamesRes;
};
