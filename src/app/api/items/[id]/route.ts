import { PrivyClient } from "@privy-io/server-auth";
import { PRIVY_APP_ID, PRIVY_APP_SECRET } from "@/constants/privy";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const itemId = (await params).id;
  const result = await prisma.item.findUnique({
    where: {
      arweaveItemId: itemId,
    },
  });

  return NextResponse.json(
    { data: result },
    {
      status: 200,
    }
  );
}
