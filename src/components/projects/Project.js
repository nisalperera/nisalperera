import { useState, useEffect } from 'react';
import Loader from '../main/Loader';
import { LoadDataFile } from '../../utils/dataLoader';

import NotFound from '../error/NotFound';

// Helper to sanitize project name for folder paths
const sanitizeName = name => name.replace(/\s+/g, '').toLowerCase();

const Project = ({ project, gallerySize }) => {
    const [images, setImages] = useState([]);

    const projectName = project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

    const [projectDetails, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        LoadDataFile(`./${projectName}.json`)
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

        const folder = sanitizeName(project.name);
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
            const src = `/projects/${folder}/${i}.jpg`;
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
    if (projectDetails === null) return <NotFound />;

    if (!project) return <NotFound />;

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{project.name}</h2>
            <div style={styles.meta}>
                <span style={styles.company}>{project.company}</span>
                <span style={styles.period}>{project.period}</span>
            </div>
            <p style={styles.description}>{project.description}</p>
            <ul style={styles.detailsList}>
                {project.details && project.details.map((detail, idx) => (
                    <li key={idx} style={styles.detailItem}>{detail}</li>
                ))}
            </ul>
            {/* Image Gallery */}
            {images.length > 0 && (
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
            )}
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
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: 24,
        maxWidth: 600,
        margin: '24px auto',
        background: '#fafbfc',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        fontFamily: 'Segoe UI, Arial, sans-serif'
    },
    title: {
        margin: 0,
        fontSize: 28,
        color: '#222'
    },
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 15,
        color: '#555',
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
    }
};

export default Project;
