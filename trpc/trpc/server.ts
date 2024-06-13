import "server-only";

import { headers } from "next/headers";
import { appRouter } from "@/trpc/trpc/root";
import { createCallerFactory } from "@/trpc/trpc/trpc";


export const createCaller = createCallerFactory(appRouter);
export const api = createCaller({})



export type AppRouter = typeof appRouter;