import testimg from "../../public/testimonials-ava-1.jpg";
interface ITestimonialCard {
  name: string;
  company: string;
  description: string;
  className?: string;
  img?: string;
}

const TestimonialCard = ({
  name,
  company,
  description,
  className,
  img
}: ITestimonialCard) => {
  return (
    <div className={className}>
      <div className="d-flex align-items-center">
        <div className="img-div me-3">
          <img src={img} />
        </div>
        <div>
          <h4 className="mb-0">{name}</h4>
          <span>{company}</span>
        </div>
      </div>
      <div className="mt-4">{description}</div>
    </div>
  );
};

export default TestimonialCard;
