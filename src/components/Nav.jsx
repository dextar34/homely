import React from "react";
import cn from "../lib/cn";
import Logo from "/img/logo.png";
import Pic from "./layer/Pic";
import Container from "./layer/Container";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import List from "./layer/List";

const navData = [
  {
    item: "home",
    path: "/",
  },
  {
    item: "about",
    path: "/about",
  },
  {
    item: "shop",
    path: "/shop",
  },
  {
    item: "contact",
    path: "/contact",
  },
  {
    icon: <IoCartOutline />,
    path: "/",
  },
  {
    icon: <CgProfile />,
    path: "/",
  },
];

const Nav = ({ className }) => {
  return (
    <nav className={cn(className, "font-inter")}>
      <Container className={"my-10"}>
        <div className="main flex justify-between">
          <div className="logo">
            <Pic src={Logo} href="/" />
          </div>
          <div className="navItems ">
            <ul className="flex text-base text-black capitalize items-center gap-x-16 justify-between">
            {navData.map((data, index) => (
                 <div className="hover:underline transition-all duration-300">
                    <List key={index} href={data.path} item={data.item} />
                    <List className={'text-3xl text-purple-800 font-bold'} key={index} href={data.path} item={data.icon} />
                 </div>
            ))}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
