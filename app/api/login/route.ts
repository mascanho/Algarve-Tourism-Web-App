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

  return NextResponse.json(user);
}
