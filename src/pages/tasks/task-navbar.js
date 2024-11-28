import React, { useState, useEffect, useRef } from 'react';
import './task.css';
import Confetti from 'react-confetti';
import badgeImage from './badge.png';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [taskSolved, setTaskSolved] = useState(false);
  const [points, setPoints] = useState(() => JSON.parse(localStorage.getItem('points')) || 0);
  const [level, setLevel] = useState(() => localStorage.getItem('level') || 'Beginner');
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [badgeEarned, setBadgeEarned] = useState(false);
  const [showBadgePopup, setShowBadgePopup] = useState(false);
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My Responsive Navbar</title>
  <style>
    /* Write your CSS here */
  </style>
</head>
<body>
  <!-- Write your HTML here -->
</body>
</html>`);
  const editorRef = useRef(null);
  const iframeRef = useRef(null);

  const levels = ['Beginner', 'Intermediate', 'Expert'];
  const pointsPerLevel = 100;

  useEffect(() => {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTaskSolved(completedTasks.includes('task-navbar'));
  }, []);

  // Load solved task state from localStorage on mount
  useEffect(() => {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTaskSolved(completedTasks.includes('task-navbar')); // Adjust this ID for each task
  }, []);


  useEffect(() => {
    localStorage.setItem('points', points);
    localStorage.setItem('level', level);
  }, [points, level]);

  // const btn = document.getElementById('mark-solved-btn');
  const markAsSolved = () => {
    if (!taskSolved) {
      setTaskSolved(true);
      setPoints(points + 20);
      setBadgeEarned(true);
      setConfettiVisible(true);
      setTimeout(() => {
        setConfettiVisible(false);
        setShowBadgePopup(true);
        setTimeout(() => {
          setShowBadgePopup(false);
        }, 4000);
      }, 2000);

      // Update localStorage for solved task
      const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
      completedTasks.push('task-navbar'); // Adjust this ID for each task
      localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
      updateLevel();
    } else {
      alert('Task already solved');
    }
  };

  const updateLevel = () => {
    if (points % pointsPerLevel === 0 && points !== 0) {
      const currentLevelIndex = levels.indexOf(level);
      if (currentLevelIndex < levels.length - 1) {
        setLevel(levels[currentLevelIndex + 1]);
      }
    }
  };

  const handleDownloadBadge = () => {
    const link = document.createElement('a');
    link.href = badgeImage;
    link.download = 'badge.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };




  const runCode = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.contentDocument.open();
      iframe.contentDocument.write(code);
      iframe.contentDocument.close();
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>CodeRecall</h1>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#connect">Connect</a></li>
            <li><a href="frontend.html">Frontend</a></li>
            <li><a href="backend.html">Backend</a></li>
            <li><a href="#frameworks">Frameworks</a></li>
          </ul>
          <div className="auth-links">
            <button onClick={() => window.location.href = 'index.html'}>Logout</button>
          </div>
        </nav>
      </header>

      <div className={`main-content ${showBadgePopup ? 'blur' : ''}`}>
        <main>
          {confettiVisible && <Confetti width={window.innerWidth} height={window.innerHeight} />}

          <section className="user-progress">
            <h3>Progress</h3>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${(points % pointsPerLevel) / pointsPerLevel * 100}%` }}></div>
            </div>
            <p>Points: <span>{points}</span> | Level: <span>{level}</span></p>
          </section>

          <section className="task-detail">
            <h2>Create a Responsive Navbar</h2>
            <p>In this task, you will build a responsive navigation bar using HTML, CSS, and JavaScript. The navbar should collapse into a hamburger menu on mobile devices.</p>
            <button onClick={markAsSolved}  style={{ backgroundColor: taskSolved ? 'green' : '' }}>{taskSolved ? 'Solved!' : 'Mark as Solved'}</button>

            {taskSolved && (
              <div id="solution">
                <h3>Solution Code</h3>
                <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navbar</title>
  <style>
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #282c34;
    }
    .nav-links {
      display: flex;
      list-style: none;
      gap: 20px;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
    }
    .hamburger {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }
    .bar {
      height: 3px;
      width: 25px;
      background-color: white;
      margin: 4px 0;
    }
    @media (max-width: 768px) {
      .nav-links {
        display: none;
        flex-direction: column;
        width: 100%;
      }
      .nav-links.active {
        display: flex;
      }
      .hamburger {
        display: flex;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="logo"><h1>CodeRecall</h1></div>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#connect">Connect</a></li>
      <li><a href="#frontend">Frontend</a></li>
      <li><a href="#backend">Backend</a></li>
      <li><a href="#frameworks">Frameworks</a></li>
    </ul>
    <div class="hamburger" onclick="toggleMenu()">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </nav>
  <script>
    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('active');
    }
  </script>
</body>
</html>`}</pre>
              </div>
            )}
          </section>

          <div className="page" style={{padding:'20px',width:'100vw',left:'-180px',position:'relative'}}>
            <div className="left">
              {/* <ul className="file-tabs">
                <li className="active" onClick={() => switchFile('Responsive Navbar')}>Responsive Navbar</li>
              </ul> */}
              <h3>Responsive Navbar Creation</h3>
              <p>Follow these steps to create a responsive navigation bar that collapses into a hamburger menu on mobile devices.</p>

              <h4>Step 1: Set Up Your Project</h4>
              <p>
                <li><strong>index.html</strong> write your HTML and CSS </li>
                Create Two Files:
                <ul>
                  <li><strong>index.html</strong> for your HTML content.</li>
                  <li><strong>styles.css</strong> for your CSS styles.</li>
                </ul>
              </p>

              <h4>Step 2: Create the HTML Structure</h4>
              <p>
                Create a <code>&lt;nav&gt;</code> Element:
                <ul>
                  <li>Inside <code>index.html</code>, add a <code>&lt;nav&gt;</code> element. This will contain the navbar.</li>
                </ul>
                Add a Logo:
                <ul>
                  <li>Inside the <code>&lt;nav&gt;</code>, include a <code>&lt;div&gt;</code> for the logo. This could just be text or a link.</li>
                </ul>
                Add a Menu Toggle Button:
                <ul>
                  <li>Include a <code>&lt;div&gt;</code> for the menu toggle button. This will be visible on mobile devices and will become a hamburger icon.</li>
                </ul>
                Create the Navigation Links:
                <ul>
                  <li>Add an unordered list (<code>&lt;ul&gt;</code>) inside the <code>&lt;nav&gt;</code>. Each list item (<code>&lt;li&gt;</code>) should contain a link (<code>&lt;a&gt;</code>) to your navigation destinations.</li>
                </ul>
              </p>

              <h4>Step 3: Style the Navbar with CSS</h4>
              <p>
                Set Up Basic Styles:
                <ul>
                  <li>Open <code>styles.css</code> and start by setting some basic styles for the navbar (background color, text color, padding, etc.).</li>
                </ul>
                Style the Logo:
                <ul>
                  <li>Add styles for the logo to make it look good and align it properly within the navbar.</li>
                </ul>
                Style the Navigation Links:
                <ul>
                  <li>Style the list items and links in the navigation. Ensure they are displayed horizontally.</li>
                </ul>
                Hide the Menu Links on Mobile:
                <ul>
                  <li>Use CSS media queries to hide the navigation links on smaller screens.</li>
                </ul>
                Style the Menu Toggle Button:
                <ul>
                  <li>Add styles to make the menu toggle button look like a hamburger icon (three horizontal bars).</li>
                </ul>
                Show/Hide Menu Links on Toggle:
                <ul>
                  <li>Write CSS to show or hide the menu links when the toggle button is clicked.</li>
                </ul>
              </p>

              <h4>Step 4: Add JavaScript for Interactivity</h4>
              <p>
                Create a JavaScript File:
                <ul>
                  <li>Create a file named <code>script.js</code>.</li>
                </ul>
                Add Event Listener:
                <ul>
                  <li>In <code>script.js</code>, write code to listen for clicks on the menu toggle button.</li>
                </ul>
                Toggle Menu Visibility:
                <ul>
                  <li>When the button is clicked, toggle the visibility of the navigation links.</li>
                </ul>
              </p>

              <h4>Step 5: Test Your Navbar</h4>
              <p>
                Open <code>index.html</code> in a Browser:
                <ul>
                  <li>Check how your navbar looks on both desktop and mobile views.</li>
                </ul>
                Adjust Styles as Needed:
                <ul>
                  <li>Refine the styles and behavior until the navbar meets your requirements.</li>
                </ul>
              </p>
            </div>
            <div className="middle">
              <ul className="file-tabs">
                <li className="active">index.html</li>
              </ul>
              <textarea
                id="codeEditor"
                className="code-editor"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></textarea>
              <button onClick={runCode}>Run Code</button>
            </div>

            <div className="right">
              <iframe
                ref={iframeRef}
                id="outputFrame"
                frameBorder="0"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </main>
      </div>

      {showBadgePopup && (
        <div className="badge-popup">
          <div className="badge-content">
            <h3>🎖️ You've earned a badge!</h3>
            <img src={badgeImage} alt="Badge" className="badge-image" />
            <button onClick={handleDownloadBadge}>Download Badge</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
