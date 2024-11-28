import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContentSection.css'; // Combine relevant CSS from all sections here
import './WhyChooseUs.css';
import './FAQSection.css';
import './Footer.css';

const ContentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    { title: "Frontend", description: "Solve the frontend tasks here and become an expert.", path: "Frontend" },
    { title: "Backend", description: "Solve the backend tasks here and become an expert." },
    { title: "Frameworks", description: "Solve the framework tasks here and become an expert." },
    { title: "Quizzes", description: "Solve the quizzes here and become an expert.", path:"QuizzesPage" },
  ];

  const faqs = [
    { question: "What to learn first? Frontend or Backend?", answer: "It depends on your interest. If you enjoy designing and user interfaces, start with frontend. If you like working on databases and servers, go for backend." },
    { question: "How many months does it take to learn frontend?", answer: "It usually takes 3-6 months to get a good understanding of frontend development, depending on your learning pace and dedication." },
    { question: "Should I learn JavaScript before starting frontend?", answer: "Yes, JavaScript is a core skill for frontend development and helps you understand how web pages behave dynamically." },
    { question: "Is learning backend necessary for full-stack development?", answer: "Yes, to become a full-stack developer, knowledge of both frontend and backend is required." },
  ];

  const whyChoosePoints = [
    {
      number: '01',
      title: 'Hands-On Project Learning',
      description: 'Build real-world engineering projects, collaborate with peers, and enhance your practical skills through task-driven learning.',
    },
    {
      number: '02',
      title: 'AI-Driven Assistance',
      description: 'Get personalized AI support to clarify concepts, debug issues, and analyze your performance for continuous improvement.',
    },
    {
      number: '03',
      title: 'Real-Life Problem Solving',
      description: 'Tackle real-world challenges and explore innovative solutions to prepare for hackathons or even kickstart your own startup.',
    },
  ];

  const nextSection = () => {
    const nextIndex = (currentIndex + 1) % sections.length;
    setCurrentIndex(nextIndex);
  };

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(nextSection, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      {/* Carousel Section */}
      <div className="carousel-container">
        <div className="row">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`text-content ${index === currentIndex ? 'active' : ''}`}
            >
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <Link to={`/${section.path || '#'}`} className="button-link">Enroll</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us">
        <h2>Why choose us?</h2>
        <p className="subtitle">Unlock Your Potential with Our Comprehensive Learning Approach</p>
        <div className="cards-container">
          {whyChoosePoints.map((point, index) => (
            <div key={index} className="card">
              <h3 className="card-number">{point.number}</h3>
              <h4 className="card-title">{point.title}</h4>
              <p className="card-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <div className="why">
        <center>
          <section className="content">
            <div className="text" style={{ marginTop: '5vh', color: 'white' }}>
              <h2>Master Web Development with Interactive Challenges</h2>
              <p>
                At CodeRecall, we believe that the best way to learn is by doing.
              </p>
            </div>
          </section>
        </center>
      </div>

      <br />
      <br />


      {/* FAQ Section */}
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="toggle-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>CodeRecall</h3>
          <p>Empowering engineering students with hands-on project learning and AI-driven support.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 CodeRecall. All Rights Reserved.</p>
      </div>
    </footer>

    </div>
  );
};

export default ContentSection;
