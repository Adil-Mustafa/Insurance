import React from "react";
import GlowingCircle from "../../assets/ChooseUs Circle.png";
import ConfidentRightImage from "../../assets/ConfidentRightImage.png";
import ConfidentRightSmallScreenBG from "../../assets/ConfidentSmallScreenBG.png";
import HeadingLine from "../../assets/HeadingLine.png";
import WordStyled from "../../shared/WordStyled";

function FeelingConfident() {
  return (
    <section className="w-full h-full sm:h-[501px] bg-[#47A5DC] relative">
      <div className="relative">
        <div className="w-[100px] absolute z-10 hidden sm:block">
          <img src={GlowingCircle} alt="Circle" />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row h-full">
        {/* left side */}
        <div className="xl:w-full sm:w-[50%] flex items-center xl:ml-7 h-full sm:p-8 md:p-10 lg:p-12 xl:p-16">
          <div className="flex flex-col  w-full xl:w-[500px] text-white px-4 sm:px-0">
            <h1 className="font-bold font-OutFit text-[40px] sm:text-[60px] leading-tight z-20">
              Start Feeling
              <WordStyled id="confident" word="Confident " />.
            </h1>
            <p className="text-[16px] font-Jakarta mt-2">
              Learn about how we got started and explore all our plans and
              insights
            </p>
            <div className="w-full flex justify-center sm:justify-start gap-x-5 my-5">
              <button className="w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-white text-black text-[14px] font-Jakarta font-semibold hover:bg-gray-100 duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                Explore Plans
              </button>
              <button className="w-[221px] h-[46px] py-4 sm:py-7 flex justify-center items-center rounded-[8px] bg-[#1D6996]  text-[14px] font-Jakarta font-medium text-white hover:bg-[#1a5e87] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
                Learn more about us
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-full sm:w-[50%] flex justify-center h-full pt-0 sm:pt-14">
          <div className="h-full flex justify-center w-[570px]">
            <img
              src={ConfidentRightImage}
              alt="Confident Right"
              className="h-full w-full hidden sm:flex"
            />
            <img
              src={ConfidentRightSmallScreenBG}
              alt="Confident Right"
              className=" w-[361px] h-[382px] pb-10 px-5 flex sm:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeelingConfident;
