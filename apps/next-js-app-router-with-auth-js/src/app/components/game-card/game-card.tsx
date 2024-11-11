import { GameCardProps } from "@/app/components/game-card/game-card.types";
import Image from "next/image";

export const GameCard = ({ coverUrl, name }: GameCardProps) => {
  return (
    <div className="flex flex-[1_1_250px] flex-col gap-2 overflow-hidden rounded-lg bg-gray-50 shadow-lg">
      <div className="relative h-[300px] w-[100%]">
        <Image
          className="rounded-lg"
          src={coverUrl}
          alt={`${name} cover art.`}
          quality={100}
          fill
        />
      </div>
      <div className="p-3">
        <p className="text-xl font-medium">{name}</p>
      </div>
    </div>
  );
};
