import { AuthTokenClaims, PrivyClient } from "@privy-io/server-auth";
import { PRIVY_APP_ID, PRIVY_APP_SECRET } from "@/constants/privy";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);

export async function GET(req: NextRequest) {
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
  const result = await prisma.item.findMany({
    where: {
      privyUserId: userId,
    },
  });
  return NextResponse.json(result, {
    status: 200,
  });
}
