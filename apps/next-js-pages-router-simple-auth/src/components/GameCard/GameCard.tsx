import { GameCardProps } from "@/components/GameCard/GameCard.types";
import Image from "next/image";

export const GameCard = ({ coverUrl, name }: GameCardProps) => {
  return (
    <div className="flex w-fit max-w-[250px] flex-col gap-2 overflow-hidden rounded-lg bg-gray-50 shadow-lg">
      <div className="relative h-[300px] w-[250px]">
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
