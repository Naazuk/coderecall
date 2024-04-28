import React, { useEffect, useRef } from 'react';
import ClipboardJS from 'clipboard'; // Import ClipboardJS library if not already imported
import './style.css'; // Import your CSS file

export default function HTMLBasics() {
    const preRef = useRef(null);

    useEffect(() => {
        const clipboard = new ClipboardJS('.btn');

        return () => {
            clipboard.destroy();
        };
    }, []);

    const copyCode = () => {
        const code = preRef.current.innerText;
        navigator.clipboard.writeText(code).then(() => {
            console.log('Code copied to clipboard');
        }).catch((error) => {
            console.error('Failed to copy code: ', error);
        });
    };

    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>HTML Basics - Your Website Name</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.10/clipboard.min.js"></script>
            </head>

            <body>
                <header>
                    <li><img src="logo.png" className="logo" alt="oops" /></li>
                    <div className="nav">
                        <ul>
                            <li><a href="home.html">HOME</a></li>
                            <li><a href="about">ABOUT</a></li>
                            <li><a href="projects.html">PROJECTS</a></li>
                            <li><a href="connect">CONNECT</a></li>
                            <li><a href="editorial.html">EDITORIAL</a></li>
                            <a href="login.html"><button className="btn" id="login">Login</button></a>
                            <a href="signUp.html"><button className="btn" id="signup">SignUp</button></a>
                        </ul>
                    </div>
                </header>

                <main>
                    <div className="ed">
                        <h2>Understanding HTML for Beginners</h2>
                        <p>HTML stands for HyperText Markup Language...</p>
                    </div>

                    <section id="htmlBasics">
                        <pre ref={preRef} id="htmlBasicsPre">
                            {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
  </head>
  <body>

    <!-- Your content goes here -->

  </body>
</html>`}
                        </pre>
                        <button className="btn" onClick={copyCode}>Copy Code</button>
                    </section>

                    {/* Include other sections similarly */}

                </main>
            </body>
        </html>
    );
}
