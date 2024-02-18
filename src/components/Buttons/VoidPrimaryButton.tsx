"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  voidFunc?: () => void;
};

export default function VoidPrimaryButton({
  children,
  className,
  type = undefined,
  voidFunc,
}: Props) {
  return (
    <div className="mt-2 flex flex-row justify-center gap-4 w-full">
      <Button
        type={type}
        className={`bg-background hover:bg-secondary border-solid border-2 border-primary text-primary font-semibold py-6 w-full ${className}`}
        onClick={voidFunc ? voidFunc : undefined}
      >
        <span className="truncate">{children}</span>
      </Button>
    </div>
  );
}
