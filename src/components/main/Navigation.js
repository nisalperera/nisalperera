/**
 * Renders a responsive navigation bar with links to various sections of the site.
 *
 * The navigation bar adapts its base URL depending on the environment and conditionally displays a Certifications link if the {@link certifications} prop is truthy.
 *
 * @param {Object} props
 * @param {boolean} props.certifications - Determines whether to display the Certifications navigation link.
 *
 * @returns {JSX.Element} The navigation bar component.
 */
function Navigation({ certifications }) {

    const baseUrl = `${process.env.PUBLIC_URL || window.location.origin}${process.env.PUBLIC_URL ? '' : '/nisalperera'}`; // example – adjust to avoid repetition

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
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#`}>Home</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#summary`}>Summary</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#education`}>Education</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#skills`}>Skills</a></li>
                        {certifications &&
                            <li className="nav-item"><a className="nav-link" href={`${baseUrl}#certifications`}>Certifications</a></li>}
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#languages`}>Languages</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#experience`}>Experience</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#projects`}>Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href={`${baseUrl}#references`}>References</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default Navigation;
