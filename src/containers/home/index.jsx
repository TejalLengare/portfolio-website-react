import React from "react";
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate();
    
    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }

    return (
        <div>
            <section id="home" className="home">
                <div className="home_text_wrapper">
                    <h1>
                        Hello, I'm Tejal Lengare
                        <br />
                        <span className="text-highlight">Frontend Developer</span>
                    </h1>
                    <p className="home_description">
                    Welcome to my portfolio! I'm a Software Engineer specializing in web development with expertise in HTML, CSS, JavaScript, Python, and React. I focus on creating responsive, user-friendly applications and solving complex problems with clean, efficient code. Let's connect and collaborate!</p>
                    
                    <div className="home_socials">
                        <a href="https://github.com/TejalLengare" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.linkedin.com/in/tejallengare/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={32} />
                        </a>
                    </div>
                </div>

                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateY(550px)'
                    }}
                    end={{
                        transform: 'translateY(0px)'
                    }}>
                    <div className="home_buttons">
                        <button className="primary-btn" onClick={handleNavigateToContactMePage}>
                            Contact Me
                        </button>
                        <button className="secondary-btn" onClick={() => navigate('/portfolio')}>
                            View Work
                        </button>
                    </div>
                </Animate>
            </section>
        </div>
    )
}
export default Home;