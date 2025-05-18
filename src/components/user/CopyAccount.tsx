"use client";

import { Button } from "@/components/ui/button";
import { usePrivy } from "@privy-io/react-auth";
import { Copy } from "lucide-react";
import { toast } from "sonner";

export default function CopyAccount() {
  const { ready, authenticated, user } = usePrivy();
  if (!ready || !authenticated || !user?.id) {
    return null;
  }
  return (
    <Button
      variant={"outline"}
      className="flex gap-2 items-center pr-0"
      onClick={() => {
        navigator.clipboard.writeText(user.id);
        toast.success("Copied to clipboard", {
          description: "Your account ID has been copied to the clipboard.",
        });
      }}
    >
      {user.id}
      <Copy className="ml-auto" />
    </Button>
  );
}
