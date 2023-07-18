import varta from "/varta.svg";
import lenovo from "/lenovo.svg";
import bbc from "/bbs.svg";
import weller from "/weller.svg";
import bairway from "/british_airways.svg";
import lufthansa from "/lufthansa.svg";
function Brands() {
  return (
    <div className="py-4 d-flex justify-content-lg-between justify-content-between flex-wrap brands">
      <img src={varta} alt="Amiso Brands" />
      <img src={lenovo} alt="Amiso Brands" />
      <img src={bbc} alt="Amiso Brands" />
      <img src={weller} alt="Amiso Brands" />
      <img src={bairway} alt="Amiso Brands" />
      <img src={lufthansa} alt="Amiso Brands" />
    </div>
  );
}

export default Brands;
