"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UploadImage } from "./UploadImage";
import { usePrivy } from "@privy-io/react-auth";
import { Item } from "@prisma/client";

export default function UploadImageDialog({
  onSuccess,
  onError,
}: {
  onSuccess?: (vip: Item) => void;
  onError?: (msg: string) => void;
}) {
  const { ready, authenticated } = usePrivy();
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button disabled={!ready || !authenticated}>
          <Plus className="mr-2 h-4 w-4" />
          Upload Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Image</DialogTitle>
        </DialogHeader>
        <UploadImage />
      </DialogContent>
    </Dialog>
  );
}
