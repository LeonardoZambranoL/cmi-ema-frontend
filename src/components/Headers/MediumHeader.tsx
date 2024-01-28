import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}


export default function MediumHeader({ children }: Props) {
  return (
    <div className="container flex flex-col items-center text-center w-full">
      <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">{children}</h1>
    </div>
  );
}
