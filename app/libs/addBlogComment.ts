"use server";

import prisma from "@/app/libs/prismadb";
import { getServerSession } from "next-auth/next";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

export async function createComment(data: FormData, slug: any) {
  // Get the full url of where the comment is being added
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";

  // change the url to only containg the "/slug"
  const url = fullUrl?.split("/")?.pop()?.split("?")[0];

  const comment = data.get("comment") as string;

  // Get the user logged in: email, image
  const session = await getServerSession();

  await prisma.comments.create({
    data: {
      comment,
      name: session?.user?.name || "Anonymous",
      email: session?.user?.email || "anonymous",
      image: session?.user?.image || null,
      slug: url,
    },
  });
  revalidatePath(`/blog/${url}`);

  return { success: true };
}
