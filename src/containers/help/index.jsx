import React from "react";
import './style.scss';
import { Animate } from 'react-simple-animate';

const Help = () => {
    const helpData = [
        {
            id: 1,
            question: "How can I contact you?",
            answer: "You can reach me through LinkedIn, email, or the contact form on this website. I typically respond within 24 hours."
        },
        {
            id: 2,
            question: "Are you available for freelance work?",
            answer: "Yes, I am open to freelance opportunities, particularly in QA Automation and Web Development projects."
        },
        {
            id: 3,
            question: "Can I see the source code of your projects?",
            answer: "Yes, most of my projects are available on GitHub. You can find the links in the Portfolio section."
        },
        {
            id: 4,
            question: "What are your primary areas of expertise?",
            answer: "My core expertise includes QA Automation (Selenium, Playwright), Web Development (React.js), and Test Framework Design."
        },
        {
            id: 5,
            question: "Do you provide mentoring services?",
            answer: "Yes, I offer mentoring in QA Automation and Web Development. Please contact me for more details."
        }
    ];

    return (
        <section id="help" className="help">
            <h1>FAQ & Help</h1>
            <div className="help_content">
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
                    <div className="help_content_faq">
                        {helpData.map((item) => (
                            <div key={item.id} className="faq_item">
                                <h3>{item.question}</h3>
                                <p>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </Animate>
            </div>
        </section>
    );
};

export default Help;