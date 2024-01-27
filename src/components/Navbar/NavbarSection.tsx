import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  href: string;
  className: string;
};

const NavbarSection = ({ name, href, className }: Props) => {
  return (
    <Link
      href={href}
      className={`hover:text-gray-300 align-middle font-semibold ${className}`}
    >
      <div className="flex flex-row gap-2">
        <span className="">{name}</span>
      </div>
    </Link>
  );
};

export default NavbarSection;
