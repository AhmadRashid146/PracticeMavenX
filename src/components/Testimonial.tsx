import Heading from "./Heading";
import Paragraph from "./Paragraph";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="my-5 py-5">
      <Heading className="display-6 fw-bolder text-center mb-4">
        Testimonials
      </Heading>
      <Paragraph className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.
        Quisquam, repellendus numquam.
      </Paragraph>
      <div className="container my-5 d-flex flex-lg-nowrap flex-wrap service-card-div">
        <TestimonialCard
          className="testimonial-card"
          name="Aron Lowe"
          company="Schneider Inc"
          description="Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit."
          img="../../public/testimonials-ava-1.jpg"
        ></TestimonialCard>
        <TestimonialCard
          className="testimonial-card"
          name="Aron Lowe"
          company="Schneider Inc"
          description="Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit."
          img="../../public/testimonials-ava-1.jpg"
        ></TestimonialCard>
        <TestimonialCard
          className="testimonial-card"
          name="Aron Lowe"
          company="Schneider Inc"
          description="Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit."
          img="../../public/testimonials-ava-1.jpg"
         ></TestimonialCard>
      </div>
    </div>
  );
};

export default Testimonial;
