import { Dispatch, SetStateAction } from "react";

export interface ModalTypes {
    setShowModal: Dispatch<SetStateAction<boolean>>;
    message?:string;
  }