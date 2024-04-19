/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import NormalInput from "../../input/NormaInput";
import { useState } from "react";
import NormalButton from "../../button/NormalButton";
import { verifyOTP } from "../../utils/auth";
import { OTPTypes } from "./interface";

const Otp = ({ onVerified }: any) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col w-full font-bold gap-5">
      <div className="text-2xl md:text-4xl">Just one step to go!</div>
      <div className="h-full relative rounded-2xl w-full">
        <img
          src="/auth-bg.png"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-4 left-0 text-primary-main">
          Verify number
        </div>
        <div className="flex absolute p-5 sm:p-10 sm:pt-32 pt-32 z-30 flex-col items-center w-full h-full gap-2">
          <NormalInput
            type="otp"
            inputValue={code}
            onChange={(e) => {
              setCode(e);
            }}
            label="Enter the 6 digit code we sent to your phone"
            placeHolder="Enter your tribe"
          />
          <NormalButton
            onClick={() => {
              setLoading(true);
              verifyOTP(code, () => {
                onVerified();
              });
            }}
            icon={
              loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 animate-spin h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              ) : undefined
            }
            disabled={code.length == 6 ? false : true}
            className="mt-3 w-full"
            text="Verify"
          />
        </div>
      </div>
      <div className="flex items-center ml-auto gap-2">
        Didn&apos;t receive code?
        <Link href={"/auth?q=sign-in"} className="text-primary-main">
          Resend
        </Link>
      </div>
    </div>
  );
};

export default Otp;
