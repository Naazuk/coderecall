import React, { useState } from 'react';
// import './Auth.css'; // Reuse the same stylesheet for consistency

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const result = await response.json();
        window.location.href = `/home?email=${encodeURIComponent(result.email)}`;
      } else {
        const error = await response.json();
        alert('Error logging in user: ' + error.error);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      alert('Error logging in user: ' + error.message);
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
            <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
          </div>
        </nav>
      </header>
      <main className="auth-main">
        <section className="auth-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
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
            <button type="submit">Login</button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CodeRecall</p>
      </footer>
    </>
  );
};

export default LoginPage;
