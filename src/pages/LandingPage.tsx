import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import Block from "../components/Block";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <Block className="my-5  d-flex flex-column flex-lg-row  herodiv"></Block>
        <Block className="my-5  d-flex flex-column flex-lg-row-reverse  herodiv"></Block>
        <Block className="my-5  d-flex flex-column flex-lg-row  herodiv"></Block>
      </div>
      <div>
        <Services></Services>
        <Testimonial></Testimonial>
        <GetStarted className=" container d-flex flex-column align-items-center start-div mb-5"></GetStarted>
        <hr className="container" />
      </div>
      <Footer className="container"></Footer>
    </>
  );
};

export default LandingPage;
