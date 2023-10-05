import { useState, useRef, useEffect } from "react";
import AppLogo from "../assets/app-logo.svg";
import MenuIcon from "../assets/menuIcon.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section ref={menuRef}>
      <header className="relative w-full h-[81px] px-5 sm:px-28 bg-[#EAF5FB] sm:bg-transparent ">
        <div className="w-full flex justify-between items-center h-full">
          <div className="flex items-center gap-x-10">
            <div className="flex items-center cursor-pointer">
              <img src={AppLogo} alt="Logo" />
              <h1 className="text-[16px] sm:text-[22px] text-[#06283D] font-bold font-Jakarta tracking-wide">
                HAUOURA HEALTH
              </h1>
            </div>
            <div className="hidden sm:block">
              <ul className="flex gap-x-10 text-[#06283D] text-[18px] font-Jakarta">
                <li className="cursor-pointer hover:text-[#052031]">
                  Our Plans
                </li>
                <li className="cursor-pointer hover:text-[#052031]">
                  About us
                </li>
                <li className="cursor-pointer hover:text-[#052031]">
                  Contact us
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <button className="hidden sm:block rounded-[8px] bg-[#47A5DC] py-4 px-7 font-Jakarta text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl">
              Compare Plan
            </button>
            <img
              src={MenuIcon}
              alt="MenuIcon"
              className=" w-[42px] h-[42px] flex sm:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        {menuOpen && (
          <div className="absolute left-0 w-full bg-[#ffffff] shadow-lg z-10">
            <ul className="flex flex-col justify-center items-center gap-x-10 text-[#06283D] text-[12px] font-Jakarta">
              <li className="px-6 py-3 cursor-pointer hover:text-[#052031] ">
                Our Plans
              </li>
              <li className="px-6 py-3 cursor-pointer hover:text-[#052031] ">
                About us
              </li>
              <li className="px-6 py-3 cursor-pointer hover:text-[#052031] ">
                Contact us
              </li>
               <li className="px-6 py-3 cursor-pointer hover:text-[#052031] ">
                <button className="block text-[12px] rounded-[8px] bg-[#47A5DC] py-2 px-4 mb-2 font-Jakarta text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl text-center">
              Compare Plan
            </button>
              </li>
            </ul>
            {/* <button className="block text-[12px] rounded-[8px] bg-[#47A5DC] py-2 px-4 mb-2 ml-2 font-Jakarta text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl text-center">
              Explore More
            </button> */}
          </div>
        )}
      </header>
    </section>
  );
}

export default Header;
