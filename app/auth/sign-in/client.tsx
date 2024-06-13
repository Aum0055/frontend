"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spin } from "antd";
import { LoaderCircle } from "lucide-react";
import { api } from "@/trpc/trpc/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignIN_Client() {
  const [value, setValue] = React.useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [error, setError] = React.useState<{
    email: boolean;
    password: boolean;
  }>({ email: false, password: false });
  const [loading, setLoading] = React.useState<boolean>(false);
  const { push } = useRouter();

  const mutation = api.auth.singIn.useMutation({
    onSuccess: async () => {
      toast.success("Sign in success.");
      push("/app");
    },
    onError: (error) => {
      toast.error("Error", { description: error.message });
      setLoading(false);
    },
  });

  const { data } = api.auth.test.useQuery();

  const handleSubmit = async () => {
    setLoading(true);
    if (value && (value?.email || "" != "") && (value?.password || "" != "")) {
      mutation.mutate({ email: value.email, password: value.password });
    } else {
      if (!value?.email) setError((dt) => ({ ...dt, email: true }));
      if (!value?.password) setError((dt) => ({ ...dt, password: true }));
      setLoading(false);
    }
  };

  return (
    <div className="h-full">
      <div className="mx-auto md:px-0 px-4 flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px] relative">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Sign in an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div className="z-10 space-y-2">
          <div className="space-y-2">
            <div className="flex flex-col gap-1">
              <Label>Email</Label>
              <Input
                placeholder="Email"
                type="email"
                onChange={(e) => {
                  setValue((dt) => ({ ...dt, email: e.target.value }));
                  setError((dt) => ({ ...dt, email: false }));
                }}
                onBlur={() =>
                  setValue((dt) => ({ ...dt, email: dt.email.trim() }))
                }
                disabled={loading}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label>Password</Label>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  setValue((dt) => ({ ...dt, password: e.target.value }));
                  setError((dt) => ({ ...dt, password: false }));
                }}
                onBlur={() =>
                  setValue((dt) => ({ ...dt, password: dt.password.trim() }))
                }
                disabled={loading}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Continue with
              </span>
            </div>
          </div>

          <Button className="w-full" onClick={handleSubmit} disabled={loading}>
            {loading && <LoaderCircle className="mr-2 animate-spin" />}Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
