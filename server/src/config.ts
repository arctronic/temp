import { config } from "dotenv";
config();

export const env = {
  port: process.env.PORT || 1000,
  databaseUrl: process.env.DATABASE_URL || "",
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || "access-token-secret",
};
