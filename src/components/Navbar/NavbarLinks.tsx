import React from "react";
import NavbarSection from "./NavbarSection";

type Props = {
  className: string;
};

const NavbarLinks = ({ className }: Props) => {
  className = `flex items-center justify-center ${className}`;
  return (
    <>
      <NavbarSection name="Home" href="/" className={className} />

      <NavbarSection name="About" href="/" className={className} />
      <NavbarSection name="Services" href="/" className={className} />
      <NavbarSection name="Contact" href="/" className={className} />
    </>
  );
};

export default NavbarLinks;
