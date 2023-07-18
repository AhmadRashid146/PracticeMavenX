import blockimg from "../../public/block-pic-1.svg";
import Button from "./Button";
import Paragraph from "./Paragraph";

interface IBlock{
    className?:string;
}

const Block = ({className}:IBlock) => {
  return (
    <div className={className}>
      <div className="herodiv-div mb-5">
        <img style={{width:'100%'}} src={blockimg} />
      </div>
      <div className="herodiv-div d-flex flex-column justify-content-center ms-4 mb-5">
        <h1>Incredible</h1>
        <Paragraph>
          Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos.
          Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed
          similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium
          sunt aut tempora ut alias.
        </Paragraph>
        <Button className="btn  my-4 activebtn">Get Started</Button>
      </div>
    </div>
  );
};

export default Block;
