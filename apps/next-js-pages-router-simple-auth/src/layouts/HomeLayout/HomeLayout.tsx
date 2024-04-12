import { Header } from "@/components/Header/Header";
import { HomeLayoutProps } from "@/layouts/HomeLayout/HomeLayout.types";

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="p-8">{children}</div>
    </div>
  );
};
