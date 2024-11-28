// src/pages/Home.js
import React from 'react';
import ContentSection from '../components/ContentSection';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0a0909", minHeight: "100vh" }}>
      <section className="intro" id="home" style={{ backgroundColor: "#0a0909", margin: "-1rem;" }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          lineHeight: "1",
          fontFamily: "Sixtyfour Convergence", 
          fontOpticalSizing: "auto", 
          fontWeight: "400", 
          fontStyle: "normal",
          fontVariationSettings: '"BLED" 0, "SCAN" 0, "XELA" 0, "YELA" 0',
          // padding:"1rem",
        }}>
          Welcome to CodeRecall
        </h2>
        <p>Brush up on your web development skills with small, interactive tasks.</p>
      </section>
      <ContentSection />
    </div>
  );
};

export default Home;
