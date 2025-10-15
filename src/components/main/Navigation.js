import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { REACT_APP_BASE_URL } from "../../utils/config";
import ThemeToggle from "../main/ThemeToggle";

function Navigation({ certifications }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <ThemeToggle />
                <a
                    className="navbar-brand ms-4 me-2"
                    href={`${REACT_APP_BASE_URL}#`}
                    style={{ marginLeft: "1rem" }}
                >
                    Nisal Perera
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#`}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#summary`}>Summary</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#education`}>Education</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#skills`}>Skills</a></li>
                        {certifications &&
                            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#certifications`}>Certifications</a></li>}
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#languages`}>Languages</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#experience`}>Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#projects`}>Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#references`}>References</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
