"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const { tribes } = require("../../../../tribes.js");
const TribeDetails = () => {
  const tabs = [
    "Origin",
    "Food",
    "Dance",
    "Traditional rights",
    "Cultural heritage",
  ];
  const tab = useSearchParams().get("tab");
  return (
    <div>
      <div className="pb-3 flex gap-2 items-center text-white/40">
        <Link href={"/tribes"} className="text-white/70 text-[12px]">
          tribes
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
        <div className=" text-[12px]">{tribes[0].tribeName}</div>
        <div className="text-primary-main text-[12px]"> - {tab}</div>
      </div>
      <div className="md:text-4xl text-2xl font-[700]">
        {tribes[0].tribeName}
      </div>
      <div className="flex py-7 flex-wrap gap-3">
        {tabs.map((elem, index) => {
          return (
            <Link
              href={"/tribes/0?tab=" + elem}
              key={index}
              className={
                tab == elem
                  ? "rounded-full border-primary-main bg-primary-main text-white border px-6 py-2"
                  : `rounded-full border-white/30 text-white/40 border px-6 py-2`
              }
            >
              {elem}
            </Link>
          );
        })}
      </div>
      <div className="w-full flex flex-col pb-14 gap-4">
        {Array(6)
          .fill(1)
          .map((elem, index) => (
            <div
              key={index}
              className="rounded-2xl w-full bg-white/5 cursor-pointer duration-300 hover:border-white/20 flex border border-white/10 gap-4 p-3"
            >
              <img src="/tribes/Image1.png" className="w-[300px]" />
              <div className="w-full flex flex-col gap-3">
                <div className="text-primary-main text-2xl">
                  Section heading
                </div>
                <div className="line-clamp-4 text-white/50">
                  Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f asdfkja sdf sdf
                  s sadfa da s Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f
                  asdfkja sdf sdf s sadfa da s Thi adjaksd a sdfdf lakjdf
                  aldskfj dsfkajds f asdfkja sdf sdf s sadfa da s Thi adjaksd a
                  sdfdf lakjdf aldskfj dsfkajds f asdfkja sdf sdf s sadfa da s
                  Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f asdfkja sdf sdf
                  s sadfa da s Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f
                  asdfkja sdf sdf s sadfa da s Thi adjaksd a sdfdf lakjdf
                  aldskfj dsfkajds f asdfkja sdf sdf s sadfa da s Thi adjaksd a
                  sdfdf lakjdf aldskfj dsfkajds f asdfkja sdf sdf s sadfa da s
                  Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f asdfkja sdf sdf
                  s sadfa da s Thi adjaksd a sdfdf lakjdf aldskfj dsfkajds f
                  asdfkja sdf sdf s sadfa da s{" "}
                </div>
                <Link href={"/"}>See more</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TribeDetails;
