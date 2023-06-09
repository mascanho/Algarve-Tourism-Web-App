import { PrismaClient } from "@prisma/client";

type Prisma = {
  comment: any;
  comments: any;
  email: any;
  user: Promise<any>;
  date: any;
  adapter: any;
};

declare global {
  var prisma: PrismaClient | undefined;
}

const client: any = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
