import { ReactNode } from "react";
import { UserCard } from "./UserCard";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen text-white">
      <UserCard />
      {children}
    </div>
  );
};
