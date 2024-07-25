import React from "react";
import LogoText from "./logo-text";
import Link from "next/link";
import Links from "../ui/icons/link";
import User from "../ui/icons/user";
import NavLink from "./nav-link";

export default function Header() {
  return (
    <header className="py-3">
      <div className="bg-white flex justify-between items-center rounded-xl py-4 pr-4 pl-6">
        <LogoText />
        <nav>
          <ul className="flex items-center">
            <li>
              <NavLink icon={<Links />} label="Links" link="#links" />
            </li>
            <li>
              <NavLink link="profile" icon={<User />} label="Profile details" />
            </li>
          </ul>
        </nav>
        <Link
          className="rounded-lg text-[1rem] leading-6 font-semibold text-han-purple border-[1px] py-[11px] px-[27px] border-han-purple"
          href="#"
        >
          Preview
        </Link>
      </div>
    </header>
  );
}
