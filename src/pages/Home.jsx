import HeroStar from "../assets/HeaderStar.png";
import Hero from "../components/LandingPage/Hero";
import Header from "../shared/Header";
import ChooseUs from "../components/LandingPage/Chooseus";
import HowItWorkComponent from "../components/LandingPage/HowItWorkComponent";
import FeelingConfident from "../components/LandingPage/FeelingConfident";
import HeroPattern from "../assets/HeroPattren.png";
import Footer from "../shared/Footer";
import FeatureComponent from "../components/LandingPage/FeatureComponent";
import UserReviewsComponent from "../components/LandingPage/ReviewsComponent";

function Home() {
  return (
    <main className="w-screen h-screen relative overflow-x-hidden">
      <div className="absolute w-full h-full">
        <div className=" w-[300px] absolute hidden sm:block">
          <img src={HeroStar} alt="hero star" className="absolute opacity-20" />
        </div>
        <Header />
        <section className="relative left-0 w-full h-[90%] ">
          <Hero />
          <div className="relative sm:absolute bottom-2 h-[62px] md:h-[140px] lg:h-[150px] xl:h-[170px] 2xl:h-[202px] sm:h-fit z-50 w-full">
            <img
              src={HeroPattern}
              alt="Hero bottom pattern"
              className="h-full w-full"
            />
          </div>
          <ChooseUs />
          <HowItWorkComponent />
          <FeatureComponent />
          <UserReviewsComponent />
          <FeelingConfident />
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default Home;
