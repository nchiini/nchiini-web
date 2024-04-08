interface ButtonType {
    text: string;
    className?: string;
    // state: "active" | "disabled";
    disabled?: boolean;
    icon?:any;
    onClick?: (e:any)=>void
}