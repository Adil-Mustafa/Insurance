import React from "react";
import HeadingLine from "../../assets/HeadingLine.png";
import InformedChoiseGirlBG from "../../assets/InformedChoiseGirlBG.png";
import WordStyled from "../../shared/WordStyled";

function InformedChoice() {
  return (
    <div className=" h-full w-[100%] px-5 sm:px-20">
      {/* section one */}
      <div className="w-full flex flex-col sm:flex-row justify-center">
        {/* left side */}
        <div className="w-full h-full sm:w-[45%] py-0 sm:py-10 px-0 sm:px-20">
          <img
            src={InformedChoiseGirlBG}
            alt="Left side Boy image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* right side */}
        <div className="w-full sm:w-[45%] py-5 sm:py-10 px-0 sm:px-20">
          <div className="relative flex flex-col justify-center items-center w-full h-full">
            <div className="flex flex-col w-full px-0 ">
              <div className="w-full">
                <h1 className="text-[#06283D] tracking-wide text-[30px] font-OutFit font-bold sm:text-[30px] lg:text-[35px] xl:text-[64px] 2xl:text-[64px]">
                  <WordStyled
                    id="informed_decision"
                    word={
                      <span>
                        Make Informed <br />
                        Choices
                      </span>
                    }
                  />
                </h1>
              </div>
              <div className="w-full sm:w-[400px] text-[15px] sm:text-[18px] font-Jakarta text-[#06283D99] mt-3">
                <h1>
                  Our data and insights unlock the power to make confident and
                  informed Health Insurance decisions.
                </h1>
              </div>
              {/*<div className='w-full flex gap-x-4  my-5 sm:my-10'>*/}
              {/*    /!*<button className='rounded-[8px] bg-[#47A5DC] py-3 sm:py-3 px-8 text-[14px] sm:px-14 font-Jakarta font-semibold text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Get Started</button>*!/*/}
              {/*    <button className='rounded-[8px] bg-[#1D6996]  py-3 sm:py-4 px-8 text-[14px] sm:px-14 font-Jakarta  text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Get Started</button>*/}
              {/*    <button className='rounded-[8px] bg-[#1D6996] py-3 sm:py-3 px-8 text-[14px] sm:px-14 font-Jakarta font-semibold text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>See All Plans</button>*/}
              {/*</div>*/}
              <div className="w-full flex gap-x-10 my-5 sm:my-10">
                <button className="w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-[#47A5DC] text-[14px] font-Jakarta font-semibold text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                  Get Started
                </button>
                <button className="w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-[#1D6996]  text-[14px] font-Jakarta font-semibold text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                  See All Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformedChoice;
