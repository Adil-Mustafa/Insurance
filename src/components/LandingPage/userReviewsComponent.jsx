import React, {useEffect, useState} from 'react';
import HeadingLine from "../../assets/HeadingLine.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import User1 from '../../assets/user1Img.png';
import RatingImg from '../../assets/ratingImg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

SwiperCore.use([Navigation]);
function UserReviewsComponent() {

    const [swiperOne, setSwiperOne] = useState()
    const [swiperTwo, setSwiperTwo] = useState()
    const [userReviewsCount, setUserReviewCount] = useState(4)

   
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    useEffect(() => {
        console.log('useEffect ::');
        if(isDesktopOrLaptop) {console.log('isDesktopo'); setUserReviewCount(4) }
        else if(isTabletOrMobile) {console.log('isMobile'); setUserReviewCount(1) }
        else if(isBigScreen) {console.log('isBigScreen'); setUserReviewCount(5) }
        console.log('userReviewsCount', userReviewsCount);
    }, [isBigScreen, isDesktopOrLaptop, isTabletOrMobile]);
    const handleNextClick = () => {
        console.log('handleNextClick ::');
        swiperOne.slideNext();
        swiperTwo.slideNext();
    };
    const handlePrevClick = () => {
        swiperOne.slidePrev();
        swiperTwo.slidePrev();
    }


    return (
        <section className='w-full flex flex-col'>
            <div className='flex flex-col  w-full h-full'>
                <div className='px-4 sm:px-48'>
                    <div className='w-full sm:w-[500px] '>
                        <h1 className='text-[#06283D] tracking-tight text-[40px] font-bold sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]'>See What Our Users <span>
                        <div className='w-full sm:flex justify-end px-10 -mb-6 hidden'>
                        <img src={HeadingLine} alt="Heading line" className='flex justify-end w-[200px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] -mt-3' />
                    </div>
                    </span>Are Saying</h1>
                        <div className='w-full flex sm:hidden justify-end px-10 -mb-6'>
                            <img src={HeadingLine} alt="Heading line" className='flex justify-end w-[220px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] -mt-3' />
                        </div>
                    </div>
                    <div className='w-full sm:flex justify-end gap-x-5 hidden  '>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center' onClick={handlePrevClick}>
                            <MdKeyboardArrowLeft  size={50} className='text-white'/>
                        </button>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center' onClick={handleNextClick}>
                            <MdKeyboardArrowRight size={50} className='text-white' />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full flex gap-x-10  relative'>
                       
                        <Swiper spaceBetween={isTabletOrMobile ? 40 : isDesktopOrLaptop ? 70 : 40}
                                slidesPerView={userReviewsCount}
                                loop={true}
                                rewind={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => setSwiperOne(swiper)}
                                navigation={true}
                                className='w-full  flex gap-x-10 my-8 relative -left-1'
                                noSwiping={true}
                        >
                            {
                                Array.from({length: 10}).map((current, index) => (
                                    <SwiperSlide className='w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px]'>
                                        <div className='w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px] rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.07)]  flex items-start px-8 -ml-4 sm:-ml-0'>
                                            <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                                                <div className='flex gap-x-2'>
                                                    <div className='w-[64px] h-[64px] rounded-full '>
                                                        <img src={User1} alt="User" />
                                                    </div>
                                                    <div className='flex flex-col justify-start'>
                                                        <h1 className='text-[18px] font-bold text-[#06283D] font-Jakarta'>Jane Cooper</h1>
                                                        <h1 className='text-[#06283D99] -mt-1 text-[14px] font-Jakarta'>Marketing Coordinator</h1>
                                                    </div>
                                                </div>
                                                <div className='w-[160px]'>
                                                    <img src={RatingImg} alt="rating" />
                                                </div>
                                                <div className='w-full text-[#06283D] text-[16px] font-Jakarta leading-[28px]'>
                                                    <p>“I value simplicity and this platform made health insurance a breeze.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='w-full flex gap-x-10  relative'>
                   
                        <Swiper spaceBetween={70}
                                slidesPerView={userReviewsCount}
                                loop={true}
                                rewind={true}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => setSwiperTwo(swiper)}
                                navigation={true}
                                noSwiping={true}
                                noSwipingClass= 'swiper-slide'
                                allowTouchMove={false}
                                className='w-full  flex gap-x-10 my-8 relative -left-1 '
                        >
                            {
                                Array.from({length: 10}).map((current, index) => (
                                    <SwiperSlide className='w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px]'>
                                        <div className=' w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px] rounded-[20px] shadow-[40px_20px_80px_0px_rgba(101,115,137,0.07)]  flex items-start px-8 -ml-44 sm:-ml-32'>
                                            <div className='flex flex-col  gap-y-4 h-full w-full py-10'>
                                                <div className='flex gap-x-2'>
                                                    <div className='w-[64px] h-[64px] rounded-full '>
                                                        <img src={User1} alt="User" />
                                                    </div>
                                                    <div className='flex flex-col justify-start'>
                                                        <h1 className='text-[18px] font-bold text-[#06283D] font-Jakarta'>Jane Cooper</h1>
                                                        <h1 className='text-[#06283D99] -mt-1 text-[14px] font-Jakarta'>Marketing Coordinator</h1>
                                                    </div>
                                                </div>
                                                <div className='w-[160px]'>
                                                    <img src={RatingImg} alt="rating" />
                                                </div>
                                                <div className='w-full text-[#06283D] text-[16px] font-Jakarta leading-[28px]'>
                                                    <p>“I value simplicity and this platform made health insurance a breeze.”</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='w-full my-4 flex justify-center sm:justify-end gap-x-5 sm:hidden  '>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center' onClick={handlePrevClick}>
                            <MdKeyboardArrowLeft  size={50} className='text-white'/>
                        </button>
                        <button className='w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center' onClick={handleNextClick}>
                            <MdKeyboardArrowRight size={50} className='text-white' />
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default UserReviewsComponent;