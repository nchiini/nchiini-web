"use client";
import { useRouter } from "next/navigation";

const Modal = ({
  onClick,
  icon,
  title = "Success message",
  buttonText = "Set up your profile",
  message = "Your account has been created successfully, we are happy to have as a member of Nchini. We hope you learn and explore the cultures you want to.",
}: any) => {
  const router = useRouter();
  return (
    <div className="absolute top-0 left-0 w-full p-5 h-screen flex backdrop-blur-md z-30 items-center justify-center">
      <div className="bg-grey-2 border-white/10 flex flex-col justify-between border p-9 rounded-2xl w-full max-w-[400px] h-[400px]">
        <div className="flex justify-end">
          <svg
            onClick={() => {
              router.push("/");
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 cursor-pointer h-8"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center w-full gap-4">
          {icon ? (
            icon
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-9 text-primary-main h-9"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <div className="text-2xl">{title}</div>
          <div className="text-center text-white/40">{message}</div>
          <button
            onClick={() => {
              onClick();
            }}
            className="rounded-full bg-primary-main p-3 text-sm text-black w-full"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
