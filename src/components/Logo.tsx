import React from "react";
import Image from "next/image";

type Props = {
    dimension: number;
    className: string;
}

export default function Logo({dimension, className}: Props){
  return <Image src="/logo.png" width={dimension} height={dimension} alt="CMI" className={className}/>;
};
