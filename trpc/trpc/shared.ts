import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
 
 import { type AppRouter } from "@/trpc/trpc/root";
import SuperJSON from "superjson";

export const transformer = SuperJSON;

const getBaseUrl = (): string => {
  try {
    const baseUrl =   "http://localhost:5500";
    return baseUrl;
  } catch (error) {
    console.error("Failed to get base URL", error);
    return "http://localhost:3000"; // default value in case of error
  }
};

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;