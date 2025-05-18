"use client";

import Portal from "@/components/graphics/portal";
import { useLogin } from "@privy-io/react-auth";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useLogin({
    onComplete: () => router.push("/dashboard"),
  });

  return (
    <>
      <Head>
        <title>Login · Privy</title>
      </Head>

      <main className="flex min-h-screen min-w-full">
        <div className="flex bg-privy-light-blue flex-1 p-6 justify-center items-center">
          <div>
            <div>
              <Portal style={{ maxWidth: "100%", height: "auto" }} />
            </div>
            <div className="mt-6 flex justify-center text-center">
              <Button onClick={login} size={"lg"}>
                Log in
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
