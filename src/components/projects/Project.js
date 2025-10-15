import { useState, useEffect } from 'react';
import Loader from '../main/Loader';
import { LoadDataFile } from '../../utils/dataLoader';
import { slugify } from '../../utils/slug';
import { REACT_APP_BASE_URL } from "../../utils/config"

import NotFound from '../error/NotFound';

const Project = ({ project, gallerySize }) => {
    const [images, setImages] = useState([]);

    const projectName = project?.name ? slugify(project.name) : null;   // null signals “nothing to load”

    const [projectDetails, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!projectName) { setIsLoading(false); return; }
        LoadDataFile(`${REACT_APP_BASE_URL}${projectName}/details.json`)
            .then(projectDetails => {
                setData(projectDetails);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, [projectName]);

    useEffect(() => {
        if (!project?.name) return;

        // const folder = sanitizeName(project.name);
        const loadedImages = [];
        let i = 1;
        let loadCount = 0;
        const MAX_IMAGES = 1000; // Safety cap to avoid infinite loop

        const tryLoadImage = () => {
            // If gallerySize is set, stop at that number. Otherwise, keep going until a missing image or MAX_IMAGES.
            if ((gallerySize && loadCount >= gallerySize) || (!gallerySize && loadCount >= MAX_IMAGES)) {
                setImages(loadedImages);
                return;
            }
            const img = new window.Image();
            const src = `${REACT_APP_BASE_URL}${projectName}/${i}.jpg`;
            img.src = src;
            img.onload = () => {
                loadedImages.push(src);
                i++;
                loadCount++;
                tryLoadImage();
            };
            img.onerror = () => {
                setImages(loadedImages);
            };
        };
        tryLoadImage();
        // eslint-disable-next-line
    }, [project?.name, gallerySize]);

    if (isLoading) return <Loader />;
    if (projectDetails === null) return <NotFound message={"This page is currently under construction. Please check back soon. "
        + "I am excited to share what I have worked on!"} />;

    if (!project) return <NotFound />;

    console.log(projectDetails)

    return (
        <>
            <h2 className="section-title">{project.name}</h2>
            <div className="project-item" style={styles.meta}>
                <span style={styles.company}>{project.company}</span>
                <span style={styles.period}>{project.period}</span>
            </div>
            <p style={styles.description}>{project.description}</p>
            <ul style={styles.detailsList}>
                {project.details && project.details.map((detail, idx) => (
                    <li key={idx} style={styles.detailItem}>{detail}</li>
                ))}
            </ul>
            <div style={styles.links}>
                {project.links && project.links.map((link, idx) => (
                    <div key={idx} style={styles.linkItem}>
                        <strong>{link.name}: </strong>
                        {link.official && (
                            <a href={link.official} target="_blank" rel="noopener noreferrer">
                                Official Site
                            </a>
                        )}
                        {link.github && (
                            <>
                                {' | '}
                                <a href={link.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </>
                        )}
                    </div>
                ))}
            </div>
            {/* Image Gallery */}
            <h3 className="section-title">Image Gallery</h3>
            {images.length > 0 ? (
                <div style={styles.gallery}>
                    {images.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Project ${project.name} screenshot ${idx + 1}`}
                            style={styles.galleryImage}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ marginBottom: 16 }}>Images will be updated soon.</div>
            )}
            {/* Video Gallery */}
            <h3 className="section-title">Video Gallary</h3>
            {/* Video Gallery with Descriptions */}
            {projectDetails?.videos && projectDetails.videos.length > 0 ? (
                <div className="project-item" style={styles.videoGrid}>
                    {projectDetails.videos.map((video, idx) => (
                        <div key={idx} style={styles.videoTile}>
                            <video
                                controls
                                width="100%"
                                height="120"
                                style={styles.video}
                                src={`${REACT_APP_BASE_URL}${projectName}/${video.link}`}
                                preload="metadata"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <div className="project-item" style={styles.videoDescription}>
                                {video.description}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{ marginBottom: 16}}>Videos will be updated soon.</div>
            )}
        </>
    );
};

const styles = {
    container: {
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: 24,
        maxWidth: 600,
        margin: '24px auto',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
    },
    title: {
        margin: 0,
        fontSize: 28,
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15,
        marginBottom: 8
    },
    company: { fontWeight: 'bold' },
    period: { fontStyle: 'italic' },
    description: {
        fontSize: 16,
        margin: '12px 0'
    },
    detailsList: {
        paddingLeft: 20,
        marginBottom: 16
    },
    detailItem: {
        marginBottom: 6
    },
    gallery: {
        display: 'flex',
        gap: 12,
        marginBottom: 16,
        flexWrap: 'wrap'
    },
    galleryImage: {
        width: 120,
        height: 80,
        objectFit: 'cover',
        borderRadius: 4,
        border: '1px solid #ddd',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
    },
    links: {
        marginTop: 10
    },
    linkItem: {
        marginBottom: 4
    },
    videoGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
        gap: 16,
        marginBottom: 16,
    },
    videoTile: {
        borderRadius: 4,
        overflow: 'hidden',
        boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    video: {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    videoDescription: {
        marginTop: 8,
        padding: '0 8px 8px 8px',
        fontSize: 14,
        minHeight: 30
    }
};

export default Project;
