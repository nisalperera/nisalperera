

function Loader({ message = "Loading..." }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "200px" }}>
      <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
      </div>
      <span className="mt-2">{message}</span>
    </div>
  );
}

export default Loader;
