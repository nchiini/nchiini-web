"use client";
import NormalButton from "@/components/button/NormalButton";
import { getTranslation } from "@/utils/translation";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const { tribes } = require("../../../tribes.js");
const TribeDetails = () => {
  const tabs = [
    "Origin",
    "Food",
    "Dance",
    "Traditional rights",
    "Cultural heritage",
  ];
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const tribes = ["Oku", "Nkambe", "Kom"];
  const goals = [
    "Research",
    "Travel",
    "To Teach",
    "Business",
    "Marriage",
    "Awareness",
    "Others",
  ];
  const Item = ({
    text,
    list = [],
    setSelectedGoals,
  }: {
    text: string;
    list?: string[];
    setSelectedGoals: Dispatch<SetStateAction<string[]>>;
  }) => {
    
  
    return (
      <div
        onClick={() => {
          if (list?.includes(text)) {
          } else {
            setSelectedGoals([...list, text]);
          }
        }}
        className={`${
          list?.includes(text) ? "!border-primary-main border" : ""
        } rounded-full p-2 px-4 text-[10px] cursor-pointer gap-3 flex items-center justify-between hover:bg-white/20 duration-200 border border-transparent bg-white/10`}
      >
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 rounded-full p-1 duration-300 hover:bg-white/10 h-6 text-primary-main"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
    );
  };
  const tab = useSearchParams().get("lang");
  let t = getTranslation(String(tab)).Profile;
  return (
    <div className="mb-32">
      <div className="md:text-4xl cursor-pointer text-xl gap-4 flex items-center font-[700]">
       {t.my_profile}
      </div>
      <div className="w-full rounded-xl flex gap-6 my-10">
        <div className="p-6 rounded-xl bg-grey-2 border border-white/10 flex flex-col gap-5 max-w-[400px] w-full">
          <div className="h-[150px] w-[150px] rounded-3xl mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full text-center">
            <div className="text-2xl font-bold">Akoneh Silas Magho</div>
            <div className="text-xl text-white/50">+237681099238</div>
          </div>
          <div className="w-full border border-white/10 rounded-xl mx-auto rounded-xl bg-white/5 p-5">
            <div className="text-2xl">{t.about_me}</div>
            <div className="text-white/20">
              I am a creative mind on a journey through the realms of
              imagination, weaving words into captivating tapestries of thought.
            </div>
          </div>
          <NormalButton text={t.edit_profile} className="text-black" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <div className="flex w-full items-center text-4xl font-bold justify-between">
            {t.my_interests}
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
          <div className="text-white/60">
            I am a creative mind on a journey through the realms of imagination,
            weaving words into captivating tapestries of thought. With a passion
            for storytelling and a love for the written word, I embrace the
            uncharted territories of the mind, seeking to inspire, entertain,
            and provoke thought. My pen dances across the page, giving life to
            characters, places, and ideas that spring forth from the depths of
            my imagination.
          </div>
          <div>{t.interests}</div>
          <div className="flex gap-2 flex-wrap w-full">
            {tribes.map((elem, index) => (
              <Item
                setSelectedGoals={setSelectedGoals}
                list={selectedGoals}
                text={elem}
                key={index}
              />
            ))}
          </div>
          <div>{t.goals}</div>
          <div className="flex gap-2 flex-wrap w-full">
            {goals.map((elem, index) => (
              <Item
                setSelectedGoals={setSelectedGoals}
                list={selectedGoals}
                text={elem}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TribeDetails;
