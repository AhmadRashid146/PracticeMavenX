import Heading from "./Heading";
import Paragraph from "./Paragraph";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-5 srvc-bg">
      <Heading className="display-6 fw-bolder text-center mb-4">
        Our service features
      </Heading>
      <Paragraph className="text-center mb-4">
        Aliquid officiis cumque sunt sint. Et quo culpa. Enim <br /> sed natus
        molestiae fugiat cum consequatur quia <br /> sunt.
      </Paragraph>
      <div className="container my-5 service-card-div d-flex flex-lg-nowrap flex-wrap">
        <ServiceCard className="service-card" heading="Incredible" text="Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem." />
        <ServiceCard className="service-card" heading="Incredible" text="Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem." />
        <ServiceCard className="service-card" heading="Incredible" text="Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem." />
        <ServiceCard className="service-card" heading="Incredible" text="Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem." />
      </div>
    </div>
  );
};

export default Services;
