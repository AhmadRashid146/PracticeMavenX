import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
interface Props {
  items: string[];
}

function ListGroup({ items }: Props) {
  // let items = ["Frontend", "Backend", "MiddleWare", "Devops", "UI & UX"];

  // items = [];
  /**
   * State
   */
  const [isNavOpen, setNavOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(4);

  return (
    <>
      <FiMenu
        onClick={() => setNavOpen(true)}
        className="d-lg-none d-block"
        style={{ fontSize: "30px" }}
      />
      <ul className="navbar-nav d-lg-flex d-none">
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? "nav-item active" : "nav-item"}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {isNavOpen && (
        <ul className="navbar-nav sm-navbar-nav d-lg-none d-flex position-absolute bg-white top-0 end-0 p-5 shadow rounded">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                selectedIndex === index
                  ? "nav-item active w-100"
                  : "nav-item w-100"
              }
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
          <RxCross2
            onClick={() => setNavOpen(false)}
            className="position-absolute cross-icon"
          />
        </ul>
      )}
    </>
  );
}

export default ListGroup;
