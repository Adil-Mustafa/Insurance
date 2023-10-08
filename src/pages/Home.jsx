import HeroStar from "../assets/HeaderStar.png";
import Hero from "../components/LandingPage/Hero";
import Header from "../shared/Header";
import ChooseUs from "../components/LandingPage/ChooseUs";
import HowItWorkComponent from "../components/LandingPage/HowItWorkComponent";
import FeelingConfident from "../components/LandingPage/FeelingConfident";
import HeroPattern from "../assets/HeroPattren.png";
import Footer from "../shared/Footer";
import FeatureComponent from "../components/LandingPage/FeatureComponent";
import UserReviewsComponent from "../components/LandingPage/ReviewsComponent";
import { useMediaQuery } from "@mui/material";

function Home() {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  return (
    <main className="w-screen h-screen relative overflow-x-hidden">
      <div className="absolute w-full h-full">
        <div className=" w-[300px] absolute hidden sm:block">
          <img src={HeroStar} alt="hero star" className="absolute opacity-20" />
        </div>
        <Header />
        <section className=" w-full h-[90%]">
          <section className="h-full">
            <Hero />
          </section>
          <div
            className="z-50 w-full"
            style={{ ...(isSmallScreen && { marginTop: 150 }) }}
          >
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
