import React, { useEffect, useState } from "react";
import HeadingLine from "../../assets/HeadingLine.png";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data/data";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import FeatureSlider from "../../shared/FeatureSlider";
 
SwiperCore.use([Navigation]);
function UserReviewsComponent() {
  const [swiperOne, setSwiperOne] = useState();
  const [swiperTwo, setSwiperTwo] = useState();
  const [userReviewsCount, setUserReviewCount] = useState(4);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (isDesktopOrLaptop) {
      console.log("isDesktopOrLaptop");
      setUserReviewCount(4);
    } else if (isTabletOrMobile) {
      console.log("isMobile");
      setUserReviewCount(1);
    } else if (isBigScreen) {
      console.log("isBigScreen");
      setUserReviewCount(5);
    }
  }, [isBigScreen, isDesktopOrLaptop, isTabletOrMobile]);
  const handleNextClick = () => {
    swiperOne.slideNext();
    swiperTwo.slideNext();
  };
  const handlePrevClick = () => {
    swiperOne.slidePrev();
    swiperTwo.slidePrev();
  };

  return (
    <section className="w-full flex flex-col">
      <div className="flex flex-col  w-full h-full">
        <div className="px-4 sm:px-48">
          <div className="w-full sm:w-[500px] ">
            <h1 className="text-[#06283D] tracking-tight text-[40px] font-bold sm:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[50px]">
              See What Our Users{" "}
              <span>
                <div className="w-full sm:flex justify-end px-10 -mb-6 hidden">
                  <img
                    src={HeadingLine}
                    alt="Heading line"
                    className="flex justify-end w-[200px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] -mt-3"
                  />
                </div>
              </span>
              Are Saying
            </h1>
            <div className="w-full flex sm:hidden justify-end px-10 -mb-6">
              <img
                src={HeadingLine}
                alt="Heading line"
                className="flex justify-end w-[220px] h-[14px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px] -mt-3"
              />
            </div>
          </div>
          <div className="w-full sm:flex justify-end gap-x-5 hidden  ">
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center"
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowLeft size={50} className="text-white" />
            </button>
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center"
              onClick={handleNextClick}
            >
              <MdKeyboardArrowRight size={50} className="text-white" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex gap-x-10  lg: ml-16 sm: ml:8 relative">
            <Swiper
              slidesPerView={userReviewsCount}
              loop={true}
              rewind={true}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => setSwiperOne(swiper)}
              navigation={true}
              className='w-full  flex gap-x-10 my-8 relative -left-1'
              noSwiping={true}
            >
              {data?.UsersReview1?.map((userReview, index) => (
                <SwiperSlide className='w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px]'>
                  <FeatureSlider userReview={userReview}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full flex gap-x-10  relative">
            <Swiper
              spaceBetween={70}
              slidesPerView={userReviewsCount}
              loop={true}
              rewind={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => setSwiperTwo(swiper)}
              navigation={true}
              className="w-full  flex gap-x-10 my-8 relative -left-1 "
            >
              { data?.UsersReview2?.map((userReview, index) => (
                <SwiperSlide key={index} className="w-[331px] h-[243px] sm:min-w-[398px] sm:min-h-[292px]">
                 <FeatureSlider userReview={userReview} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full my-4 flex justify-center sm:justify-end gap-x-5 sm:hidden  ">
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#1D6996] hover:bg-[#1a5e87] duration-150 flex items-center justify-center"
              onClick={handlePrevClick}
            >
              <MdKeyboardArrowLeft size={50} className="text-white" />
            </button>
            <button
              className="w-[72px] h-[72px] rounded-full bg-[#47A5DC] hover:bg-[#3f94c6] duration-150 flex items-center justify-center"
              onClick={handleNextClick}
            >
              <MdKeyboardArrowRight size={50} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserReviewsComponent;
