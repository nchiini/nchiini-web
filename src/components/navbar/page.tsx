"use client";
import { getTranslation } from "@/utils/translation";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [searchString, setSearchString] = useState<string>();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [menuItem, setMenuItem] = useState<string>("");
  const [lang, setLang] = useState<string>("En");
  const path = usePathname();
  const language = useSearchParams().get("lang");

  let t = getTranslation(String(language)).Header;
  // const menuItems = [t.home, t.contact_us, t.about_us];
  const menuItems = [
    {
      route: "home",
      name: t.home,
    },
    {
      route: "Contact Us",
      name: t.contact_us,
    },
    {
      route: "About Us",
      name: t.about_us,
    },
  ];
  const router = useRouter();
  return path?.includes("/auth") || path?.includes("/dashboard") ? (
    <></>
  ) : (
    <div className="w-full fixed z-10 bg-primary-background top-0 left-0">
      <div className="gap-4 p-4 relative flex max-w-[1300px] w-full justify-between items-center mx-auto">
        <Link
          href={"/"}
          className="text-primary-main text-lg md:text-2xl lg:text-4xl font-[700]"
        >
          Nchiini
        </Link>
        <div className="relative max-w-[250px] md:max-w-[300px] lg:max-w-[400px] z-20 w-full">
          <form className="flex items-center z-20 w-full gap-3 relative max-w-[250px] md:max-w-[300px] lg:max-w-[400px] rounded-xl">
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
              name="text"
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              placeholder={t.search_tribe_placeholder}
            />
          </form>
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
              title={elem.name}
              href={`/${
                elem.route.toLowerCase().split(" ")[0] == "home"
                  ? ""
                  : elem.route.toLowerCase().split(" ")[0]
              }?lang=${language ? language : "en"}`}
              className={`${
                path?.includes(elem.route.toLowerCase().split(" ")[0]) ||
                (path == "/" && elem.route.toLowerCase() == "home")
                  ? "text-primary-main border-b-2 border-b-primary-main"
                  : "border-b-2 border-b-transparent"
              } lg:text-base text-xs`}
              key={index}
            >
              {elem.name}
            </Link>
          ))}
          <div
            onClick={() => {
              menuItem ? setMenuItem("") : setMenuItem("language");
            }}
            title="language"
            className="relative flex items-center cursor-pointer bg-white/5 hover:bg-white/10 duration-300 rounded-lg p-1 gap-4"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 p-1 bg-white/5 rounded hover:bg-white/10 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
            <div className=" p-1 rounded w-7 h-7 flex items-center justify-center">
              {lang}
            </div>
            {menuItem == "language" && (
              <div className="p-2 rounded-2xl flex flex-col gap-2 max-w-[200px] min-w-[200px] w-full absolute top-12 right-5 bg-black border border-primary-main/30">
                <button
                  onClick={() => {
                    router.push(`${path}?lang=en`);
                    setMenuItem("");
                    setLang("En");
                  }}
                  className="hover:bg-white/5 text-left flex justify-between rounded-xl p-3"
                >
                  {t.english}
                  <div className="text-primary-main/60">En</div>
                </button>
                <button
                  onClick={() => {
                    router.push(`${path}?lang=fr`);
                    setMenuItem("");
                    setLang("Fr");
                  }}
                  className="hover:bg-white/5 text-left flex justify-between rounded-xl p-3"
                >
                  {t.french}
                  <div className="text-primary-main/60">Fr</div>
                </button>
              </div>
            )}
          </div>
          <div
            title={t.profile}
            onClick={() => {
              menuItem ? setMenuItem("") : setMenuItem("menu");
            }}
            className="relative flex items-center gap-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 cursor-pointer h-7"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>{" "}
            {menuItem == "menu" && (
              <div className="p-2 rounded-2xl flex flex-col gap-2 max-w-[200px] min-w-[200px] w-full absolute top-12 right-5 bg-black border border-primary-main/30">
                <Link
                  className="hover:bg-white/5 rounded-xl p-3"
                  href={`/profile?lang=${language}`}
                >
                  {t.profile}
                </Link>
                <Link
                  className="hover:bg-white/5 rounded-xl p-3"
                  href={`/auth?q=sign-in&lang=${language}`}
                >
                  {t.log_out}
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
              href={`/${elem.route.toLowerCase().split(" ")[0]}?lang=${
                language ? language : "en"
              }`}
              onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
              className={`${
                path?.includes(elem.route.toLowerCase().split(" ")[0]) ||
                (path == "/tribes" && elem.route.toLowerCase() == "home")
                  ? "text-primary-main"
                  : ""
              } lg:text-base text-xs`}
              key={index}
            >
              {elem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
