import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function BigHeader({children}: Props) {
    return (
          <div className="container flex flex-col items-center text-center w-full">
            <h1 className="font-bold text-2xl md:text-5xl lg:text-7xl">{children}</h1>
          </div>
    );
  }
  