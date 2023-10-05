import React from 'react';
import AppLogo from '../assets/app-logo.svg';
import MenuIcon from '../assets/menuIcon.png';
import HeroStar from "../assets/HeaderStar.png";

function Header() {
    return (
        <section>

            <header className=' w-full h-[81px] px-5 sm:px-28 bg-[#EAF5FB] sm:bg-transparent '>
                <div className='w-full flex justify-between items-center h-full'>
                    {/*  left side */}
                    <div className='flex items-center gap-x-10'>
                        {/*    Logo  */}
                        <div className='flex items-center cursor-pointer'>
                            <img  src={AppLogo} alt="Logo" />
                            <h1 className='text-[16px] sm:text-[22px] text-[#06283D] font-bold font-Jakarta tracking-wide'>HAUOURA HEALTH</h1>
                        </div>
                        {/*  menu  */}
                        <div className=''>
                            <ul className='hidden sm:flex gap-x-10 text-[#06283D] text-[18px] font-Jakarta'>
                                <li className='cursor-pointer hover:text-[#052031]'>Our Plans</li>
                                <li className='cursor-pointer hover:text-[#052031]'>About us</li>
                                <li className='cursor-pointer hover:text-[#052031]'>Contact us</li>
                            </ul>
                        </div>
                    </div>
                    {/* Right side */}
                    <div className=''>
                        <button className='hidden sm:block rounded-[8px] bg-[#47A5DC] py-3 px-7 font-Jakarta text-white hover:bg-[#6BB7E2] duration-150 drop-shadow-2xl shadow-black/20 shadow-2xl'>Explore Plans</button>
                        <img src={MenuIcon} alt="MenuIcon" className=' w-[42px] h-[42px] flex sm:hidden' />
                    </div>
                </div>
            </header>
        </section>
    );
}

export default Header;