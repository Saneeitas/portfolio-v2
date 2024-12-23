import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faServer, faCogs } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Node.js",
    "Express.js",
    "React",
    "NestJs",
    "NextJs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Scss",
    "Material UI",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "Netlify",
    "Render",
    "Postman",
    "GCP",
    "AWS",
];

const labelsThird = [
    "Artificial Intelligence",
    "Machine Learning",
    "TensorFlow",
    "PyTorch",
    "Hugging Face",
    "Flask",
    "Python",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skilss</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faCode} size="3x" />
                        <h3>Software Development</h3>
                        <p>
                            As a Software Engineer, I design and develop scalable, high-performance applications, focusing on clean architecture and efficient code. My expertise spans full-stack development with proficiency in backend and frontend technologies.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>DevOps & Infrastructure</h3>
                        <p>
                            I have hands-on experience managing application lifecycles, including setting up CI/CD pipelines, containerization with Docker, and deploying services on platforms like Netlify, Render, AWS, GCP and others. My focus is on reliability and automation.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x" />
                        <h3>AI & Advanced Solutions</h3>
                        <p>
                            I integrate artificial intelligence and machine learning into software solutions, enabling intelligent decision-making and automation. My experience includes leveraging cutting-edge frameworks to build GenAI and data-driven applications.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
