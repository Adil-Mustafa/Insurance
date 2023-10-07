import React from 'react';
import FeatureBG from '../../assets/FeatureBG.png';
import PlanCamparsionIcon from '../../assets/plan-Icon.svg';
import JargonFreeIcon from '../../assets/jargon-icon.svg'
import MobileRespIcon from "../../assets/mobile-resp-icon.svg"
import ChatIcon from "../../assets/chat-icon.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../styles/CustomSlider.css'
import FeatureDetailComponent from "../../shared/FeatureDetailComponent";
function FeatureComponent() {
    const featuresData = [
        {
            icon: PlanCamparsionIcon,
            title: 'Plan Comparison Tool',
            detail: "Easily compare insurance plans side by side to see what's covered and what's not."
        },
        {
            icon: JargonFreeIcon,
            title: 'Jargon-Free Explanations',
            detail: 'We break down insurance terms and jargon so you can understand your coverage.'
        },
        {
            icon: MobileRespIcon,
            title: 'Interactive Tools',
            detail: 'Use sliders, filters, and interactive guides to explore your options.'
        },
        {
            icon: ChatIcon,
            title: 'Mobile-Friendly',
            detail: 'Access our platform anytime, anywhere.'
        },
    ];
    return (
        <section className='w-full z-50 h-fit sm:h-[585px] mb-10 relative '>
            {/*<div className='w-full h-full relative -z-50'>*/}
                <img src={FeatureBG} alt="FeatureBG" className='absolute w-full h-full object-cover -z-40'/>
            {/*</div>*/}
            <div className='z-50 xl:p-5 xl:pr-0 sm:p-5   h-full w-full' id="main_container">
                <div className='w-full h-full flex sm:flex-row flex-col font-bold text-2xl'>
                        <div className='w-full sm:w-[40%] h-full flex justify-center   p-5 sm:p-10'>
                            <div className='sm:w-[350px] flex flex-col gap-y-5 w-full justify-center'>
                                <div className='text-4xl text-white  font-Jakarta sm:font-bold'>
                                    <h1>Our Features Specially For You</h1>
                                </div>
                                <div className='text-[15px] sm:text-[17px] font-normal tracking-wide font-Jakarta text-white capitalize'>
                                    <h1>Our top features which makes us unique from all platforms.</h1>
                                </div>
                                <div>
                                    <button className=' w bg-[#1D6996] sm:bg-[#FDD619] hover:sm:bg-[#e3c016] hover:bg-[#1a5e87] text-white [word-spacing:3px] sm:text-black duration-150 w-[178px] h-[66px] text-[17px] font-semibold font-Jakarta rounded-[8px] shadow-2xl shadow-black/40'>Get Started</button>
                                </div>
                            </div>
                        </div>
                        <div className='w-full sm:w-[60%] h-full sm:flex flex-col sm:flex-row justify-center  md:p-5 lg:p-7 xl:p-10 items-center lg:pr-0 xl:pr-0 sm:pr-5   hidden ' >
                            <Swiper
                                spaceBetween={40}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='w-full h-auto sm:flex justify-between items-center hidden'
                            >
                                {
                                    featuresData.map((current, index) => (
                                        <SwiperSlide id="customSwiperStyle" key={index} className='w-[320px] h-full sm:w-[330px] sm:h-[350px]' >
                                            <FeatureDetailComponent icon={current.icon} title={current.title} detail={current.detail}/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    <div className='w-full sm:w-[60%] h-full flex flex-col gap-y-5 justify-between  items-center p-5 sm:hidden '>
                        {
                            featuresData.map((current, index) => (
                                <div key={index} className='w-full h-full sm:w-[330px] sm:h-[350px] bg-white shadow-[6px_6px_0px_0px_rgba(71,181,255,1)] rounded-[2px] flex items-center px-8'>
                                    <div className='w-full h-full flex flex-col items-center  gap-y-4 py-10'>
                                        <div className='w-[60px] h-[60px] bg-[#47B5FF82] rounded-full flex items-center p-2 relative'>
                                            <img src={current.icon} alt="LanguageIcon" className='w-full p-2 h-full absolute left-5'/>
                                        </div>
                                        <div className='text-[22px] text-[#0B4C74]  font-bold'>
                                            <h1>{ current.title }</h1>
                                        </div>
                                        <div className='w-full text-[#677B88] font-normal text-[14px] text-center font-Jakarta leading-[25px]'>
                                            <p>{ current.detail }</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureComponent;