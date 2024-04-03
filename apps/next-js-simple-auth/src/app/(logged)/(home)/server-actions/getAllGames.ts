"use server";

import { Game } from "@/app/(logged)/(home)/types/game";
import { useQuery } from "@tanstack/react-query";

export const getAllGames = async ({ name }: { name?: string } = {}) => {
  const cookies = require("next/headers").cookies;

  const accessToken = cookies().get("access-token").value;

  const gamesRes = await fetch(
    `${process.env.NEXT_NEST_JS_SERVICE_URL}/games${name ? `?name=${name}` : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const gamesData = await gamesRes.json();

  if (!gamesRes.ok) {
    throw new Error(gamesData.message);
  }

  return gamesData as Game[];
};

export const useAllGames = ({ gameName }: { gameName?: string }) => {
  return useQuery({
    queryKey: ["getGames", gameName],
    queryFn: () => getAllGames({ name: gameName }),
  });
};
