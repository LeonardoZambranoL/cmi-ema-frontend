import React from "react";
import Image from "next/image";

type Props = {
    dimension: number;
    className: string;
}

export const Logo = ({dimension, className}: Props) => {
  return <Image src="/logo.png" width={dimension} height={dimension} alt="" className={className}/>;
};
