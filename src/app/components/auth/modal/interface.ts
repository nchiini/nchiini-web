import { Dispatch, SetStateAction } from "react";

export interface ModalTypes {
    setShowModal?:Dispatch<SetStateAction<boolean>>;
    phoneNumber?:string;
    message?:string;
    title?:string;
    icon?:any;
    buttonText?:string;
    onClick:any;
}