const GetInput = () => {
  return (
    <div className="input-group input-group-lg w-auto mt-3">
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        placeholder="Your email address"
        style={{ maxWidth: "300px" }}
      />
      <span className="input-group-text activebtn" id="inputGroup-sizing-lg">
        Get Started
      </span>
    </div>
  );
};

export default GetInput;
