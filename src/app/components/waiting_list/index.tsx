import { isPossiblePhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/min";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useState } from "react";
const WaitingList = () => {
  const [value, setValue] = useState<E164Number | undefined>(undefined);
  return (
    <div className="max-w-[500px] w-full mx-auto h-full justify-center gap-4 flex flex-col">
      <div className="text-center font-bold text-5xl">Nchiini</div>
      <img className=" h-[250px] object-cover object-top rounded-xl" src="https://firebasestorage.googleapis.com/v0/b/nchiini.appspot.com/o/unnamed.jpg?alt=media&token=54f63699-2128-4ff5-833d-ea08014544b4"/>
      <div className="text-white/50">
        Ready to uncover the rich tapestry of your heritage? Join our waitlist
        for Nchiini, the ultimate cultural exploration app, and be the first to
        embark on a journey of discovery. Enter your phone number now to secure
        your spot and be part of a vibrant community celebrating diversity and
        tradition.
      </div>
      <div className="flex items-center justify-between">
        {" "}
        We&apos;ll notify you when we launch
        <span className="text-white/30 text-[10px]">76 people subscribed</span>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex w-full border border-white/10 rounded-xl">
          <PhoneInput
            style={{
              padding: "8px",
              borderRadius: "4px",
              fontSize: "14px",
            }}
            className="input-validated !w-full border-black/20 text-black"
            // onFocus={}
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
            defaultCountry="CM"
          />
        </div>

        <button className="bg-white/10 p-4 px-8 rounded-xl">Submit</button>
      </div>
    </div>
  );
};

export default WaitingList;
