/**
 * Displays a 404 "Data Not Found" message with an optional custom description.
 *
 * @param {Object} props
 * @param {string} [props.message] - Optional custom message to display below the heading.
 * @returns {JSX.Element} A styled container with a 404 heading and a descriptive message.
 */
function NotFound({ message }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "200px" }}>
      <h2>404 - Data Not Found</h2>
      <p>{message || "Sorry, the data could not be loaded."}</p>
    </div>
  );
}

export default NotFound;
