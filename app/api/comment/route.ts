import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "../../libs/prismadb";

export async function POST(request: Request) {
  const userLogged = await getServerSession();
  const body = await request.json();
  const { comment } = body;

  // const userEmail = userLogged?.user?.email;

  // Check how many comments already exist for the user's email
  // const existingComments = await prisma.comment.count({
  //   where: {
  //     email: userEmail,
  //   },
  // });

  // If the user has posted less than 5 comments, create a new comment
  // if (existingComments < 5) {
  const comments = await prisma.comments.create({
    data: {
      comment: comment,
      name: userLogged?.user?.name,
      email: userLogged?.user?.email,
      image: userLogged?.user?.image,
      // createdAt: new Date(),
    },
  });

  return NextResponse.json(comments);
  // } else {
  // If the user has posted 5 or more comments, return an error response
  // return new Response(
  //   "You have reached the comment limit. Chill for a bit!",
  //   {
  //     status: 400,
  //     headers: { "Content-Type": "text/plain" },
  //   }
  // );
  // }
}
