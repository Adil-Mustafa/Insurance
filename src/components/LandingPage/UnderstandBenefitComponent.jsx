import React from "react";
import HeadingLine from "../../assets/HeadingLine.png";
import UnderstandBenefitBG from "../../assets/UnderstandBenefitsImage.png";
import WordStyled from "../../shared/WordStyled";

function UnderstandBenefitComponent() {
  return (
    <>
      <div className=" h-full w-[100%] px-5 md:px-20">
        {/* section one */}
        <div className="w-full flex flex-col-reverse md:flex-row justify-center">
          {/* left side */}
          <div className="w-full md:w-[45%] py-5 lg:py-10 px-0 lg:px-20">
            <div className="relative flex flex-col justify-center items-center w-full h-full">
              <div className="flex flex-col w-full px-0">
                <div className="w-full ">
                  <h1 className="text-[#06283D] tracking-wide font-bold font-OutFit text-lg  lg:text-xl xl:text-3xl ">
                    <WordStyled id="benefits" word="Understand Benefits*" />
                  </h1>
                </div>
                <div className="w-full md:w-3/4 text-[15px] md:text-[18px] font-Jakarta text-[#06283D99] mt-3">
                  <h1>
                    Get detailed breakdowns of each plan's coverage and what it
                    means for you.
                  </h1>
                </div>
                <div className="w-full flex  gap-x-10 my-5 md:my-10">
                  <button className="w-[221px] h-[46px] py-4 md:py-7 flex justify-center items-center rounded-[8px] bg-[#47A5DC] text-[14px] font-Jakarta font-semibold text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                    Get Started
                  </button>
                  <button className="w-[221px] h-[46px] py-4 md:py-7 flex justify-center items-center rounded-[8px] bg-[#1D6996]  text-[14px] font-Jakarta font-semibold text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}

          <div className="w-full h-full lg:w-[45%] py-0 lg:py-10 px-0 lg:px-20">
            <div className="flex-grow h-full">
              <img
                src={UnderstandBenefitBG}
                alt="Left side Boy image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnderstandBenefitComponent;
