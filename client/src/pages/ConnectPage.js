import React, { useState, useEffect } from 'react';
import './ConnectPage.css'; // Import the specific styles for ConnectPage

const ConnectPage = () => {
  const [userData, setUserData] = useState(null);
  const [queries, setQueries] = useState([]);
  const [queryText, setQueryText] = useState('');

  useEffect(() => {
    const fetchSessionInfo = async () => {
      try {
        const response = await fetch('/session-info');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Error fetching session info');
        }
      } catch (error) {
        console.error('Error fetching session info:', error);
      }
    };

    const fetchQueries = async () => {
      try {
        const response = await fetch('/queries');
        const queriesData = await response.json();
        setQueries(queriesData);
      } catch (error) {
        console.error('Error fetching queries:', error);
      }
    };

    fetchSessionInfo();
    fetchQueries();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      alert('Error: Not authenticated');
      return;
    }
    try {
      const response = await fetch('/queries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          query: queryText,
        }),
      });
      if (response.ok) {
        setQueryText('');
        // Fetch queries again to update the list
        const response = await fetch('/queries');
        const queriesData = await response.json();
        setQueries(queriesData);
      } else {
        const error = await response.json();
        alert('Error posting query: ' + error.error);
      }
    } catch (error) {
      console.error('Error posting query:', error);
      alert('Error posting query: ' + error.message);
    }
  };

  const handleDelete = async (queryId) => {
    if (window.confirm('Are you sure you want to delete this query?')) {
      try {
        const response = await fetch(`/queries/${queryId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          // Refresh the list of queries
          const response = await fetch('/queries');
          const queriesData = await response.json();
          setQueries(queriesData);
        } else {
          const error = await response.json();
          alert('Error deleting query: ' + error.error);
        }
      } catch (error) {
        console.error('Error deleting query:', error);
        alert('Error deleting query: ' + error.message);
      }
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
            <li><a href="index.html">Home</a></li>
            <li><a href="connect.html">Connect</a></li>
            <li><a href="frontend.html">Frontend</a></li>
            <li><a href="backend.html">Backend</a></li>
            <li><a href="frameworks.html">Frameworks</a></li>
          </ul>
          <div className="auth-links">
            <button onClick={() => window.location.href = 'index.html'}>Logout</button>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div className="container">
          <section className="connect-section">
            <h2>Post Your Query</h2>
            <form id="queryForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="query">Query:</label>
                <textarea
                  id="query"
                  name="query"
                  value={queryText}
                  onChange={(e) => setQueryText(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Post Query</button>
            </form>
          </section>
          <section className="queries-section">
            <h2>Recent Queries</h2>
            <div id="queries">
              {queries.map((query) => (
                <div className="query-item" key={query._id}>
                  <h3>{query.username}</h3>
                  <p>{query.query}</p>
                  <small>Posted on: {new Date(query.createdAt).toLocaleString()}</small>
                  {userData && query.email === userData.email && (
                    <button className="delete-btn" onClick={() => handleDelete(query._id)}>
                      Delete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 CodeRecall</p>
      </footer>
    </>
  );
};

export default ConnectPage;
