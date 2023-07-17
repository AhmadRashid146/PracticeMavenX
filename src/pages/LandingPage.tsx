import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Brands from "../components/Brands";
import Block from "../components/Block";
import Services from "../components/Services";

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
      </div>
    </>
  );
};

export default LandingPage;
