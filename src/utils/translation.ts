import * as en from "../../locales/en.json";
import * as fr from "../../locales/fr.json";
/**
 * This function recieves a parameter which should a be a language like "en" or "fr". The language can be read from the query params using the useSearParams hook. If not language is passed, the default language which is english will be used
 * @param tab 
 * @returns 
 */
export function getTranslation(tab?:string) {
  let lang = en;
  // let urlParams
  // if (typeof window !== "undefined") {
  //   urlParams = new URLSearchParams(window.location.search);
  //   // browser code  
  //   const t = urlParams?.get("lang");
  if (tab === "en") {
    lang = en;
  } else if (tab === "fr") {
    lang = fr;
  }
  // }


  return lang;
}
