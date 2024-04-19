"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [path, setPath] = useState<string>();
  useEffect(() => {
    var url = window.location.pathname;
    setPath(url);
  }, []);
  const menuItems = ["Home", "Contact Us", "About Us", "Profile"];
  return path?.includes("/auth") ? (
    <></>
  ) : (
    <div className="w-full absolute top-0 left-0">
      <div className="gap-4 p-4 flex max-w-[1300px] w-full justify-between items-center mx-auto">
        <div className="text-primary-main text-lg md:text-2xl lg:text-4xl font-[700]">Nchiini</div>
        <div className="flex items-center max-w-[250px] md:max-w-[300px] lg:max-w-[400px] w-full gap-3 border-primary-main border rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 ml-3 text-primary-main"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            className=" outline-none pl-0 placeholder:text-white/50 p-3 w-full text-xs"
            type="text"
            placeholder="Search tribe here..."
          />
        </div>
        <div className="md:flex items-center hidden gap-10">
          {menuItems.map((elem, index) => (
            <Link
              href={`/${elem.toLowerCase().split(" ")[0]}`}
              className={`${
                path?.includes(elem.toLowerCase().split(" ")[0]) ||
                (path == "/tribes" && elem.toLowerCase() == "home")
                  ? "text-primary-main border-b-2 border-b-primary-main"
                  : "border-b-2 border-b-transparent"
              } lg:text-base text-xs`}
              key={index}
            >
              {elem}
            </Link>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 cursor-pointer flex md:hidden h-9 text-primary-main"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
