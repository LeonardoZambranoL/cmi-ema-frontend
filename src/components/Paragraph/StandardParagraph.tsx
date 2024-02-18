import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function StandardParagraph({ children }: Props) {
  return <span className="text-sm md:text-lg lg:text-xl">{children}</span>;
}
