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
        <Link href={"/tribes"} className="text-white/70">tribes</Link>
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
        <div className="">{tribes[0].tribeName}</div>
      </div>
      <div className="text-4xl font-[700]">{tribes[0].tribeName}</div>
      <div className="flex py-7 flex-wrap gap-3">
        {tabs.map((elem, index) => {
          return (
            <Link
              href={"/tribes/0?tab=" + elem}
              key={index}
              className={
                tab == elem
                  ? "rounded-full border-primary-main bg-primary-main text-black border px-6 py-3"
                  : `rounded-full border-white/30 text-white/40 border px-6 py-3`
              }
            >
              {elem}
            </Link>
          );
        })}
      </div>
      <div className="rounded-2xl bg-white/5 w-full h-[700px] mb-10 p-5"></div>
    </div>
  );
};

export default TribeDetails;
