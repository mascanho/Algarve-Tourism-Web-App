import prisma from "./prismadb";

export default async function getReviews(): Promise<any> {
  const reviews: any = await prisma.reviews
    .findMany
    // {
    //   where: {
    //     slug: slug,
    //   },
    // });
    ();

  return reviews;
}
