import { isPossiblePhoneNumber } from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/min";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../firebase_config";
const WaitingList = () => {
  const [value, setValue] = useState<E164Number | undefined>(undefined);
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<any[]>([]);
  const [showError, setShowError] = useState(0);
  const citiesRef = collection(db, "subscribers");
  async function subscribe() {
    await setDoc(doc(citiesRef), {
      phoneNumber: value,
      location: "",
      createdAt: Date(),
      updatedAt: "",
    });
  }
  async function verifyNumber() {
    const q = query(citiesRef, where("phoneNumber", "==", `${value}`));
    const querySnapshot = await getDocs(q).then((doc) => {
      const sub = doc.docs.map((doc: any) => doc.data());
      setPhoneNumber(sub);
      return 0;
    });
  }
  const CameroonTellCodeReg = /\+237/;
  useEffect(() => {
    if (phoneNumber?.length > 0) {
      setValue("");
      setLoading(false);
      setShowError(2);
    } else {
      subscribe()
        .then(() => {
          setValue("");
          setLoading(false);
          setShowError(1);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    }
  }, [phoneNumber]);
  useEffect(() => {
    if (
      isPossiblePhoneNumber(String(value)) &&
      (CameroonTellCodeReg.test(String(value))
        ? String(value).length >= 13
        : true)
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [value]);
  return (
    <div className="max-w-[500px] w-full mx-auto h-full justify-center gap-4 flex flex-col">
      <div className="text-center font-bold text-5xl border-b border-b-white/10 pb-3">
        Nchiini
      </div>
      <img
        className=" h-[250px] object-cover object-top rounded-xl"
        src="/unnamed.jpg"
      />
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
        <div className="flex w-full border border-white/20 rounded-xl">
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

        <button
          onClick={() => {
            if (valid) {
              setLoading(true);
              verifyNumber();
            } else {
            }
          }}
          className="bg-white/10 p-4 px-8 rounded-xl hover:bg-white/20 duration-150"
        >
          Submit
        </button>
      </div>
      {showError == 1 && (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md h-screen flex items-center justify-center">
          <div className="flex flex-col gap-5 items-center bg-black/60 backdrop-blur-md p-12 rounded-xl justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-32 h-32"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            Subscribed successfully
            <button
              onClick={() => {
                setShowError(0);
              }}
              className="border rounded-full p-4 px-12"
            >
              OK
            </button>
          </div>
        </div>
      )}
      {showError == 2 && (
        <div className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md h-screen flex items-center justify-center">
          <div className="flex flex-col gap-5 items-center bg-black/60 backdrop-blur-md p-12 rounded-xl justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-32 h-32"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            You have already subscribed
            <button
              onClick={() => {
                setShowError(0);
              }}
              className="border rounded-full p-4 px-12"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {loading && (
        <div className="top-0 left-0 w-full h-screen bg-black/60 fixed flex items-center justify-center">
          <div className="animate-spin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitingList;
