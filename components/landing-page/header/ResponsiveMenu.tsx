import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";
import { mobileNavigationLinks } from "./links";
import { AnimatePresence, motion } from "framer-motion";

const ResponsiveMenu = ({ show, onClose }: any) => {
  return (
    <AnimatePresence>
      <motion.section
        key={show}
        initial={{ x: "-999px" }}
        animate={{ x: 0 }}
        exit={{ x: "-999px" }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
        className={
          show
            ? "bg-black/30 h-screen w-screen fixed z-40 left-0 top-0 bottom-0 right-0 overflow-auto"
            : "hidden"
        }
      >
        <div className="h-screen w-[300px] bg-white py-6 px-4 ">
          <div className="flex items-center justify-between py-2">
            <Link href="/auth/sign-up">
              <img src="/img/logo.svg" alt="" />
            </Link>
            <Fa.FaTimes
              className="text-teal-400 text-2xl cursor-pointer"
              onClick={() => onClose(false)}
            />
          </div>
          <div className="font-header mt-3">
            {mobileNavigationLinks.map((link) => (
              <div>
                <h4 className="text-sm text-neutral-400">{link.title}</h4>
                <div className="flex flex-col text-sm ml-8 py-4 space-y-4">
                  {link.subMenu?.map((subLink: any) => (
                    <Link href={subLink.href} className="text-slate-800">
                      {subLink.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 font-header">
            <Link
              href="/auth/sign-in"
              className="border border-teal-400 font-bold text-teal-400 block px-4 py-3 rounded-xl text-center"
            >
              Log in
            </Link>
            <Link
              href="/auth/sign-up"
              className="bg-teal-400 text-white font-bold text-center rounded-xl px-4 py-3"
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
