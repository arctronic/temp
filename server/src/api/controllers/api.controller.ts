import { User } from "@prisma/client";
import { LoginBody, RegisterBody, WaitListBody } from "../schema/api.schema";
import { apiService } from "../services/api.service";
import { handleClientError, handleLibraryError } from "../utils/error.util";
import { Request, Response } from "express";
import { env } from "../../config";
export const apiController = {
  login: async (req: Request<{}, {}, LoginBody>, res: Response) => {
    const { data } = req.body;

    let user: User | null = null;

    // Check if user exists
    try {
      user = await apiService.findUserByEmail(data.user.email);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!user) {
      return handleClientError(400, "User does not exist", res);
    }

    // Verify password
    let arePasswordsSame = false;
    try {
      arePasswordsSame = await apiService.verifyPassword(
        user.password,
        data.user.password
      );
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (!arePasswordsSame) {
      return handleClientError(403, "Wrong credentials", res);
    } else {
      const accessToken = env.accessTokenSecret;
      return res.status(200).json({
        accessToken,
      });
    }
  },

  register: async (req: Request<{}, {}, RegisterBody>, res: Response) => {
    const { data } = req.body;

    // Check if user exists
    let user: User | null = null;
    try {
      user = await apiService.findUserByEmail(data.user.email);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    if (user) {
      return handleClientError(400, "User already exists", res);
    }

    // Hash password
    let hashedPassword: string;
    try {
      hashedPassword = await apiService.hashPassword(data.user.password);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    try {
      await apiService.createUser(
        data.user.name,
        data.user.email,
        hashedPassword,
        data.user.phoneNumber || null
      );
    } catch (error) {
      return handleLibraryError(error, res);
    }

    return res.status(201).json({
      message: "User created",
    });
  },

  waitList: async (req: Request<{}, {}, WaitListBody>, res: Response) => {
    const { data } = req.body;

    try {
      await apiService.addToWaitList(data.email, data.createdAt);
    } catch (error) {
      return handleLibraryError(error, res);
    }

    return res.status(200).json({
      message: "You have been added to the waitlist",
    });
  },

  getWaitList: async (req: Request, res: Response) => {
    const waitList = await apiService.getWaitList();
    return res.status(200).json({ waitList });
  },
};
