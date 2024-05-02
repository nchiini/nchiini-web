"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const { tribes } = require("../../../tribes.js");
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
      <div className="md:text-3xl cursor-pointer text-xl gap-4 flex items-center font-[600]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-9 h-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
        My Profile
      </div>
      <div className="w-full p-10 rounded-xl bg-white/5 flex gap-6 my-10">
        <div className="p-10 rounded-xl bg-white/5 flex flex-col gap-10 max-w-[400px] w-full">
          <div className="h-[150px] w-[150px] bg-white/40 rounded-3xl mx-auto"></div>
          <div className="w-full text-center">
            <div className="text-2xl font-bold">Akoneh Silas Magho</div>
            <div className="text-xl text-white/50">+237681099238</div>
          </div>
          <div className="w-full max-w-[350px] mx-auto rounded-xl bg-white/10 p-5">
            <div className="text-2xl">About</div>
            <div className="text-white/50">
              asdk asdlkj asdf afh sdkf asdls alsdf sd s asdk asdlkj asdf afh
              sdkf asdls alsdf sd s asdk asdlkj asdf afh sdkf asdls alsdf sd s
              asdk asdlkj asdf afh sdkf asdls alsdf sd s asdk asdlkj asdf afh
              sdkf asdls alsdf sd s asdk asdlkj asdf afh sdkf asdls alsdf sd s
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <div className="flex items-center text-2xl justify-between">
            Summary of me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribeDetails;
