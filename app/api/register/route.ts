import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  const userImage = "/images/anonymous.png";
  const initialLetter = email.charAt(0);

  // If user already exists
  if (await prisma.user.findUnique({ where: { email } })) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword,
      image: "",
      initials: initialLetter,
    },
  });

  return NextResponse.json(user);
}
