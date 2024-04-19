import { Dispatch, SetStateAction } from "react";

export interface OTPTypes {
    onVerified:any;
    phoneNumber?:string | never;
}