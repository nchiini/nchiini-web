"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [searchString, setSearchString] = useState<string>();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [menuItem, setMenuItem] = useState<boolean>(false);
  const path = usePathname()
  const menuItems = ["Home", "Contact Us", "About Us"];
  return path?.includes("/auth") || path?.includes("/dashboard") ? (
    <></>
  ) : (
    <div
      onClick={() => {
        menuItem ? setMenuItem(false) : undefined;
      }}
      className="w-full fixed bg-black top-0 left-0"
    >
      <div className="gap-4 p-4 relative flex max-w-[1300px] w-full justify-between items-center mx-auto">
        <Link
          href={"/tribes"}
          className="text-primary-main text-lg md:text-2xl lg:text-4xl font-[700]"
        >
          Nchiini
        </Link>
        <div className="relative max-w-[250px] md:max-w-[300px] lg:max-w-[400px] z-20 w-full">
          <div className="flex items-center z-20 w-full gap-3 relative max-w-[250px] md:max-w-[300px] lg:max-w-[400px] rounded-xl">
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
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              placeholder="Search tribe here..."
            />
          </div>
          {searchString && (
            <div className="w-full absolute z-20 bg-grey-1/60 border border-t-0 rounded-b-xl border-primary-main/20 backdrop-blur-lg overflow-scroll h-[260px] top-[40px]">
              <div className="p-3 cursor-pointer hover:bg-white/5">Oku</div>
              <div className="p-3 cursor-pointer hover:bg-white/5">Nkambe</div>
              <div className="p-3 cursor-pointer hover:bg-white/5">Ndu</div>
            </div>
          )}
          <div
            className={
              searchString
                ? `absolute border rounded-xl border-primary-main/30 z-10 p-2 top-0 left-0 w-full h-[300px]`
                : `absolute border rounded-xl border-primary-main/30 z-10 p-2 top-0 left-0 w-full h-full`
            }
          ></div>
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
          <div
            onClick={() => {
              setMenuItem(!menuItem);
            }}
            className="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 cursor-pointer h-9"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            {menuItem && (
              <div className="p-4 rounded-2xl flex flex-col gap-2 max-w-[200px] min-w-[200px] w-full absolute top-16 right-5 bg-black border border-primary-main/30">
                <Link
                  className="hover:bg-primary-main/5 rounded-xl p-2"
                  href={"/profile"}
                >
                  Profile
                </Link>
                <Link
                  className="hover:bg-primary-main/5 rounded-xl p-2"
                  href={"/auth?q=sign-in"}
                >
                  log out
                </Link>
              </div>
            )}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
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
      {mobileMenu && (
        <div className="fixed z-50 flex flex-col gap-6 top-[60px] py-14 left-0 h-full bg-black p-4 w-full">
          {menuItems.map((elem, index) => (
            <Link
              href={`/${elem.toLowerCase().split(" ")[0]}`}
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className={`${
                path?.includes(elem.toLowerCase().split(" ")[0]) ||
                (path == "/tribes" && elem.toLowerCase() == "home")
                  ? "text-primary-main"
                  : ""
              } lg:text-base text-xs`}
              key={index}
            >
              {elem}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
