import React from "react";
import './style.scss';
import { Animate } from 'react-simple-animate';

const portfolioData = [
    {
        id: 1,
        name: "E-Tutor Website",
        image: "https://placehold.co/800x400/2c3e50/ffffff?text=E-Tutor+Learning+Platform",
        description: "A modern E-Learning platform built with React, offering comprehensive coding courses and personalized mentorship programs. Features an intuitive UI, interactive course modules, and a responsive design.",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        link: "https://github.com/TejalLengare/E-Tutor"
    },
    {
        id: 2,
        name: "Covid-19 Dashboard",
        image: "https://placehold.co/800x400/3498db/ffffff?text=COVID-19+Dashboard",
        description: "A real-time interactive dashboard providing visual insights into the global spread of COVID-19. This project uses public APIs to fetch data on COVID-19 cases, recoveries, and deaths, and presents the information through intuitive charts and graphs. Built with Python and Streamlit",
        technologies: ["Python", "Streamlit", "API Integration"],
        link: "https://github.com/TejalLengare/COVID-19-Dashboard.git"
    },
    {
        id: 3,
        name: "crm-qa-automation-framework",
        image: "https://placehold.co/800x400/e74c3c/ffffff?text=CRM+QA+Automation",
        description: "A Java-based test automation framework using Selenium WebDriver for CRM application testing. Features page object model (POM) design pattern, organized test structure, and HTML reporting.",
        technologies: ["Java", "Selenium WebDriver", "TestNG"],
        link: "https://github.com/TejalLengare/crm-qa-automation-framework.git"
    },
    {
        id: 4,
        name: "Saucedemo-Playwright-Automation",
        image: "https://placehold.co/800x400/27ae60/ffffff?text=Playwright+Automation",
        description: "End-to-end test automation framework for SauceDemo using Playwright and TypeScript, implementing Page Object Model pattern.",
        technologies: ["Playwright", "TypeScript", "Page Object Model"],
        link: "https://github.com/TejalLengare/Saucedemo-Playwright-Automation.git"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio">
            <h1>My Portfolio</h1>
            <div className="portfolio_content">
                <Animate
                    play
                    duration={1.5}
                    delay={0.3}
                    start={{
                        transform: 'translateX(-200px)',
                        opacity: 0
                    }}
                    end={{
                        transform: 'translateX(0px)',
                        opacity: 1
                    }}
                >
                    <div className="portfolio_content_grid">
                        {portfolioData.map((project) => (
                            <div key={project.id} className="portfolio_content_grid_item">
                                <div className="portfolio_content_grid_item_image">
                                    <img src={project.image} alt={project.name} />
                                    <div className="overlay">
                                        <div className="overlay_buttons">
                                            
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                Source Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio_content_grid_item_content">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="technologies">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Portfolio;