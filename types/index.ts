import { MouseEventHandler } from "react";

export interface CustomButtonprops {
    title:string;
    btnType?:"button" | "submit"
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}