import Paragraph from "./Paragraph";

interface IServiceCard {
  heading: string;
  text: string;
  className?: string;
}

const ServiceCard = ({ heading, text, className }: IServiceCard) => {
  return (
    <div className={className}>
      <h3>{heading}</h3>
      <Paragraph>{text}</Paragraph>
    </div>
  );
};

export default ServiceCard;
