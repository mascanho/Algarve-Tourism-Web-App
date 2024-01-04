import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function GET(req: NextApiRequest) {
  const email = req?.body?.email as string;
  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, name: true, email: true },
  });

  if (user) {
    console.log(user);
  }

  return NextResponse.json(user);
}
