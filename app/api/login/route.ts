import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function GET(request: Request) {
  const email = request?.body?.email;

  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, name: true, email: true },
  });

  if (user) {
    console.log(user);
  }

  return NextResponse.json(user);
}
