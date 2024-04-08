
interface InputType {
    label?: string;
    placeHolder?: string;
    type?: "input" | "dropdown" | "phone-number" | "otp";
    onChange?:(e:any) => void;
    inputValue?: string;
    setIsValid?:(e:any) => void;
}