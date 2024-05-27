import { hash, verify } from "argon2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const apiService = {
  hashPassword: async (password: string) => {
    return await hash(password);
  },
  verifyPassword: async (databasePassword: string, password: string) => {
    return await verify(databasePassword, password);
  },
  findUserByEmail: async (email: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  },

  createUser: async (
    name: string,
    email: string,
    hashedPassword: string,
    phoneNumber: string | null
  ) => {
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword, phoneNumber },
    });
    return user;
  },

  addToWaitList: async (email: string, createdAt: string) => {
    const waitList = await prisma.waitList.create({
      data: { email, createdAt },
    });
    return waitList;
  },

  getWaitList: async () => {
    const waitList = await prisma.waitList.findMany({
      select: {
        email: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return waitList;
  },
};
