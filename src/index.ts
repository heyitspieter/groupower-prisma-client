import { Context } from "./index.d";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContext = async (ctx: any): Promise<Context> => {
  // Skip if you are not using a serverless environment
  ctx.callbackWaitsForEmptyEventLoop = false;

  return { ...ctx, prisma };
};
