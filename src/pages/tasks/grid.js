import React, { useState, useEffect } from 'react';
import './grid.css'; // You can include your CSS styles here

const App = () => {
  const [points, setPoints] = useState(parseInt(localStorage.getItem('points')) || 0);
  const [level, setLevel] = useState(localStorage.getItem('level') || 'Beginner');
  const [taskSolved, setTaskSolved] = useState(JSON.parse(localStorage.getItem('taskSolved')) || false);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const levels = ['Beginner', 'Intermediate', 'Expert'];
  const pointsPerLevel = 100; // Points required to level up

  useEffect(() => {
    updateProgress();
  }, [points, level]);

  const updateProgress = () => {
    const progress = (points % pointsPerLevel) / pointsPerLevel * 100;
    if (progress === 0 && points !== 0) {
      levelUp();
    }
    localStorage.setItem('points', points);
    localStorage.setItem('level', level);
  };

  const levelUp = () => {
    const currentLevelIndex = levels.indexOf(level);
    if (currentLevelIndex < levels.length - 1) {
      setLevel(levels[currentLevelIndex + 1]);
      const levelDisplay = document.getElementById('level');
      levelDisplay.classList.add('level-up');
      setTimeout(() => levelDisplay.classList.remove('level-up'), 1000);
    }
  };

  const awardPoints = (pointsToAdd) => {
    setPoints(prevPoints => prevPoints + pointsToAdd);
  };

  const handleMarkSolved = () => {
    if (!taskSolved) {
      awardPoints(20); // Award 20 points for solving the task
      setTaskSolved(true); // Set the flag to true to prevent further points
      localStorage.setItem('taskSolved', JSON.stringify(true));
      setConfettiVisible(true);
    } else {
      alert("Task already solved!");
    }
  };

  return (
    <div>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>CodeRecall</h1>
          </div>
          <ul className="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="connect.html">Connect</a></li>
            <li><a href="frontend.html">Frontend</a></li>
            <li><a href="backend.html">Backend</a></li>
            <li><a href="frameworks.html">Frameworks</a></li>
          </ul>
          <div className="auth-links">
            <button onClick={() => window.location.href = 'index.html'} id="logout">Logout</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="user-progress">
          <h3>Progress</h3>
          <div className="progress-bar">
            <div className="progress-bar-fill" id="progress-bar-fill" style={{ width: `${(points % pointsPerLevel) / pointsPerLevel * 100}%` }}></div>
          </div>
          <p>Points: <span id="points">{points}</span> | Level: <span id="level">{level}</span></p>
        </section>
        <section className="task-detail">
          <h2>CSS Grid Layout</h2>
          <p>Learn how to create a responsive layout using CSS Grid.</p>
          <p>
            Step 1: Set Up the HTML Structure <br />
            Step 2: Define the Grid Container <br />
            Step 3: Create Grid Template Areas <br />
            Step 4: Place Grid Items <br />
            Step 5: Add Media Queries for Responsiveness <br />
            Step 6: Test and Adjust the Layout <br />
          </p>
          <button id="prerequisites-btn">Prerequisites</button>
          <button id="mark-solved-btn" onClick={handleMarkSolved}>Mark as Solved</button>

          <div id="prerequisites" className="hidden prerequisites-list">
            <h3>Prerequisites</h3>
            <ul>
              <li>Understanding of HTML elements and structure</li>
              <li>Basic knowledge of CSS selectors and properties</li>
              <li>Introduction to CSS Flexbox (for comparison with Grid)</li>
              <li>Familiarity with responsive design principles</li>
            </ul>
            <h4>Additional Resources:</h4>
            <ul>
              <li><a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer">HTML Introduction - W3Schools</a></li>
              <li><a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">CSS Introduction - W3Schools</a></li>
              <li><a href="https://www.w3schools.com/css/css3_flexbox.asp" target="_blank" rel="noopener noreferrer">CSS Flexbox - W3Schools</a></li>
              <li><a href="https://www.w3schools.com/css/css_rwd_intro.asp" target="_blank" rel="noopener noreferrer">Responsive Web Design - W3Schools</a></li>
            </ul>
          </div>

          <div id="solution" className={taskSolved ? '' : 'hidden'}>
            <h3>Solution Code</h3>
            <pre>
              {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Layout</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-areas:
        'header header header'
        'nav content sidebar'
        'footer footer footer';
      grid-gap: 10px;
    }
    .grid-container > div {
      padding: 20px;
      background-color: rgba(255, 255, 255, 0.8);
    }
    .header {
      grid-area: header;
      background-color: #2196F3;
    }
    .nav {
      grid-area: nav;
      background-color: #f44336;
    }
    .content {
      grid-area: content;
      background-color: #4CAF50;
    }
    .sidebar {
      grid-area: sidebar;
      background-color: #FFEB3B;
    }
    .footer {
      grid-area: footer;
      background-color: #795548;
    }
    @media (max-width: 600px) {
      .grid-container {
        grid-template-areas:
          'header'
          'nav'
          'content'
          'sidebar'
          'footer';
      }
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="header">Header</div>
    <div class="nav">Nav</div>
    <div class="content">Content</div>
    <div class="sidebar">Sidebar</div>
    <div class="footer">Footer</div>
  </div>
</body>
</html>`}
            </pre>
          </div>
        </section>
        {confettiVisible && (
          <div className="confetti-container">
            {Array.from({ length: 50 }).map((_, index) => (
              <div
                key={index}
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
