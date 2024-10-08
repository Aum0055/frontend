import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "@/trpc/trpc/react";
import { headers } from "next/headers";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
          <TRPCReactProvider headers={headers()}>{children}</TRPCReactProvider>
          <Toaster richColors /></TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
