import { LogOut } from "lucide-react";

export const HeaderSignOutButton = () => {
  return (
    <button className="flex gap-2 text-cyan-600" onClick={() => {}}>
      <p className="font-semibold">LOGOUT</p>
      <LogOut />
    </button>
  );
};
