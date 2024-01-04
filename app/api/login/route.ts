import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function GET(request: { body?: { email?: string } }) {
  const email = request?.body?.email;

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, name: true, email: true },
  });

  if (user) {
    // console.log(user);
  }

  return NextResponse.json(user);
}
