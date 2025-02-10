import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Frontend.css'; // Ensure this path is correct for your styles

function Backendpage() {
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
    const backendTasks = [
        {
            title: 'Set Up a Node.js Server',
            description: 'Create a basic server using Node.js and Express that responds to HTTP requests.',
            url: 'task-server',
            id: 'node-server-btn'
          },
          {
            title: 'CRUD Operations with MongoDB',
            description: 'Implement Create, Read, Update, and Delete operations in a Node.js application using MongoDB.',
            url: 'mongo-crud.html',
            id: 'task-mongo-crud-btn'
          },
          {
            title: 'User Authentication',
            description: 'Set up user authentication using Passport.js, including user registration and login.',
            url: 'auth.html',
            id: 'task-auth-btn'
          },
          {
            title: 'RESTful API with Express',
            description: 'Build a RESTful API using Express that allows clients to interact with your data through HTTP requests.',
            url: 'rest-api.html',
            id: 'rest-api-btn'
          },
          {
            title: 'Basic Node.js Application',
            description: 'Set up a basic Node.js application and understand the fundamental concepts.',
            url: 'node-basic.html',
            id: 'node-basic-task-btn'
          },
          {
            title: 'Express Middleware',
            description: 'Create custom middleware in Express to handle requests and responses.',
            url: 'express-middleware.html',
            id: 'express-middleware-task-btn'
          },
          {
            title: 'Session Management with Express',
            description: 'Implement session management in an Express application using cookies and sessions.',
            url: 'session-management.html',
            id: 'session-management-task-btn'
          },
          {
            title: 'JWT Authentication',
            description: 'Set up JSON Web Token (JWT) authentication in a Node.js application for secure API access.',
            url: 'jwt-auth.html',
            id: 'jwt-auth-task-btn'
          },
          {
            title: 'GraphQL API with Apollo Server',
            description: 'Build a GraphQL API using Apollo Server to handle complex queries and mutations.',
            url: 'graphql-apollo.html',
            id: 'graphql-apollo-task-btn'
          },
          {
            title: 'File Uploads with Multer',
            description: 'Implement file upload functionality in an Express application using Multer middleware.',
            url: 'file-upload.html',
            id: 'file-upload-task-btn'
          },
          {
            title: 'Unit Testing with Jest',
            description: 'Write unit tests for a Node.js application using Jest to ensure code quality.',
            url: 'unit-testing.html',
            id: 'unit-testing-task-btn'
          },
          {
            title: 'Dockerize Node.js Application',
            description: 'Containerize a Node.js application using Docker for easier deployment and scalability.',
            url: 'docker-node.html',
            id: 'docker-node-task-btn'
          },
          {
            title: 'Real-time Communication with Socket.io',
            description: 'Implement real-time communication in a Node.js application using Socket.io for features like chat.',
            url: 'socket-io.html',
            id: 'socket-io-task-btn'
          },
          {
            title: 'Serverless Functions with AWS Lambda',
            description: 'Create serverless functions using AWS Lambda to run code without provisioning servers.',
            url: 'aws-lambda.html',
            id: 'aws-lambda-task-btn'
          },
          {
            title: 'Email Sending with Nodemailer',
            description: 'Set up an email sending service in a Node.js application using Nodemailer.',
            url: 'nodemailer.html',
            id: 'nodemailer-task-btn'
          }
      // Add more tasks as needed
    ];

    setTasks(backendTasks);
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
      <main>
        <section className="tasks">
          <h2>Backend Tasks</h2>
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

export default Backendpage;
