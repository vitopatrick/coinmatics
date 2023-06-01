import React from "react";
import Container from "../../../shared/container/Container";
import lowerLink from "./lowerLink";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { IconContext } from "react-icons";
import {
  companyLinks,
  investorLinks,
  supportLinks,
  tradersLinks,
} from "./links";

const Footer = () => {
  return (
    <footer className="relative bg-[#0c1839] text-white">
      <div>
        {/* <img src="/img/wave-3.svg" alt="img3" className="w-full" /> */}
        {/* <img src="/img/wave-1.svg" alt="img" className="w-full" /> */}
      </div>
      <Container>
        <MainFooter />
        <LowerFooter />
      </Container>
    </footer>
  );
};

function MainFooter() {
  return (
    <div className="flex items-center md:flex-row flex-col justify-between py-3">
      <div className="space-y-2 py-3 flex flex-1 flex-col items-center justify-center md:items-start">
        <p className="text-sm text-neutral-400">Feel free to contact us:</p>
        <h4 className="font-bold font-header text-textColor">
          hello@coinmatics.live
        </h4>
        <div className="flex items-center gap-3 mt-4">
          <IconContext.Provider value={{ size: "30px", color: "00f6b2" }}>
            <Fa.FaInstagramSquare />
            <Fa.FaFacebook />
            <Fa.FaTwitter />
            <Fa.FaMediumM />
            <Fa.FaLinkedin />
          </IconContext.Provider>
        </div>
      </div>
      <div className="flex-1 my-8 flex flex-col md:flex-row justify-between gap-8 md:gap-3">
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm text-neutral-400">Investor</h4>
          {investorLinks.map((link) => (
            <Link
              href={link.path}
              target="_blank"
              className="text-sm capitalize hover:text-textColor transition-all ease-in"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm text-neutral-400">Trader</h4>
          {tradersLinks.map((link) => (
            <Link
              href={link.path}
              target="_blank"
              className="text-sm capitalize hover:text-textColor transition-all ease-in"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm text-neutral-400">Company</h4>
          {companyLinks.map((link) => (
            <Link
              href={link.path}
              target="_blank"
              className="text-sm capitalize hover:text-textColor transition-all ease-in"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-3">
          <h4 className="text-sm text-neutral-400">Support</h4>
          {supportLinks.map((link) => (
            <Link
              href={link.path}
              className="text-sm capitalize hover:text-textColor transition-all ease-in"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function LowerFooter() {
  return (
    <div className="border-neutral-800 border-t py-6 flex gap-3 items-center justify-between md:flex-row flex-col-reverse">
      <div>
        <p className="text-neutral-400 text-sm">
          ©2023 Copytrading Solutions Limited
        </p>
      </div>
      <div className="flex items-center md:gap-4 md:flex-row flex-col gap-2 ">
        {lowerLink.map((link) => (
          <div key={link.id} className="text-sm">
            <Link href={link.path} target="_blank">
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
} 


export default Footer;
