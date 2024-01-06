import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import prisma from "../../libs/prismadb";

export async function POST(request: Request) {
  const userLogged = await getServerSession();
  const body = await request.json();
  const { review } = body;
  let pathname: any = headers();
  const url = pathname.get("referer");
  const slug = url.split("/").pop().split("?")[0];
  const AvatarPlaceholder = "/images/anonymous.png";

  const userEmail = userLogged?.user?.email;

  //Check if the user exists in the database
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  // if (!user) {
  //   return new Response(
  //     JSON.stringify({
  //       message: "User not found",
  //     }),
  //     {
  //       status: 401,
  //       headers: { "Content-Type": "application/json" },
  //     },
  //   );
  // }

  const reviews = await prisma.reviews.create({
    data: {
      review: review,
      name: userLogged?.user?.name || userLogged?.user?.email?.split("@")[0],
      email: userLogged?.user?.email,
      image: userLogged?.user?.image || AvatarPlaceholder,
      slug,
      createdAt: new Date(),
    },
  });

  console.log("Review: ", review);

  return NextResponse.json(reviews);
}
