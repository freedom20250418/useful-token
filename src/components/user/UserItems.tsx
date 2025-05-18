"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Item } from "@prisma/client";
import { useUser } from "../user/UserCtx";
import { RefreshCcw } from "lucide-react";
import AddItemDialog from "../items/UploadImageDialog";
import { ItemsTable } from "../items/ItemsTable";

export default function UserItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const { user } = useUser();
  const userId = user?.id;
  const fetchItems = async () => {
    setErrMsg(null);
    const response = await fetch("/api/items/me?pageSize=1000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to fetch items");
    }
    const data = await response.json();
    setItems(data.data);
  };

  useEffect(() => {
    if (userId) {
      fetchItems().catch((error) => {
        setErrMsg(error.message);
      });
    }
  }, [userId]);
  if (errMsg) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{errMsg}</p>
      </div>
    );
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Items
          <div className="flex items-center gap-2 ml-auto">
            <AddItemDialog />
            <Button onClick={fetchItems} size="icon">
              <RefreshCcw />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ItemsTable data={items} />
      </CardContent>
    </Card>
  );
}
