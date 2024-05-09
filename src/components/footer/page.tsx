"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Footer = () => {
  const path = usePathname();
  return path?.includes("/auth") || path?.includes("/dashboard") ? (
    <></>
  ) : (
    <div className="w-full text-white/50">
      <div className="max-w-[1300px] w-full gap-4 flex-wrap flex justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">Nchiini</div>
          <div>Buea, Cameroon</div>
          <div>Join us on social media</div>
          <div className="flex gap-3">
            <img className="h-8" src={"/icons/facebook.png"} />
            <img className="h-8" src={"/icons/instagram.png"} />
            <img className="h-8" src={"/icons/twitter.png"} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">Company</div>
          <div>About us</div>
          <div>Services</div>
          <div>Privacy policy</div>
          <div>Terms and conditions</div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-[700] text-primary-main">
            Contact us
          </div>
          <div>contact@nchiini.net</div>
          <div>+237670000000</div>
        </div>
      </div>
      <div className="w-full text-center pt-4 text-white/30">
        &copy;copyright 2024 . Powered by Nchiini
      </div>
    </div>
  );
};

export default Footer;
