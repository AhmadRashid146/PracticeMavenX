import GetInput from "./GetInput";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import vectorImg from "/hero-illustration.png";

const HeroSection = () => {
  return (
    <div className="my-5  d-flex flex-column flex-lg-row  herodiv">
      <div className="herodiv-div mb-5">
        <Heading className="display-4 fw-bolder mb-4">
          Landing page for <br></br>your online service
        </Heading>
        <Paragraph>
          Sed ea enim et expedita quo. Sint<br></br> consequuntur nobis expedita
          mollitia<br></br>
          voluptatem aut est a quia.
        </Paragraph>
        <GetInput></GetInput>
      </div>
      <div className="herodiv-div">
        <img width="100%" src={vectorImg} />
      </div>
    </div>
  );
};

export default HeroSection;
