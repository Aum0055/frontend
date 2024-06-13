import { Metadata } from "next";
import SignIN_Client from "./client";

export const metadata: Metadata = {
  title: "auth sign in",
};

export default function Page() {
  return <SignIN_Client />;
}
