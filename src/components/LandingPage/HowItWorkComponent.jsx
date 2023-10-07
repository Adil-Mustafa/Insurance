import React from "react";
import StartBG from "../../assets/HeaderStar.png";
import HeadingLine from "../../assets/HeadingLine.png";
import UnderstandBenefitComponent from "./UnderstandBenefitComponent";
import InformedChoice from "./InformedChoice";
import ComparePlans from "./ComparePlans";
import WordStyled from "../../shared/WordStyled";

function HowItWorkComponent() {
  return (
    <section className="w-full relative -mt-5 mb-0  bg-[#F8F8F8]">
      <div className="relative h-full">
        <div className="w-[200px] absolute z-50 hidden sm:block">
          <img src={StartBG} alt="Start Background" className="opacity-30" />
        </div>
        <div className="w-full flex mt-0 sm:mt-16 justify-center">
          <div className="flex flex-col items-center">
            <div className="w-fit flex flex-col items-center">
              <h1 className="text-[#06283D] tracking-wide text-[30px] font-bold sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[64px]">
                How <WordStyled id="worked" word="it Works?" />
              </h1>
              <div className="w-full flex justify-end pr-2 sm:pr-0 -mt-0 sm:-mt-4"></div>
            </div>
          </div>
        </div>
        <div className=" h-full w-[100%] ">
          <ComparePlans />
        </div>
        <UnderstandBenefitComponent />
        <InformedChoice />
      </div>
    </section>
  );
}

export default HowItWorkComponent;
