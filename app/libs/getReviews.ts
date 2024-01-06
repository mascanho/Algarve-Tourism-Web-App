import prisma from "./prismadb";

export default async function getReviews(): Promise<any> {
  const reviews: any = await prisma.reviews
    .findMany
    // {
    //   where: {
    //     slug: slug,
    //   },
    // });
    // console.log(comments, "from the GetComments");
    ();

  console.log("reviews: ", reviews);

  return reviews;
}
