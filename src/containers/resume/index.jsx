import React from "react";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
    // Use process.env.PUBLIC_URL to get the correct public path
    const resumePath = process.env.PUBLIC_URL + '/files/Resume.pdf';
    
    return (
        <section id="resume" className="resume">
            <div className="resume_container">
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
                    <h1>Resume</h1>
                    
                    <div className="resume_actions">
                        <a 
                            href={resumePath}
                            download="Tejal_Lengare_Resume.pdf"
                            className="download_btn"
                        >
                            <FaDownload /> Download Resume
                        </a>
                    </div>

                    <div className="resume_viewer">
                        <iframe
                            src={`${resumePath}#view=FitH`}
                            title="resume"
                            className="pdf_viewer"
                        />
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Resume;