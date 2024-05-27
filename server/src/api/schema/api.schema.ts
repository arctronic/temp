import { z } from "zod";

export const apiSchema = {
  registerSchema: z.object({
    body: z.object({
      data: z.object({
        user: z.object({
          email: z.string(),
          name: z.string(),
          phoneNumber: z.string().optional(),
          password: z.string().min(8),
        }),
      }),
    }),
  }),

  loginSchema: z.object({
    body: z.object({
      data: z.object({
        user: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
      }),
    }),
  }),

  waitListSchema: z.object({
    body: z.object({
      data: z.object({
        email: z.string().email(),
        createdAt: z.string(),
      }),
    }),
  }),
};

export type RegisterBody = z.infer<typeof apiSchema.registerSchema>["body"];
export type LoginBody = z.infer<typeof apiSchema.loginSchema>["body"];
export type WaitListBody = z.infer<typeof apiSchema.waitListSchema>["body"];
