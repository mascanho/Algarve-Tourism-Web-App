import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  // If user already exists
  if (await prisma.user.findUnique({ where: { email } })) {
    console.log("User already exists", "From the API");
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
