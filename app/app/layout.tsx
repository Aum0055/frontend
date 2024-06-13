import { Dashboard } from "@/components/template/dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "auth",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Dashboard>{children}</Dashboard>;
}
