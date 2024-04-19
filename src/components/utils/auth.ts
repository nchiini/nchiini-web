import {
    ConfirmationResult,
    RecaptchaVerifier,
    signInWithPhoneNumber,
  } from "firebase/auth";
  import { authentication } from "../../../firebase_config";
  
  /**generate auth RecaptchaVerifier */
  export const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
        authentication,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  };
  
  /**signup user with phone number to Firebase */
  export const SignUpUser = async (
    phoneNumber: string
  ): Promise<ConfirmationResult> => {
    localStorage?.setItem("authPhoneNumber", phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    const results = await signInWithPhoneNumber(
      authentication,
      phoneNumber,
      appVerifier
    ).catch((error) => error);
  
    return results;
  };
  

  export const verifyOTP = async (code:string, onSuccess?:()=>void,onError?:()=>void) => {
    const confirmationResult = window.confirmationResult;
    await confirmationResult
      ?.confirm(code)
      // TODO: set user state to redux
      .then((frbsUserCreds: any) => {
        const uid = frbsUserCreds?.user?.uid;
        const token = frbsUserCreds?.user?.accessToken;
        console.log({frbsUserCreds});
        onSuccess ? onSuccess() : undefined
        // is profile complete?
      })
      .catch((error:any) =>{
        onError?onError():undefined
        return error
        }
      );
  };
  