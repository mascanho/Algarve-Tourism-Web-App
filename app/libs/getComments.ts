import prisma from "../libs/prismadb";

export default async function getComments(): Promise<any> {
  const comments: any = await prisma.comments
    .findMany
    // {
    //   where: {
    //     slug: slug,
    //   },
    // });
    // console.log(comments, "from the GetComments");
    ();
  return comments;
}