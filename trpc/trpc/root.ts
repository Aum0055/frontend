import "server-only";
import { createTRPCRouter } from "@/trpc/trpc/trpc";
import { auth } from "@/trpc/api/routers/auth";
 
export const appRouter = createTRPCRouter({
    auth
});

export type AppRouter = typeof appRouter;