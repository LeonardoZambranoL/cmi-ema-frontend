import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  className: string;
  children ?: ReactNode;
};

const NavbarSection = ({ name, href, className, children }: Props) => {
  return (
    <Link
      href={href}
      className={`hover:text-gray-300 align-middle font-semibold ${className}`}
    >
      {children}
      <div className="flex flex-row gap-2">
        <span className="">{name}</span>
      </div>
    </Link>
  );
};

export default NavbarSection;
