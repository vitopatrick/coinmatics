import Link from "next/link";
import React, { useState } from "react";
import * as Md from "react-icons/md";
import { desktopNavigationLinks } from "./links";
import ResponsiveMenu from "./ResponsiveMenu";
import Container from "../../../shared/container/Container";

const Navbar = () => {
  const [hide, setHide] = useState<Boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<Boolean>(false);
  const [subLinks, setSubLinks] = useState<any>();
  // track the menu hovered

  function hoveredMenu(id: number) {
    const menu = desktopNavigationLinks.find((link) => link.id === id);
    console.log(menu);
    setSubLinks(menu);
    const setMenu = desktopNavigationLinks.find((link) =>
      link.subMenu ? true : false
    );
    console.log(setMenu);
  }

  return (
    <nav className="flex items-center justify-between ">
      <div className="block md:hidden justify-self-start">
        <Md.MdMenu
          className="text-teal-400 text-3xl cursor-pointer"
          onClick={() => setHide(true)}
        />
      </div>
      <div>
        <Link href="/">
          <img src="/img/logo.svg" alt="" />
        </Link>
      </div>
      <div className="space-x-8 hidden md:flex font-header">
        {desktopNavigationLinks.map((link: any) => (
          <>
            <Link
              href={link.href}
              className="flex items-center gap-1 text-sm"
              key={link.id}
              onMouseEnter={() => hoveredMenu(link.id)}
            >
              {link.title} {link.subMenu ? <Md.MdKeyboardArrowDown /> : null}
            </Link>
          </>
        ))}
      </div>
      <div
        onMouseOut={() => setShowSubMenu(false)}
        className={
          showSubMenu
            ? "absolute top-12 left-0 py-4 font-header w-full bg-red-500"
            : "hidden"
        }
      >
        <Container>hello</Container>
      </div>
      <div className="font-header space-x-4 hidden md:block">
        <Link
          href="/auth/sign-in"
          className="border border-teal-300 rounded px-6 py-3 text-teal-300"
        >
          Log in
        </Link>
        <Link
          href="/auth/sign-up"
          className="text-white rounded bg-teal-400 px-6 py-3"
        >
          Get Started
        </Link>
      </div>
      <ResponsiveMenu show={hide} onClose={setHide} />
    </nav>
  );
};

export default Navbar;
