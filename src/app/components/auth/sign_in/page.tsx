/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import Link from "next/link";
import NormalInput from "../../input/NormaInput";
import NormalButton from "../../button/NormalButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateRecaptcha, SignUpUser } from "../../utils/auth";

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberIsValid, setPhoneNumberIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const requestOTP = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    generateRecaptcha();
    SignUpUser(phoneNumber)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        router.push("/auth?q=otp");
      })
      .catch((error) => error);
  };
  return (
    <div className="flex flex-col w-full font-bold gap-5">
      <div className="text-2xl md:text-4xl">
        Welcome to <span className="text-primary-main">Nchiini</span>
      </div>
      <div className="h-full relative rounded-2xl w-full">
        <img
          src="/auth-bg.png"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-4 left-0 text-primary-main">Sign In</div>
        <div className="flex absolute p-5 sm:p-10 pt-32 sm:pt-32 z-30 flex-col items-center w-full h-full gap-2">
          <NormalInput
            type="phone-number"
            label="phone number"
            setIsValid={setPhoneNumberIsValid}
            onChange={(e) => {
              setPhoneNumber(e);
            }}
            placeHolder="Enter your name here"
          />
          <NormalButton
            disabled={!phoneNumberIsValid}
            onClick={(e) => {
              if (!loading) requestOTP(e);
            }}
            className="mt-3 w-full"
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
            text="Sign In"
          />
          <div id="recaptcha-container"></div>
        </div>
      </div>
      <div className="flex items-center ml-auto gap-2">
        Don&apos;t have an account?{" "}
        <Link href={"/auth?q=sign-up"} className="text-primary-main">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
