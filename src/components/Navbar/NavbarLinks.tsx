import React from "react";
import NavbarSection from "./NavbarSection";
import ThemeSwitcher from "@/components/Themes/ThemeSwitcher";
import Providers from "@/app/providers";

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
      <Providers>
        <div className={className}>
          <ThemeSwitcher />
        </div>
      </Providers>
    </>
  );
};

export default NavbarLinks;
