"use client";
import { getTranslation } from "@/utils/translation";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Footer = () => {
  const path = usePathname();
  const language = useSearchParams().get("lang");
  let t = getTranslation(String(language)).Footer;
  return path?.includes("/auth") || path?.includes("/dashboard") ? (
    <></>
  ) : (
    <div className="w-full text-white/50">
      <div className="max-w-[1300px] w-full gap-4 flex-wrap flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">Nchiini</div>
          <div>Buea, Cameroon</div>
          <div>{t.join_us}</div>
          <div className="flex gap-3">
            <img className="h-8" src={"/icons/facebook.png"} />
            <img className="h-8" src={"/icons/instagram.png"} />
            <img className="h-8" src={"/icons/twitter.png"} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">{t.company}</div>
          <div>{t.about_us}</div>
          <div>{t.services}</div>
          <div>{t.privacy_policy}</div>
          <div>{t.terms_and_conditions}</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">
            {t["contact-us"]}
          </div>
          <div>contact@nchiini.net</div>
          <Link href={"https://wa.me/237681099238"}>+237 681099238</Link>
        </div>
      </div>
      <div className="w-full text-center p-4 pt-16 text-white/30">
        &copy;copyright 2024 . {t.powered_by} Nchiini
      </div>
    </div>
  );
};

export default Footer;
