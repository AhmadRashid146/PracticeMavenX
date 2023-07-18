import logo from "../../public/logo.svg";
import ListGroup from "./ListGroup";

const Navbar = () => {
  let items = ["Features ", "Prices ", "About ", "Contacts ", "Get Started"];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light py-4 position-static  bg-none">
        <div className="container-fluid d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>

          <ListGroup items={items}></ListGroup>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
