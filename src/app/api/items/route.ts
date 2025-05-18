import { AuthTokenClaims, PrivyClient } from "@privy-io/server-auth";
import { PRIVY_APP_ID, PRIVY_APP_SECRET } from "@/constants/privy";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const pageNumber = Number(searchParams.get("pageNumber")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const offset = (pageNumber - 1) * pageSize;
  const ethWalletAddress = searchParams.get("ethWalletAddress") || "";
  const total = await prisma.item.count();
  const result = await prisma.item.findMany({
    skip: offset,
    take: pageSize,
    where: {
      ethWalletAddress: {
        contains: ethWalletAddress,
      },
    },
  });
  return NextResponse.json(
    { data: result, total },
    {
      status: 200,
    }
  );
}

export async function POST(req: NextRequest) {
  const headers = new Headers(req.headers);
  const headerAuthToken = headers.get("Authorization")?.replace(/^Bearer /, "");
  const cookieAuthToken = req.cookies.get("privy-token")?.value;
  const authToken = cookieAuthToken || headerAuthToken;
  let claims: AuthTokenClaims;
  try {
    claims = await client.verifyAuthToken(authToken!);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 401 });
  }

  const userId = claims.userId;
  const body = await req.json();

  const item = await prisma.item.create({
    data: {
      ...body,
      privyUserId: userId,
    },
  });

  return NextResponse.json(item, {
    status: 200,
  });
}
