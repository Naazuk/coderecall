import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './components/login';
import Signup from './components/signup'; 
// import Editorial from './screens/HTMLBasics'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Projects from './screens/Projects';
import HTMLBasics from './screens/HTMLBasics';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/editorial" element={<HTMLBasics />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
