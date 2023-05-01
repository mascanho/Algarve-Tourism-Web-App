import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function GET(request: Request) {
  // const email = body.email;

  const user = await prisma.user.findUnique({
    where: { email: "mascanho@sapo.pt" },
    select: { id: true, name: true, email: true },
  });

  if (user) {
    console.log(user);
  }

  return NextResponse.json(user);
}
