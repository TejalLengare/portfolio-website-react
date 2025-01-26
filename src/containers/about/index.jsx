import React from "react";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const About = () => {
    const education = [
        {
            degree: "Bachelor of Engineering in Computer Science",
            institution: "Savitribai Phule Pune University",
            year: "2020 - 2023",
            details: [
                "In-depth understanding of computer systems, programming, and software engineering",
                "Advanced knowledge of programming languages like Java, Python, C++, and web technologies (HTML, CSS, JavaScript).",
                "Team collaboration and project management experience through group projects and internships.",
                "Familiarity with modern development frameworks and tools, including React, Flask, Django, and version control (Git).",
                "Final Year Project: Crop Disease Detection and Prediction using Deep Learning "
            ]
        },
        {
            degree: "Diploma in Computer Engineering",
            institution: "Maharashtra State Board of Technical Education",
            year: "2017 - 2020",
            details: [
                "Proficiency in key programming languages like C, C++, and Python.",
                "Understanding of computer hardware and its integration with software.",
                "Project-based learning to develop practical problem-solving and technical skills.",
                "Completed with First Class distinction"
            ]
        }
    ];

    const experience = [
        {
            position: "Software Engineer II",
            company: "Rigwalt Pvt. Ltd.",
            year: "Oct 2024 - Present",
            details: [
                "Developing web applications using React.js and FastAPI",
                "Develop, test, and maintain software applications, including new features, enhancements, and bug fixes.",
                "Work with modern technologies and frameworks (e.g.Python, FastAPI,Stramlit, LLM etc.) to build solutions.",
                "Analyze and resolve complex technical issues, identifying root causes and implementing effective solutions."
            ]
        },
        {
            position: "Data Science Intern",
            company: "BugendaiTech Pvt. Ltd.",
            year: "June 2023 - Sep 2023",
            details: [
                "Prepare and clean datasets for analysis.",
                "Analyze data to identify patterns and trends and Apply statistical methods to derive insights from data.",
                "Create visualizations to present data findings.",
                "Gained hands-on experience with industry practices",
                "Ranked in a hackathon for predicting and forecasting the next 2-month salary."
            ]
        }
    ];

    return (
        <section id="about" className="about">
            <div className="about_content">
                <Animate
                    play
                    duration={1.5}
                    delay={0.3}
                    start={{
                        transform: "translateY(50px)",
                        opacity: 0
                    }}
                    end={{
                        transform: "translateY(0px)",
                        opacity: 1
                    }}
                >
                    <h1>About Me</h1>
                    <p className="about_content_text">
                        I am a passionate Software Developer with expertise in creating
                        responsive and user-friendly applications. With a strong foundation
                        in modern technologies and a keen eye for detail, I transform ideas
                        into seamless digital experiences.
                    </p>

                    <div className="about_content_cards">
                        <div className="card_column">
                            <div className="column_header">
                                <FaGraduationCap className="icon" />
                                <h2>Education</h2>
                            </div>
                            {education.map((edu, index) => (
                                <div key={index} className="info_card">
                                    <h3>{edu.degree}</h3>
                                    <p className="subtitle">{edu.institution}</p>
                                    <p className="year">{edu.year}</p>
                                    <ul>
                                        {edu.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="card_column">
                            <div className="column_header">
                                <FaBriefcase className="icon" />
                                <h2>Experience</h2>
                            </div>
                            {experience.map((exp, index) => (
                                <div key={index} className="info_card">
                                    <h3>{exp.position}</h3>
                                    <p className="subtitle">{exp.company}</p>
                                    <p className="year">{exp.year}</p>
                                    <ul>
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default About;