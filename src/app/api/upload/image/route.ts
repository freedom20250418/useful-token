import { AuthTokenClaims, PrivyClient } from "@privy-io/server-auth";
import { PRIVY_APP_ID, PRIVY_APP_SECRET } from "@/constants/privy";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendAndPay } from "@/lib/arseeding";

const client = new PrivyClient(PRIVY_APP_ID!, PRIVY_APP_SECRET!);
const sizeLimit = 2 * 1024 * 1024; // 2MB

export async function POST(req: NextRequest) {
  const headers = new Headers(req.headers);
  const headerAuthToken = headers.get("Authorization")?.replace(/^Bearer /, "");
  const cookieAuthToken = req.cookies.get("privy-token")?.value;
  // const authToken = cookieAuthToken || headerAuthToken;
  // let claims: AuthTokenClaims;
  // try {
  //   claims = await client.verifyAuthToken(authToken!);
  // } catch (e: any) {
  //   return NextResponse.json({ error: e.message }, { status: 401 });
  // }

  const formData = await req.formData();
  const files = formData.getAll("files") as File[];
  const filesData = await Promise.all(
    files.map(async (file) => {
      const buffer = await file.arrayBuffer();
      return {
        name: file.name,
        type: file.type,
        size: file.size,
        buffer: Buffer.from(buffer),
      };
    })
  );
  console.log("filesData", filesData);

  const filesSend = await Promise.all(
    filesData.map(async (file) => {
      const { name, type, size, buffer } = file;
      const res = await sendAndPay(buffer, {
        tags: [
          { name: "Content-Type", value: type },
          { name: "name", value: name },
        ],
      });
      return res;
    })
  );

  console.log("filesSend", filesSend);
  return NextResponse.json(filesSend, {
    status: 200,
  });
}
