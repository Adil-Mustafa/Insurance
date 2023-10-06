import React, { useEffect, useState } from "react";
import RatingImg from "../assets/ratingImg.png";
 


function FeatureSlider({userReview={}}) {
    const {name,position,details,avatar} = userReview
  return (
    <div className="w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px] rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.07)]  flex items-start px-8 -ml-4 sm:-ml-0">
      <div className="flex flex-col  gap-y-4 h-full w-full py-10">
        <div className="flex gap-x-2">
          <div className="w-[64px] h-[64px] rounded-full ">
            <img src={avatar} alt="User" />
          </div>
          <div className="flex flex-col justify-start">
            <h1 className="text-[18px] font-bold text-[#06283D] font-Jakarta">
              {name}
            </h1>
            <h1 className="text-[#06283D99] -mt-1 text-[14px] font-Jakarta">
            {position}
            </h1>
          </div>
        </div>
        <div className="w-[160px]">
          <img src={RatingImg} alt="rating" />
        </div>
        <div className="w-full text-[#06283D] text-[16px] font-Jakarta leading-[28px]">
          <p>
            {details}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureSlider