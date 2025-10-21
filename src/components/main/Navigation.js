import React, { useState, useContext } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeToggle from "../main/ThemeToggle";
import { ThemeContext } from "../../context/ThemeContext";
import { REACT_APP_DEV, REACT_APP_DEV_URL, REACT_APP_BASE_URL } from "../../utils/config";
import './css/navigation.css';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaCertificate, FaLanguage, FaBriefcase, FaProjectDiagram, FaUsers } from "react-icons/fa";
import { isMobile } from "react-device-detect";

function Navigation({ certifications }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [minimized, setMinimized] = useState(false);
    const { theme } = useContext(ThemeContext);

    const image_path = REACT_APP_DEV ? `${REACT_APP_DEV_URL}/2H8A6958_130x130.png` : "./2H8A6958 no back.png";

    const navBarClass = `navbar navbar-${theme} bg-${theme} position-fixed w-100 d-flex align-items-center justify-content-between px-3`
    const sidebarClass = `bg-${theme} navbar-${theme} position-fixed top-0 start-0 vh-100 d-flex flex-column justify-content-between border-end sidebar transition-all`

    const navItems = [
        { label: "Home", href: "#", icon: <FaHome className="sidebar-icon" /> },
        { label: "Summary", href: "#summary", icon: <FaUser className="sidebar-icon" /> },
        { label: "Education", href: "#education", icon: <FaGraduationCap className="sidebar-icon" /> },
        { label: "Skills", href: "#skills", icon: <FaTools className="sidebar-icon" /> },
        ...(certifications ? [{ label: "Certifications", href: "#certifications", icon: <FaCertificate className="sidebar-icon" /> }] : []),
        { label: "Languages", href: "#languages", icon: <FaLanguage className="sidebar-icon" /> },
        { label: "Experience", href: "#experience", icon: <FaBriefcase className="sidebar-icon" /> },
        { label: "Projects", href: "#projects", icon: <FaProjectDiagram className="sidebar-icon" /> },
        { label: "References", href: "#references", icon: <FaUsers className="sidebar-icon" /> },
    ];

    return (
        <>
            {/* Mobile Topbar */}
            {isMobile && (
                <nav className={navBarClass} data-bs-theme={theme} style={{ height: "56px", top: 0, zIndex: 1041 }}>
                    <span className="fw-bold h5 mb-0">
                        <a className="unstyled-link" href={`${REACT_APP_BASE_URL}#`}>
                            Nisal Perera
                        </a>
                    </span>
                    <ThemeToggle minimized={minimized} isMobile={isMobile} />
                    <button className="navbar-toggler" type="button" onClick={() => setSidebarOpen(true)} aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            )}
            {/* Sidebar */}
            <nav
                className={`${sidebarClass} ${isMobile ? (sidebarOpen ? 'show' : 'd-none') : minimized ? 'sidebar-minimized' : ''}`}
                style={{
                    width: isMobile ? '220px' : minimized ? '120px' : '220px',
                    zIndex: isMobile ? 1042 : 1040,
                    transition: "width 0.2s",
                }}
            >
                {/* Header and close/minimize button */}
                <div className="d-flex align-items-center justify-content-between px-3 py-2 border-bottom" style={{ height: "100px" }}>
                    <span style={{ alignContent: "center" }}>
                        {!minimized &&
                            <div className="round-image-sidebar">
                                <a href={`${REACT_APP_BASE_URL}#`}>
                                    <img src={image_path} alt="Nisal Perera" />
                                </a>
                            </div>}
                    </span>
                    <span className="fw-bold h5 mb-0" style={{ marginLeft: "20px", marginRight: "0px" }}>
                        {minimized ?
                            <div className="round-image-sidebar">
                                <a href={`${REACT_APP_BASE_URL}#`}>
                                    <img src={image_path} alt="Nisal Perera" />
                                </a>
                            </div> : "Nisal Perera"}
                    </span>
                    {isMobile ? (
                        <button className="btn" onClick={() => setSidebarOpen(false)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    ) : (
                        <button
                            // className="btn btn-outline-secondary btn-sm ms-2"
                            className="round-btn"
                            onClick={() => setMinimized((prev) => !prev)}
                            aria-label={minimized ? "Expand sidebar" : "Minimize sidebar"}
                            style={{ borderRadius: "50%", marginLeft: "0px", width: "30px", height: "30px" }}
                        >
                            {minimized ? (
                                <FaChevronRight size={12}>&#x25B6;</FaChevronRight>
                            ) : (
                                <FaChevronLeft size={12}>&#x23F5;</FaChevronLeft>
                            )}
                        </button>
                    )}
                </div >
                {/* Navigation links at top */}
                < ul className="nav flex-column" style={{ marginTop: "0", alignItems: "center" }
                }>
                    {
                        navItems.map(item => (
                            <li className="nav-item" key={item.label}>
                                <a className="nav-link" href={`${REACT_APP_BASE_URL}${item.href}`}>
                                    <div className="icon-group">
                                        <span>{item.icon}</span>
                                        <span className={`nav-text${minimized ? " nav-text-hidden" : ""}`}>{item.label}</span>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul >
                {!isMobile ? <div className="p-3 mt-auto">
                    <ThemeToggle minimized={minimized} isMobile={isMobile} />
                </div> : <div className="p-3 mt-auto"></div>}
            </nav >
            {/* Offcanvas backdrop for mobile */}
            {
                isMobile && sidebarOpen && (
                    <div className="offcanvas-backdrop fade show" style={{ zIndex: 1041 }} onClick={() => setSidebarOpen(false)} />
                )
            }
        </>
    );
}

export default Navigation;
