"use client";
import NormalButton from "@/components/button/NormalButton";
import { getTranslation } from "@/utils/translation";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const { tribes } = require("../../../tribes.js");
const TribeDetails = () => {
  const tab = useSearchParams().get("tab");
  const path = usePathname();
  const language = useSearchParams().get("lang");

  let t = getTranslation(String(language)).About;
  return (
    <div className="mb-32 flex flex-col gap-5">
      <div className="md:text-4xl cursor-pointer text-xl gap-4 flex items-center font-[700]">
        {t.mission}
      </div>
      <div className="text-white/50">
        The Bayangi people have cultivated a cultural pattern deeply rooted in
        history. Their origins can be traced back to the expansive Kanem Borno
        Empire, connecting them to a heritage that stretches from Chad to
        Nigeria where many other Bantu languages are also spoken. The Bayangi
        people have cultivated a cultural pattern deeply rooted in
        history. Their origins can be traced back to the expansive Kanem Borno
        Empire, connecting them to a heritage that stretches from Chad to
        Nigeria where many other Bantu languages are also spoken.The Bayangi
        people have cultivated a cultural pattern deeply rooted in
        history. Their origins can be traced back to the expansive Kanem Borno
        Empire, connecting them to a heritage that stretches from Chad to
        Nigeria where many other Bantu languages are also spoken.back to the
        expansive Kanem Borno Empire, connecting them to a heritage that
        stretches from Chad to Nigeria where many other Bantu languages are also
        spoken.The Bayangi people have cultivated a cultural pattern deeply
      </div>
      <div className="md:text-4xl cursor-pointer text-xl gap-4 font-[700]">
        {t.our_team}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        <div title="Vanisiah Ebai" className="rounded-2xl bg-white/5 overflow-hidden w-full h-[550px] relative">
          <img
            src="/tribes/Image1.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[70%] from-60% bg-gradient-to-t flex items-center justify-center from-black to-transparent">
            <div className=" rotate-[270deg] flex flex-col gap-2 -mb-24">
              <div className="font-bold text-2xl">Vanisiah Ebai</div>
              <div>Product Manager</div>
            </div>
          </div>
        </div>
        <div title="Vanisiah Ebai" className="rounded-2xl bg-white/5 overflow-hidden w-full h-[550px] relative">
          <img
            src="/tribes/Image2.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[70%] from-60% bg-gradient-to-t flex items-center justify-center from-black to-transparent">
            <div className=" rotate-[270deg] flex flex-col gap-2 -mb-24">
              <div className="font-bold text-2xl">Vanisiah Ebai</div>
              <div>Product Manager</div>
            </div>
          </div>
        </div>
        <div title="Vanisiah Ebai" className="rounded-2xl bg-white/5 overflow-hidden w-full h-[550px] relative">
          <img
            src="/tribes/Image3.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[70%] from-60% bg-gradient-to-t flex items-center justify-center from-black to-transparent">
            <div className=" rotate-[270deg] flex flex-col gap-2 -mb-24">
              <div className="font-bold text-2xl">Vanisiah Ebai</div>
              <div>Product Manager</div>
            </div>
          </div>
        </div>
        <div title="Vanisiah Ebai" className="rounded-2xl bg-white/5 overflow-hidden w-full h-[550px] relative">
          <img
            src="/tribes/Image4.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-[70%] from-60% bg-gradient-to-t flex items-center justify-center from-black to-transparent">
            <div className=" rotate-[270deg] flex flex-col gap-2 -mb-24">
              <div className="font-bold text-2xl">Vanisiah Ebai</div>
              <div>Product Manager</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex py-11 flex-col items-center justify-center gap-3">
        <div className="text-3xl capitalize">{t.in_touch}</div>
        <div className="flex items-center gap-2">
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
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          +237 681099238
        </div>
        <div className="flex items-center gap-2">
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
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          First Trust building Greate Soppo Buea
        </div>
        <form className="bg-white flex rounded-xl overflow-hidden">
          <input type="email" name="email" className="p-4 w-full max-w-[250px] outline-none text-black" placeholder="example@email.eg" />
          <button title={t.get_in_touch} className="bg-primary-main w-[200px] h-full p-4 hover:bg-black hover:text-white">{t.get_in_touch}</button>
        </form>
      </div>
    </div>
  );
};

export default TribeDetails;
