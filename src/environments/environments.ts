import path from "path";
import dotenv from "dotenv";
import { IEnvironments } from "./IEnvironments";

dotenv.config();

const envFilePath = process.env.NODE_ENV === "production"
  ? path.resolve(__dirname, "../../.env.production")
  : path.resolve(__dirname, "../../.env");

dotenv.config({ path: envFilePath });

export const environments: IEnvironments = {
  production: process.env.NODE_ENV === "production",
  clientId: process.env.CLIENT_ID || "",
  apiKey: process.env.API_KEY || "",
  database: process.env.DATABASE_URL || "",
};