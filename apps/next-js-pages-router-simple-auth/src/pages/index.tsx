import { GameList } from "@/components/GameList/GameList";
import { Input } from "@/components/Input/Input";
import { useGames } from "@/features/games/api/getGames";
import { HomeLayout } from "@/layouts/HomeLayout/HomeLayout";
import { NextPageWithLayout } from "@/types/next-page-with-layout";
import { ReactElement, useState } from "react";

const HomePage: NextPageWithLayout = () => {
  const [gameName, setGameName] = useState("");

  const {
    data: games,
    isLoading: isLoadingGames,
    isError: isErrorGames,
  } = useGames({
    gameName,
  });

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Name" onChange={(e) => setGameName(e.target.value)} />
      {isLoadingGames && <p>Loading games...</p>}
      {isErrorGames && <p>Error on loading games!</p>}
      {games && <GameList games={games} />}
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default HomePage;
