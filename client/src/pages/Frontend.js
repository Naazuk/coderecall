import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Frontend.css'; // Ensure this path is correct for your styles
import hamburger from '../assets/images/hamburgar.jpg';
import cssgrid from '../assets/images/cssgrid.png';
import carousal from '../assets/images/carousal.png';
// import hamburger from '../assets/images/hamburgar.jpg';
function Frontend() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserSession = async () => {
      try {
        const response = await fetch('/check-session', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    };

    fetchUserSession();

    // Define static task data
    const frontendTasks = [
      {
        title: 'Create a Responsive Navbar',
        image: hamburger, // Ensure the image exists
        description: 'Build a responsive navigation bar using HTML, CSS, and JavaScript that collapses into a hamburger menu on mobile devices.',
        url: 'task-navbar',
        id: 'nav-task-btn',
      },
      {
        title: 'CSS Grid Layout',
        image: cssgrid,
        description: 'Use CSS Grid to create a responsive grid layout that adjusts the number of columns based on the screen size.',
        url: 'grid',
        id: 'grid-task-btn',
      },
      {
        title: 'JavaScript Carousel',
        image: carousal,
        description: 'Create an image carousel using JavaScript that automatically transitions between images and includes navigation controls.',
        url: 'carousel-task-btn',
        id: 'carousel-task-btn'
      },
      {
        title: 'Fetch API Data',
        description: 'Use the Fetch API to retrieve data from a public API and display it dynamically on your webpage.',
        url: 'fetch',
        id: 'fetch-task-btn'
      },
      {
        title: 'Responsive Navbar with Flexbox',
        description: 'Build a responsive navigation bar using Flexbox that adapts to different screen sizes.',
        url: 'task-flexbox-navbar',
        id: 'flexbox-nav-task-btn'
      },
      {
        title: 'CSS Animations',
        description: 'Create smooth animations using CSS transitions and keyframes to enhance user experience.',
        url: 'css-animations',
        id: 'css-animations-task-btn'
      },
      {
        title: 'JavaScript Form Validation',
        description: 'Implement client-side form validation using JavaScript to improve form usability and data integrity.',
        url: 'form-validation',
        id: 'form-validation-task-btn'
      },
      {
        title: 'Progressive Web App (PWA)',
        description: 'Convert a simple website into a Progressive Web App with offline capabilities using service workers.',
        url: 'pwa',
        id: 'pwa-task-btn'
      },
      {
        title: 'Single Page Application with React',
        description: 'Build a single-page application using React to manage the user interface and state.',
        url: 'react-spa.html',
        id: 'react-spa-task-btn'
      },
      {
        title: 'SVG Graphics',
        description: 'Create scalable vector graphics using SVG and animate them with CSS and JavaScript.',
        url: 'svg-graphics.html',
        id: 'svg-graphics-task-btn'
      },
      {
        title: 'Accessibility Improvements',
        description: 'Enhance a webpage\'s accessibility using ARIA roles, semantic HTML, and keyboard navigation.',
        url: 'accessibility.html',
        id: 'accessibility-task-btn'
      },
      {
        title: 'Custom Video Player',
        description: 'Implement a custom video player using HTML5 video, JavaScript, and CSS for controls.',
        url: 'custom-video-player.html',
        id: 'custom-video-player-task-btn'
      },
      {
        title: 'Data Visualization with D3.js',
        description: 'Use D3.js to create interactive data visualizations and charts.',
        url: 'd3-visualization.html',
        id: 'd3-visualization-task-btn'
      },
      {
        title: 'WebGL Introduction',
        description: 'Create a simple 3D scene using WebGL and three.js for rendering graphics in the browser.',
        url: 'webgl-intro.html',
        id: 'webgl-intro-task-btn'
      },
      {
        title: 'Responsive Design with Bootstrap',
        description: 'Utilize Bootstrap to quickly design a responsive web layout with ready-to-use components.',
        url: 'bootstrap-responsive.html',
        id: 'bootstrap-responsive-task-btn'
      }
      // Add more tasks as needed
    ];

    setTasks(frontendTasks);
  }, []);

  const handleLogout = () => {
    // Logic for logout
    navigate('/');
  };

  const handleButtonClick = (task) => {
    // if (!user) {
    //   navigate('/signup'); // Use navigate to go to the signup page
    // } else {
      navigate(`/${task.url}`); // Navigate to task URL if the user is logged in
    // }
  };
  

  return (
    <div>
      {/* <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>CodeRecall</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/connect">Connect</Link></li>
            <li><Link to="/frontend">Frontend</Link></li>
            <li><Link to="/backend">Backend</Link></li>
            <li><Link to="/frameworks">Frameworks</Link></li>
          </ul>
          <div className="auth-links">
            <button onClick={handleLogout} id="logout">Logout</button>
          </div>
        </nav>
      </header> */}
      <main>
        <section className="tasks">
          <h2>Frontend Tasks</h2>
          <div id="task-list" className="task-list">
            {tasks.length === 0 ? (
              <p>No tasks available.</p>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="task-item">
                  <h3>{task.title}</h3>
                  {task.image && (
                    <div className="img">
                      <img src={task.image} alt={task.title} style={{ width: '266px' }} />
                    </div>
                  )}
                  <p>{task.description}</p>
                  <button
                    onClick={() => handleButtonClick(task)}
                    id={task.id}
                    style={{ backgroundColor: task.completed ? 'green' : '' }}
                  >
                    {task.completed ? 'Solved' : 'Get Started'}
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Frontend;
