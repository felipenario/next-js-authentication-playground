import { HeaderSignOutButton } from "@/components/HeaderSignOutButton/HeaderSignOutButton";
import { Gamepad2 } from "lucide-react";

export const Header = () => {
  return (
    <div className="relative left-0 top-0 flex h-20 w-full items-center justify-between p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <Gamepad2 className="size-12" />
        <p className="text-2xl">Games</p>
      </div>
      <HeaderSignOutButton />
    </div>
  );
};
