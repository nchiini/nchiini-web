import Link from "next/link";
import NormalButton from "../../button/NormalButton";
import NormalInput from "../../input/NormaInput";
import { Dispatch, SetStateAction, useState } from "react";

const Profile = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [tribes, setTribes] = useState<string[]>(["Research", "Travel"]);
  const goals = [
    "Research",
    "Travel",
    "To Teach",
    "Business",
    "Marriage",
    "Awareness",
    "Others",
  ];
  return (
    <div className="flex flex-col w-full font-bold gap-5">
      <div className="text-4xl hidden lg:flex">Set Up your profile</div>
      <div className="h-full relative rounded-2xl w-full">
        <img
          src="/auth-bg.png"
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="absolute top-4 left-0 text-primary-main">
          Enter Details
        </div>
        <div className="flex absolute p-10 mb-10 bg-grey-2 lg:bg-transparent lg:border-none rounded-2xl border border-white/10 z-30 flex-col lg:pt-24 items-center w-full lg:h-full gap-2">
          <div className="w-full border border-white/10 rounded-xl h-10 p-1 overflow-hidden flex gap-2">
            {tribes.map((elem, index) => (
              <Item
                setSelectedGoals={setSelectedGoals}
                list={tribes}
                text={elem}
                key={index}
              />
            ))}
            <input className="w-full" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="text-[12px]">Select your goals for learning</div>
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
          <NormalButton className="mt-3 w-full" text="Save details" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
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
      } rounded-full p-2 px-6 text-[10px] cursor-pointer hover:bg-white/10 duration-200 border border-transparent bg-white/5`}
    >
      {text}
    </div>
  );
};
