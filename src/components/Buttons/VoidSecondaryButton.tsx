"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  voidFunc?: () => void;
};

export default function VoidSecondaryButton({
  children,
  className,
  type = undefined,
  voidFunc,
}: Props) {
  return (
    <div className="mt-2 flex flex-row justify-center gap-4 w-full">
      <Button
        type={type}
        className={`bg-primary hover:bg-primary/80 text-secondary font-semibold py-6 w-full min-w-24 ${className}`}
        onClick={voidFunc ? voidFunc : undefined}
      >
        <span className="truncate">{children}</span>
      </Button>
    </div>
  );
}
