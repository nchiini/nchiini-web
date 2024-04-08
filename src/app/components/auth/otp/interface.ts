import { Dispatch, SetStateAction } from "react";

export interface OTPTypes {
    setShowModal:Dispatch<SetStateAction<boolean>>;
    phoneNumber?:string;
}