import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function handler(request: NextApiRequest) {
  const email = request?.body?.email as string;
  const user = await prisma?.user?.findUnique({
    where: { email: email },
    select: { id: true, name: true, email: true },
  });

  if (user) {
    console.log("\x1b[36m%s\x1b[0m", user, "This text is in cyan");
  }

  return NextResponse.json(user);
}
