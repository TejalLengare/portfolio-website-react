import React from "react";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaCode } from "react-icons/fa";

const Skills = () => {
    const skillsData = [
        {
            category: "Programming Languages",
            skills: [
                { name: "Python", level: 90 },
                { name: "Java", level: 85 },
                { name: "HTML5", level: 90 },
                { name: "CSS3", level: 85 }
            ]
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                { name: "React.js", level: 85 },
                { name: "FastAPI", level: 80 },
                { name: "Scikit-learn", level: 75 }
            ]
        },
        {
            category: "Testing & Automation",
            skills: [
                { name: "Selenium", level: 85 },
                { name: "Playwright", level: 60 }
            ]
        },
        {
            category: "DevOps & Tools",
            skills: [
                { name: "Git", level: 85 },
                { name: "Jenkins", level: 70 },
                { name: "CI/CD", level: 60 }
            ]
        },
        {
            category: "Data Science & ML",
            skills: [
                { name: "Machine Learning", level: 85 },
                { name: "Data Analysis", level: 80 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills_content">
                <Animate
                    play
                    duration={1}
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
                    <h1>Technical Skills</h1>
                    <div className="skills_content_categories">
                        {skillsData.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="skill_category">
                                <h2>{category.category}</h2>
                                <div className="skills_grid">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill_item">
                                            <div className="skill_header">
                                                <div className="skill_icon">
                                                    <FaCode />
                                                </div>
                                                <h3>{skill.name}</h3>
                                            </div>
                                            <div className="skill_level">
                                                <div 
                                                    className="skill_progress"
                                                    style={{ width: `${skill.level}%` }}
                                                >
                                                    <span className="skill_percentage">
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Skills;