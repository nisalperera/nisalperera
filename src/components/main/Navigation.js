function Navigation({ certifications }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Nisal Perera</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#summary">Summary</a></li>
                        <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        {certifications &&
                            <li className="nav-item"><a className="nav-link" href="#certifications">Certifications</a></li>}
                        <li className="nav-item"><a className="nav-link" href="#languages">Languages</a></li>
                        <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#references">References</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
