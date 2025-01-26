import React, { useState } from "react";
import { Animate } from "react-simple-animate";
import "./style.scss";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        success: false,
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({
            submitted: true,
            success: true,
            message: "Thank you for your message! I'll get back to you soon."
        });

        // Reset form after successful submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
            setSubmitStatus({
                submitted: false,
                success: false,
                message: ""
            });
        }, 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactDetails = [
        {
            icon: <FaEnvelope />,
            info: "tejallengare999@gmail.com",
            link: "mailto:tejallengare999@gmail.com"
        },
        {
            icon: <FaPhoneAlt />,
            info: "+91 9834455871",
            link: "tel:+919834455871"
        },
        {
            icon: <FaLinkedin />,
            info: "LinkedIn",
            link: "https://www.linkedin.com/in/tejallengare/"
        },
        {
            icon: <FaGithub />,
            info: "GitHub",
            link: "https://github.com/tejallengare"
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact_card">
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
                    <h1>Get In Touch</h1>
                    
                    <div className="contact_details">
                        {contactDetails.map((detail, index) => (
                            <a 
                                key={index} 
                                href={detail.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact_item"
                            >
                                <span className="icon">{detail.icon}</span>
                                <span className="info">{detail.info}</span>
                            </a>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit}>
                        {submitStatus.submitted && (
                            <div className={`submit-message ${submitStatus.success ? 'success' : 'error'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        
                        <div className="form_group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form_group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={submitStatus.submitted}
                            className={submitStatus.submitted ? 'submitted' : ''}
                        >
                            {submitStatus.submitted ? 'Message Sent!' : 'Send Message'}
                        </button>
                    </form>
                </Animate>
            </div>
        </section>
    );
};

export default Contact;