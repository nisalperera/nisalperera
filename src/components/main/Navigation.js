import React, { useEffect, useState, useRef, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeToggle from "../main/ThemeToggle";
import { ThemeContext } from "../../context/ThemeContext";
import { REACT_APP_BASE_URL } from "../../utils/config";
import './css/navigation.css';

function Navigation({ certifications }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const lastScrollTop = useRef(window.scrollY);
    const { theme } = useContext(ThemeContext);

    // Detect scroll for desktop minimize/restore
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 992) {
                if (window.scrollY > lastScrollTop.current) {
                    setMinimized(true); // scrolling down, minimize
                } else {
                    setMinimized(false); // scrolling up, expand
                }
                lastScrollTop.current = window.scrollY;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hide sidebar on window resize if mobile
    useEffect(() => {
        const handleResize = () => {
            setMinimized(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const navLinks = (
        <>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#`}>Home</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#summary`}>Summary</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#education`}>Education</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#skills`}>Skills</a></li>
            {certifications && <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#certifications`}>Certifications</a></li>}
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#languages`}>Languages</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#experience`}>Experience</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#projects`}>Projects</a></li>
            <li className="nav-item"><a className="nav-link" href={`${REACT_APP_BASE_URL}#references`}>References</a></li>
        </>
    );

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;
    const navBarClass = theme === "dark"
        ? "navbar navbar-dark bg-dark position-fixed w-100 d-flex align-items-center justify-content-between px-3"
        : "navbar navbar-light bg-light position-fixed w-100 d-flex align-items-center justify-content-between px-3";

    const sidebarClass = theme === "dark"
        ? "bg-dark navbar-dark position-fixed top-0 start-0 vh-100 d-flex flex-column justify-content-between border-end transition-all"
        : "bg-light navbar-light position-fixed top-0 start-0 vh-100 d-flex flex-column justify-content-between border-end transition-all";

    return (
        <>
            {/* Mobile Topbar */}
            {isMobile && (
                <nav className={navBarClass} data-bs-theme={theme} style={{ height: "56px", top: 0, zIndex: 1041 }}>
                    <span className="fw-bold h5 mb-0">Nisal Perera</span>
                    <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            )}
            {/* Sidebar */}
            <nav
                className={`${sidebarClass} ${isMobile ? (sidebarOpen ? 'show' : 'd-none') : minimized ? 'sidebar-minimized' : ''}`}
                style={{
                    width: isMobile ? '220px' : minimized ? '100px' : '220px',
                    zIndex: isMobile ? 1042 : 1040,
                    transition: "width 0.2s",
                }}
            >
                {/* Header and close button */}
                <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom">
                    <span className="fw-bold h5 mb-0">{minimized ? "NP" : "Nisal Perera"}</span>
                    {isMobile ? (
                        <button className="btn" onClick={() => setSidebarOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    ) : (
                        <button
                            className="btn btn-outline-secondary btn-sm ms-2"
                            onClick={() => setMinimized((prev) => !prev)}
                            aria-label={minimized ? "Expand sidebar" : "Minimize sidebar"}
                            style={{ borderRadius: "50%" }}
                        >
                            {minimized ? (
                                // Expanded icon
                                <span title="Expand">&#x25B6;</span>   // ▶
                            ) : (
                                // Collapse icon
                                <span title="Minimize">&#x23F5;</span> // ⏵
                            )}
                        </button>
                    )}
                </div>

                {/* {!minimized ? <Header /> : <div></div>} */}

                {/* Navigation links */}
                <ul className="nav flex-column" style={{ marginTop: "0" }}>
                    {navLinks}
                </ul>
                <div className="p-3 mt-auto">
                    <ThemeToggle minimized={minimized} />
                </div>
            </nav>
            {/* Offcanvas backdrop for mobile */}
            {isMobile && sidebarOpen && (
                <div className="offcanvas-backdrop fade show" style={{ zIndex: 1041 }} onClick={() => setSidebarOpen(false)} />
            )}
        </>
    );
}

export default Navigation;
