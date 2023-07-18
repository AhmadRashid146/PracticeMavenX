import logo from "../../public/logo.svg";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
interface IFooter {
  className: string;
}
const Footer = ({ className }: IFooter) => {
  let items = ["Features ", "Prices ", "About ", "Contacts "];
  /**
   * State
   */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className={className}>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <a href="#">
          <img src={logo} alt="" />
        </a>

        <ul className=" d-flex footer-list mb-0">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="social-media">
          <BsFacebook />
        </div>
      </div>
    </div>
  );
};

export default Footer;
