/**
 * Renders the header section with a profile image, name, expertise, and interactive contact links.
 *
 * Displays clickable links for location (Google Maps), phone, email, and LinkedIn profile.
 *
 * @returns {JSX.Element} The header component with profile and contact information.
 */

function Header() {

  return (
    <div className="header" style={{ alignContent: "center" }}>
      <h1 style={{ marginLeft: "2rem" }}>Project by Nisal Perera</h1>
      <p>Artificial Intelligence | Machine Learning | Deep Learning | Computer Vision | Robotics</p>
    </div>
  );
}

export default Header;
