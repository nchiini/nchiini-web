/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import Modal from "../components/auth/modal/page";
import SignUp from "../components/auth/sign_up/page";
import { useSearchParams } from "next/navigation";
import SignIn from "../components/auth/sign_in/page";
import Otp from "../components/auth/otp/page";
import Profile from "../components/auth/profile/page";
import NormalButton from "../components/button/NormalButton";
import NormalInput from "../components/input/NormaInput";

/* eslint-disable @next/next/no-img-element */
const AuthPAge = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const screen = useSearchParams().get("q");
  return (
    <div className="w-full min-h-screen top-0 left-0 p-5 flex items-center justify-center">
      <div className="grid max-w-[400px] lg:grid-cols-2 pb-5 w-full min-h-[525px] gap-5 lg:max-w-[900px]">
        {screen == "profile" && (
          <div className="text-3xl lg:hidden">Set Up your profile</div>
        )}
        {screen !== "profile" ? (
          <div className="w-full hidden lg:flex overflow-hidden relative rounded-2xl">
            <img
              src="/auth-img.png"
              alt="authentication image"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 text-3xl w-full p-9 text-primary-main font-[600]">
              Learn Cameroon cultures in all it&apos;s diversities!!!
            </div>
          </div>
        ) : (
          <div className="w-full border p-10 border-white/10 overflow-hidden h-[550px] bg-grey-2 flex items-center justify-center gap-3 flex-col relative rounded-2xl">
            <label
              htmlFor="image"
              className="w-32 h-32 cursor-pointer relative rounded-full border-primary-main border"
            >
              <img
                src="/auth-img.png"
                className="object-cover w-full h-full rounded-full"
              />
              <div className="absolute bottom-2 right-2 rounded-full bg-primary-main p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 text-black h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                  />
                </svg>
              </div>
              <input id="image" type="file" className="hidden" />
            </label>
            <NormalInput
              type="input"
              label="name"
              placeHolder="Enter your name here"
            />
            <NormalInput
              type="input"
              label="profession"
              placeHolder="Enter your profession here"
            />
            <NormalInput
              type="input"
              label="country"
              placeHolder="Enter your country here"
            />
          </div>
        )}
        {screen == "sign-up" && <SignUp />}
        {screen == "sign-in" && <SignIn />}
        {screen == "otp" && (
          <Otp
            onVerified={() => {
              setShowModal(true);
            }}
          />
        )}
        {screen == "profile" && <Profile />}
      </div>
      {showModal && (
        <Modal
          onClick={() => {
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
};

export default AuthPAge;
