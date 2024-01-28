import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SmallHeader({ children }: Props) {
  return (
    <span className="text-center font-bold text-sm md:text-lg lg:text-xl">
      {children}
    </span>
  );
}
