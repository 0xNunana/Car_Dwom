import { MouseEventHandler } from "react";

export interface CustomButtonprops {
    title:string;
    btnType?:"button" | "submit"
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?:string;
    rightIcon?:string;
    isDisabled?:boolean
}
export interface manufacturerprops {
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void
}

export interface carprops {
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}

export interface filterProps{
    manufacturer:string
  year:number
  fuel:string
  limit:number
  model:string
}