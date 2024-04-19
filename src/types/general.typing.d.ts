import { RecaptchaVerifier } from "firebase/auth";

/**User types signature */
export interface User {
  otp: string;
  uid: string;
  firstName: string | null;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string | null;
  accessToken: string;
  expirationTime: number;
  refreshToken: string;
  currentCity: string;
  profileImage: string;
  country: string;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: any;
    // confirmationResult: confirmationResult;
  }
}
/**Booked events types signature */
