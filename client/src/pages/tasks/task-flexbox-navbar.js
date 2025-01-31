import React, { useState, useEffect } from 'react';
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

  const levels = ['Beginner', 'Intermediate', 'Expert'];
  const pointsPerLevel = 100;

  // Load solved task state from localStorage on mount
  useEffect(() => {
    const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setTaskSolved(completedTasks.includes('task-navbar')); // Adjust this ID for each task
  }, []);

  useEffect(() => {
    localStorage.setItem('points', points);
    localStorage.setItem('level', level);
  }, [points, level]);

  const markAsSolved = () => {
    if (!taskSolved) {
      // Mark the task as solved and store in localStorage
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
    //   const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    //   completedTasks.push('task-navbar'); // Adjust this ID for each task
    //   localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    //   updateLevel();
    } 
    // else {
    //   alert('Task already solved');
    // }
  };

//   const updateLevel = () => {
//     if (points % pointsPerLevel === 0 && points !== 0) {
//       const currentLevelIndex = levels.indexOf(level);
//       if (currentLevelIndex < levels.length - 1) {
//         setLevel(levels[currentLevelIndex + 1]);
//       }
//     }
//   };

  const handleDownloadBadge = () => {
    const link = document.createElement('a');
    link.href = badgeImage;
    link.download = 'badge.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            
            {/* Button changes to green when the task is solved */}
            <button 
              onClick={markAsSolved} 
              style={{ backgroundColor: taskSolved ? 'green' : '' }}
            >
              {taskSolved ? 'Solved!' : 'Mark as Solved'}
            </button>

            {taskSolved && (
              <div id="solution">
                <h3>Solution Code</h3>
                {/* Solution code */}
              </div>
            )}
          </section>
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
