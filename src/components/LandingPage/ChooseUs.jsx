import React from "react";
import GlowingCircle from "../../assets/ChooseUs Circle.png";
import LanguageIcon from "../../assets/chooseUsLanguageIcon.png";
import EyeIcon from "../../assets/chooseUsEye.png";
import ChooseUsComponent from "../../shared/ChooseUsComponent";
import WordStyled from "../../shared/WordStyled";

const chooseusData = [
  {
    icon: LanguageIcon,
    headingOne: "Simplified",
    headingTwo: "Language",
    detail:
      "No More Confusing Terms - We Explain Health Insurance in Plain English.",
  },
  {
    icon: EyeIcon,
    headingOne: "User-Friendly",
    headingTwo: "Interface",
    detail: "Easy-to-Use Tools for Comparing Plans and Understanding Benefits.",
  },
  {
    icon: LanguageIcon,
    headingOne: "Empowering You",
    headingTwo: "",
    detail:
      "No More Confusing Terms - We Explain Health Insurance in Plain English.",
  },
];
function ChooseUs() {
  return (
    <section className="w-full relative mb-14">
      {/* Circle */}
      <div className="relative">
        <div className="w-[200px] absolute -z-50 hidden sm:block">
          <img src={GlowingCircle} alt="Glowing circle" />
        </div>
        <div className="w-full flex mt-16 sm:mt-0 justify-center">
          <div className=" flex flex-col items-center">
            <div className="w-fit flex flex-col items-center">
              <h1 className="text-[#06283D] tracking-wide text-[30px] font-OutFit font-bold sm:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[64px]">
                Why C<WordStyled id="choose_us" word="hoose Us?" />
              </h1>
              
            </div>
            <div className="w-full text-center flex justify-center">
              <div className="mt-2 px-2 sm:px-0">
                <h1 className="font-Jakarta text-[15px] sm:text-[18px] text-[#06283D99]">
                  Discover the Reasons to Choose Hauora Health.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col gap-y-14 sm:gap-y-0 sm:flex-row justify-center items-start sm:items-baseline  gap-x-0 sm:gap-x-20 px-5 sm:px-[100px] md:px-[130px] lg:px-[150px] xl:px-[180px] 2xl:px-[200px] my-20 z-50">
          {chooseusData.map((current, index) => (
            <ChooseUsComponent
              key={index}
              icon={current.icon}
              headingOne={current.headingOne}
              headingTwo={current.headingTwo}
              detail={current.detail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
