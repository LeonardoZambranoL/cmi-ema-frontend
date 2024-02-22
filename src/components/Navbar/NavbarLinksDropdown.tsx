import React from "react";
import NavbarSection from "./NavbarSection";
import { DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";
import Providers from "@/app/providers";
import ThemeSwitcher from "../Themes/ThemeSwitcher";

type Props = {
  className: string;
};

const NavbarLinks = ({ className }: Props) => {
  return (
    <>
      <DropdownMenuItem asChild>
        <NavbarSection
          name="Home"
          href="/"
          className={className}
        ></NavbarSection>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <NavbarSection
          name="About"
          href="/about"
          className={className}
        ></NavbarSection>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <NavbarSection
          name="Olimpiadas"
          href="/olympics"
          className={className}
        ></NavbarSection>
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="flex flex-row justify-start">
        <NavbarSection
          name="Recursos"
          href="/resources"
          className={className}
        />
      </DropdownMenuItem>
      <DropdownMenuItem asChild className="flex flex-row justify-start">
        <NavbarSection
          name="Contact"
          href="/contact"
          className={className}
        ></NavbarSection>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild className="flex flex-row justify-start">
        <div className="align-middle font-semibold">
          <Providers>
            <div className="flex flex-row gap-2">
              <ThemeSwitcher text="Tema" />
            </div>
          </Providers>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <NavbarSection name="&nbsp;&nbsp;Logout" href="/" className={className}>
          <FontAwesomeIcon icon={faSignOut} />
        </NavbarSection>
      </DropdownMenuItem>
    </>
  );
};

export default NavbarLinks;
