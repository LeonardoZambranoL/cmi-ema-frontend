import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function BigHeader({ children }: Props) {
  return (
    <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl whitespace-pre-line">{children}</h1>
  );
}
