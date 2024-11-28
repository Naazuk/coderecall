import React, { useState } from 'react';
import '../styles.css'; // Ensure this path is correct for your styles

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      });
  
      if (response.ok) {
        const result = await response.json();
        window.location.href = `/fronend`;
      } else {
        // Check if the response is in JSON format
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const error = await response.json();
          alert('Error signing up user: ' + error.error);
        } else {
          const errorText = await response.text(); // Read as text if not JSON
          alert('Error signing up user: ' + errorText);
        }
      }
    } catch (error) {
      console.error('Error signing up user:', error);
      alert('Error signing up user: ' + error.message);
    }
  };
  

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>CodeRecall</h1>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/connect">Connect</a></li>
            <li><a href="/frontend">Frontend</a></li>
            <li><a href="/backend">Backend</a></li>
            <li><a href="#frameworks">Frameworks</a></li>
          </ul>
          <div className="auth-links">
            <button onClick={() => window.location.href = '/login'}>Login</button>
          </div>
        </nav>
      </header>
      <main className="auth-main">
        <section className="auth-container">
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Signup</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CodeRecall</p>
      </footer>
    </>
  );
};

export default SignupPage;
