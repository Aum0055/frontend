import { createTRPCRouter, publicProcedure } from "@/trpc/trpc/trpc";
import { TRPCError } from "@trpc/server";
import { cookies } from "next/headers";
import { z } from "zod";
import axios from "axios";
import { redirect } from "next/navigation";
 
const http = "http://172.17.81.156:8080";

export const auth = createTRPCRouter({
    singIn: publicProcedure
        .input(z.object({ email: z.string().email(), password: z.string() }))
        .mutation(async ({ input }) => {
            const { email, password } = input;
 
            const res = await axios
                .post("http://172.17.81.156:8080/api/auth/login", {
                    email: email,
                    password: password,
                })
            if (res.status == 200) {
                let resAuth = res.data?.token || ''
                cookies().set({
                    name: "token",
                    value: resAuth,
                    httpOnly: true,
                    path: "/",
                    secure: true,
                });
                return 'success';
            }

            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: 'error.message',
            });

        }),
    test: publicProcedure
        .query(() => {
            return 'sss'
        })
});
