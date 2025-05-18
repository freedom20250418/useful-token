"use client";

import { Button } from "@/components/ui/button";
import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function LoginButton() {
  const { login } = useLogin();
  const { ready, authenticated, user, logout } = usePrivy();
  if (!ready) {
    return <Button disabled>Loading...</Button>;
  }
  if (!authenticated) {
    return <Button onClick={login}>Log in</Button>;
  }
  return (
    <div className="flex gap-2 items-center rounded-md border pl-4">
      {user?.email?.address || user?.google?.name}
      <Button onClick={logout} size={"sm"}>
        Log out
      </Button>
    </div>
  );
}
