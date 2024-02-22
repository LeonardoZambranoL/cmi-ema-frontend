"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
