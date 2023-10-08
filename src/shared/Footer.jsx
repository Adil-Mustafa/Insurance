import React from "react";
import AppLogo from "../assets/app-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <footer className="  w-full flex justify-center p-5 sm:p-10">
      <div className="h-full w-full flex flex-col gap-y-10 md:flex-row justify-center ">
        <div className="w-full md:w-[30%] flex flex-col gap-y-10 h-full sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="flex gap-x-2 items-center w-full justify-center md:justify-start py-0">
            <img src={AppLogo} alt="Logo" />
            <h1 className=" sm:text-[22px] text-[24px] text-[#06283D] font-bold  tracking-wide">
              HAUOURA HEALTH
            </h1>
          </div>
          <div className="w-full flex flex-col items-center md:items-start gap-y-4">
            <h1 className="font-Jakarta text-[16px] text-[#06283D] -tracking-tight">
              Insurance Plans
            </h1>
            <h1 className="font-Jakarta text-[16px] text-[#06283D] -tracking-tight">
              Contact us
            </h1>
            <h1 className="font-Jakarta text-[16px] text-[#06283D] -tracking-tight">
              Privacy Policy
            </h1>
            <h1 className="font-Jakarta text-[16px] text-[#06283D] -tracking-tight">
              Terms of Service
            </h1>
          </div>
        </div>
        <div className="w-full md:w-[30%] h-full flex flex-col gap-y-10 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="w-full flex justify-center items-center text-[16px] font-semibold tracking-tight text-[#06283D] py-2">
            <h1>Find Us On Social Media:</h1>
          </div>
          <div className="w-full flex sm:flex-wrap sm:gap-y-2 sm:gap-x-2 justify-evenly">
            <div className="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-[#E5F3FF] hover:bg-[#84C5FF]/40 duration-150 cursor-pointer">
              <FaFacebookF className="text-[#47A5DC]" size={35} />
            </div>
            <div className="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-[#E5F3FF] hover:bg-[#84C5FF]/40 duration-150 cursor-pointer">
              <BsTwitter className="text-[#47A5DC]" size={35} />
            </div>
            <div className="w-[66px] h-[66px] flex justify-center items-center rounded-full bg-[#E5F3FF] hover:bg-[#84C5FF]/40 duration-150 cursor-pointer">
              <BiLogoInstagramAlt className="text-[#47A5DC] " size={35} />
            </div>
          </div>
        </div>
        <div className="w-full md:w-[30%] h-full flex flex-col gap-y-10 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="flex w-full flex-col py-2 text-center">
            <h1 className="text-[16px] text-[#06283D] font-semibold">
              We’re Always Happy To Help
            </h1>
            <h1 className="text-[15px] text-[#06283D] font-semibold">
              contact@hauorahealth.io
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
