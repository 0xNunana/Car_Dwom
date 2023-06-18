"use client"

import { CustomButtonprops } from "@/types"

const CustomButton = ({title,containerStyles,btnType,handleClick}:CustomButtonprops) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
<span className={`flex-1`}>{title}</span>
    </button>)
}

export default CustomButton