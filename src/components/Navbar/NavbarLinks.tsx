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

      <NavbarSection name="About" href="/about" className={className} />
      <NavbarSection name="Olimpiadas" href="/olympics" className={className} />
      <NavbarSection name="Recursos" href="/resources" className={className} />
      <NavbarSection name="Contacto" href="/contact" className={className} />
    </>
  );
};

export default NavbarLinks;
