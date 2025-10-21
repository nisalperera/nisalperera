import { isMobile } from "react-device-detect";

function Footer() {
  return (
    <footer className="footer" style={{ marginLeft: isMobile ? "auto" : "200px"}}>
      <div className="container">
        <a href="https://github.com/nisalperera" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://gitlab.com/nisalperera" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-gitlab"></i> GitLab
        </a>
        <a href="https://www.linkedin.com/in/nisalperera/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
