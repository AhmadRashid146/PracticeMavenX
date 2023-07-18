import GetInput from "./GetInput";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface IGetStarted{
    className:string;
}

const GetStarted = ({className}:IGetStarted) => {
  return (
    <div className={className}>
        <Heading className="display-4 mb-4">Start your free trial</Heading>
        <Paragraph >Trial period - 14 days, no credit card required</Paragraph>
        <GetInput></GetInput>
    </div>
  )
}

export default GetStarted