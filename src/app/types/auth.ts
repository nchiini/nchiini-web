import { RecaptchaVerifier } from "firebase/auth";
declare global {
    // eslint-disable-next-line no-unused-vars
    interface Window {
      recaptchaVerifier: RecaptchaVerifier;
      confirmationResult: any;
      // confirmationResult: confirmationResult;
    }
  }