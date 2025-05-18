"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePrivy } from "@privy-io/react-auth";
import { useUser } from "./UserCtx";
import { useState } from "react";
import { Input } from "../ui/input";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

export function LinkPhoneButton() {
  const { ready, authenticated } = usePrivy();
  const { user } = useUser();

  if (!ready || !authenticated) {
    return <Button disabled>Set Phone</Button>;
  }
  if (!user?.phoneNumber) {
    return <LinkPhoneDialog />;
  }
  return (
    <div className="flex gap-2 items-center rounded-md border pl-4">
      {user.phoneNumber}
      <LinkPhoneDialog btnText="Edit" />
    </div>
  );
}

export const PhoneFormSchema = z.object({
  phoneNumber: z.string().refine((val) => {
    const reg = /^1[3-9]\d{9}$/;
    return reg.test(val);
  }, "Invalid phone number"),
});

export function PhoneForm({
  defaultValues,
  onSubmit,
  submiting,
}: {
  defaultValues: {
    phoneNumber: string;
  } | null;
  onSubmit: (data: z.infer<typeof PhoneFormSchema>) => void;
  submiting?: boolean;
}) {
  const form = useForm<z.infer<typeof PhoneFormSchema>>({
    mode: "onBlur",
    resolver: zodResolver(PhoneFormSchema),
    defaultValues: {
      phoneNumber: defaultValues?.phoneNumber || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="phoneNumber"
          disabled={submiting}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={submiting}>
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default function LinkPhoneDialog({ btnText }: { btnText?: string }) {
  const [open, setOpen] = useState(false);
  const { user, updateUser } = useUser();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{btnText || "Set Phone"}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Phone</DialogTitle>
        </DialogHeader>
        <PhoneForm
          defaultValues={{
            phoneNumber: user?.phoneNumber || "",
          }}
          onSubmit={(data) => {
            fetch("/api/users/me", {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phoneNumber: data.phoneNumber,
              }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.error) {
                  toast.error(data.error);
                  return;
                }
                updateUser({ phoneNumber: data.phoneNumber });
                toast.success("Phone number set successfully!");
              });
            setOpen(false);
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
