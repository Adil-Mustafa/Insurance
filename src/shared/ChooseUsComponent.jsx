import React from 'react';
import LanguageIcon from "../assets/chooseUsLanguageIcon.png";

function ChooseUsComponent({ icon, headingOne, headingTwo, detail }) {
    return (
        <div
            className='w-full sm:w-[300px] h-[300px] bg-white rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.10)] border border-gray-400/10 flex items-center px-8'>
            <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                <div className='w-[50px] h-[50px] bg-[#E7EFFC] rounded-[10px] flex items-center p-2'>
                    <img src={icon} alt="LanguageIcon" className='w-full h-full'/>
                </div>
                <div className='text-[20px] text-[#06283D] font-Jakarta font-semibold'>
                    <h1>{ headingOne }</h1>
                    <h1>{ headingTwo }</h1>
                </div>
                <div className='w-full text-[#06283D99] text-[14px] font-Jakarta leading-[28px]'>
                    <p>{ detail }</p>
                </div>
            </div>
        </div>
    );
}

export default ChooseUsComponent;