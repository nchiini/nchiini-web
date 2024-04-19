import { isPossiblePhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/min";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import OtpInput from "react18-input-otp";
import { useEffect, useState } from "react";
const NormalInput = ({
  label,
  placeHolder = "Enter your name here",
  type,
  inputValue,
  setIsValid,
  onChange = (e) => {},
}: InputType) => {
  const CameroonTellCodeReg = /\+237/;
  const [selectedText, setSelectedText] = useState("Select tribe");
  const [dropdownModal, setDropdownModal] = useState(false);
  const [value, setValue] = useState<E164Number | undefined>();
  useEffect(() => {
    type == "phone-number" ? onChange(value) : undefined;
    setIsValid
      ? setIsValid(
          isPossiblePhoneNumber(String(value)) &&
            (CameroonTellCodeReg.test(String(value))
              ? String(value).length >= 13
              : true)
        )
      : undefined;
    localStorage.setItem("authPhoneNumber", String(value));
  }, [value, onChange, type]);
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <div className="text-xs text-white/80 font-[300]">{label}</div>}
      {type == "input" && (
        <input
          placeholder={placeHolder}
          onChange={(e) => {
            onChange(e.target.value);
            setIsValid ? setIsValid(true) : undefined;
          }}
          className="w-full placeholder:text-white/10 border outline-none bg-transparent hover:border-white/20 duration-150 border-white/10 rounded-xl h-12 p-3"
        />
      )}
      {type == "dropdown" && (
        <div className="flex gap-3 relative cursor-pointer text-white/10 hover:border-white/20 duration-150 items-center rounded-xl border h-12 p-3 border-white/10">
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <input
            placeholder="Enter your tribe"
            onChange={(e) => {
              onChange(e.target.value);
              setIsValid ? setIsValid(true) : undefined;
            }}
            className="bg-transparent text-white placeholder:text-white/10 outline-none"
          />

          {dropdownModal && (
            <div className="absolute text-white/30 left-0 w-full max-h-32 overflow-scroll top-11 bg-white/10 p-2 rounded-lg">
              <div className="hover:bg-white/5 p-1 rounded-lg">Oku</div>
              <div className="hover:bg-white/5 p-1 rounded-lg">Kom</div>
              <div className="hover:bg-white/5 p-1 rounded-lg">Nkambe</div>
              <div className="hover:bg-white/5 p-1 rounded-lg">Bayangi</div>
            </div>
          )}
        </div>
      )}
      {type == "phone-number" && (
        <PhoneInput
          style={{
            // padding: "8px",
            // borderRadius: "4px",
            fontSize: "16px",
          }}
          className="input-validated !placeholder:text-white/20 border !w-full hover:border-white/20 duration-150 border-white/10 text-black"
          // onFocus={}
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          defaultCountry="CM"
        />
      )}
      {type == "otp" && (
        <OtpInput
          value={inputValue}
          containerStyle={"justify-center gap-2"}
          onChange={onChange}
          className="rounded-lg border outline-none w-1/6 h-14 border-white/10 flex items-center justify-center text-white sm:px-[16px] sm:py-[16px]"
          numInputs={6}
          separator={<span></span>}
          isInputNum={true}
        />
      )}
    </div>
  );
};

export default NormalInput;
