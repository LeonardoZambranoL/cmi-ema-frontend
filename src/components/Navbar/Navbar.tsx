import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import NavbarLinks from "./NavbarLinks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NavbarLinksDropdown from "./NavbarLinksDropdown";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <header className="bg-inherit p-4 justify-between items-center flex flex-col sticky top-0 z-50 shadow-md drop-shadow-lg">
      <div className="flex md:flex-row w-11/12 md:w-4/5 justify-between">
        <div className="flex flex-row gap-10">
          <Link href="/" className="flex flex-row gap-3">
            <div>
              <Logo dimension={35} />
            </div>
            <div>
              <span className="text-2xl font-bold">CMI</span>
            </div>
          </Link>
          <div className="flex flex-row gap-7">
            <NavbarLinks className="hidden md:flex text-sm text-foreground/60 font-bold" />
          </div>
        </div>
        <div
          id="links"
          className={`flex gap-10 mt-6 md:flex-row md:gap-4 md:mt-0 font-bold`}
        ></div>
        <div className="flex flex-row">
          <Button className="hidden font-semibold bg-primary text-secondary hover:bg-primary/80 rounded-xl">
            <FontAwesomeIcon icon={faSignOut} />
          </Button>
          <Button className="hidden md:flex font-semibold bg-primary text-secondary hover:bg-primary/80 rounded-xl">
            <FontAwesomeIcon icon={faUser} />
          </Button>
        </div>
        <div id="burger" className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="text-3xl">
                <FontAwesomeIcon className="cursor-pointer" icon={faBars} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <NavbarLinksDropdown className="" />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
