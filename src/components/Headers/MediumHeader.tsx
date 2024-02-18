import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MediumHeader({ children }: Props) {
  return (
    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">{children}</h1>
  );
}
