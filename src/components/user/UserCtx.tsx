"use client";

import { User, Vip } from "@prisma/client";
import { usePrivy } from "@privy-io/react-auth";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type UserContextType = {
  user:
    | (User & {
        vips?: Vip[];
      })
    | null;
  setUser: (User: User) => void;
  updateUser: (user: Partial<User>) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const updateUser = (user: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...(user as User) }));
  };

  const { authenticated } = usePrivy();
  useEffect(() => {
    if (authenticated) {
      fetch("/api/users/me")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setUser(data);
          }
        });
    }
  }, [authenticated]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
