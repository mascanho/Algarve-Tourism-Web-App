import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getServerSession } from "next-auth";
import prisma from "../../libs/prismadb";

export async function POST(request: Request) {
  const userLogged = await getServerSession();
  const body = await request.json();
  const { comment } = body;
  let pathname: any = headers();
  const url = pathname.get("referer");
  const slug = url.split("/").pop();
  const AvatarPlaceholder = "/images/anonymous.png";

  const userEmail = userLogged?.user?.email;
  const userComment = comment;

  // Check how many comments already exist for the user's email
  // const existingComments = await prisma.comment.count({
  //   where: {
  //     email: userEmail,
  //   },
  // });

  //Check if the user exists in the database
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  console.log(user, "This is the user");
  console.log(userComment, "This is the comment");

  // If the user has posted less than 5 comments, create a new comment
  // if (existingComments < 5) {
  const comments = await prisma.comments.create({
    data: {
      comment: comment,
      name: userLogged?.user?.name || userLogged?.user?.email?.split("@")[0],
      email: userLogged?.user?.email,
      image: userLogged?.user?.image || AvatarPlaceholder,
      slug,
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
