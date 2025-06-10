function Header() {
  // Replace with your actual coordinates for Negombo, Sri Lanka
  const locationCoords = "7.259583, 79.856605";
  const googleMapsUrl = `https://www.google.com/maps/place/${locationCoords}`;

  return (
    <div className="header" style={{ alignContent: "center" }}>
      <div className="round-image">
        <img src="./2H8A6958 no back.png" alt="Nisal Perera" />
      </div>
      <h1>Nisal Perera</h1>
      <p>Computer Vision | Robotics | Research and Development</p>
      <p>
        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
          Negombo, Sri Lanka
        </a>{" "}
        |{" "}
        <a href="tel:+94773122382">+94 (77) 3122382</a> |{" "}
        <a href="mailto:chinthanapereranisal@gmail.com">
          chinthanapereranisal@gmail.com
        </a>{" "}
        | <a href="https://www.linkedin.com/in/nisalperera/">LinkedIn</a>
      </p>
    </div>
  );
}

export default Header;
