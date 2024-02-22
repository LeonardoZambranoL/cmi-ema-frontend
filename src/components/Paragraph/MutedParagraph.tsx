import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MutedParagraph({ children }: Props) {
  return (
    <span className="text-sm md:text-lg lg:text-xl text-muted-foreground whitespace-pre-line">
      {children}
    </span>
  );
}
