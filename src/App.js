// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css'; // Import the styles

// Import components
import Header from './components/Header';
// import Footer from './components/Footer';
// import FQAS from './components/Faqs';
import ChatbotIcon from './components/ChatbotIcon';

// Import pages
import Home from './pages/Home';
// Add more page imports as needed
import ConnectPage from './pages/ConnectPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Frontend from './pages/Frontend';
import NavbarTask from './pages/tasks/task-navbar';
import Carousal from './pages/tasks/carousel-task-btn'
import Grid from './pages/tasks/grid';
import Fetch from './pages/tasks/fetch';
import FlexNavbar  from './pages/tasks/task-flexbox-navbar';
import Cssani from './pages/tasks/css-animations';
import Form from './pages/tasks/form-validation';
import Pwa from './pages/tasks/pwa';
import Quizzes from './pages/tasks/quizes/QuizzesPage';
import Quize from './pages/tasks/quizes/HtmlQuize';
// import Backend from './pages/Backend';
// import Frameworks from './pages/Frameworks';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<ConnectPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/task-navbar" element={<NavbarTask />} />
          <Route path="/carousel-task-btn" element={<Carousal />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/task-flexbox-navbar" element={<FlexNavbar />} />
          <Route path="/css-animations" element={<Cssani />} />
          <Route path="/form-validation" element={<Form />} />
          <Route path="pwa" element={<Pwa />} />
          <Route path="QuizzesPage" element={<Quizzes/>} />
          <Route path="HtmlQuize" element={<Quize/>} />

          {/* Uncomment and add more routes as needed */}
          {/* 
          
          <Route path="/backend" element={<Backend />} />
          <Route path="/frameworks" element={<Frameworks />} /> */}
        </Routes>
        {/* <FQAS/> */}
        <ChatbotIcon />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
