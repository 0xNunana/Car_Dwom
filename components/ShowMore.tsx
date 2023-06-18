'use client'

import { showMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton"
import { updateSearch } from "@/utils"

const ShowMore = ({isNext,pageNumber}:showMoreProps) => {
    const router = useRouter()

    const handleNavigation =()=>{
        const newLimit = (pageNumber + 1)*10
        const newPathname = updateSearch('limit',`${newLimit}`)
    router.push(newPathname)
    
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
      <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
      />
    )}
  </div>
  )
}

export default ShowMore