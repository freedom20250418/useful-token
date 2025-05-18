"use client";

import { PRIVY_APP_ID } from "@/constants/privy";
import { PrivyProvider } from "@privy-io/react-auth";
import { UserProvider } from "./user/UserCtx";

// dayjs
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={PRIVY_APP_ID}
      //   clientId="your-app-client-id"
      config={{}}
    >
      <UserProvider>{children}</UserProvider>
    </PrivyProvider>
  );
}
