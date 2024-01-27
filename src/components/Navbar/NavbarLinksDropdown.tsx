import React from "react";
import NavbarSection from "./NavbarSection";
import { DropdownMenuItem, DropdownMenuSeparator } from "../ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons/faSignOut";

type Props = {
  className: string;
}

const NavbarLinks = ({className}: Props) => {
  className = `flex items-center justify-center ${className}`;
  return (
    <>
      <DropdownMenuItem>
        <NavbarSection name="Home" href="/" className={className} />
      </DropdownMenuItem>
      <DropdownMenuItem><NavbarSection
        name="About"
        href="/"
        className={className}
      /></DropdownMenuItem>
      <DropdownMenuItem>
        <NavbarSection
          name="Services"
          href="/"
          className={className}
        />
      </DropdownMenuItem>
      <DropdownMenuItem>
        <NavbarSection
          name="Contact"
          href="/"
          className={className}
        />
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <FontAwesomeIcon icon={faSignOut}/>
        <NavbarSection
          name="&nbsp;&nbsp;Logout"
          href="/"
          className={className}
        />
      </DropdownMenuItem>
    </>
  );
};

export default NavbarLinks;
