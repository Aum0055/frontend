import { Metadata } from "next";

export const metadata: Metadata = {
  title: "auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="h-[100svh]">{children}</section>;
}
