import React from 'react';
import './style3.css'; // Import your CSS file
import Navbar from '../components/Navbar';

export default function Projects() {
    return (
        <>
        <Navbar/>
            {/* <li><img src="logo.png" className="logo" alt="oops" /></li>
            <div className="nav">
                <ul>
                    <li><a href="home.html">HOME</a></li>
                    <li><a href="about">ABOUT</a></li>
                    <li><a href="projects">PROJECTS</a></li>
                    <li><a href="connect">CONNECT</a></li>
                    <button id="login">Login</button>
                    <button id="signup">SignUp</button>
                </ul>
            </div> */}

            <div className="boxes">
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
                <ProjectBox title="Netflix Clone" description="This is the beginner-friendly frontend project" />
            </div>
        </>
    );
}

// Define a functional component for project box
function ProjectBox({ title, description }) {
    return (
        <div className="b">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="p1.html"><button id="startb">Get Started</button></a>
        </div>
    );
}
