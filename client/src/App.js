
import {React, useState, useEffect } from "react";
import { BrowserRouter , Router, Route, Routes, Navigate  } from 'react-router-dom';
import './styles.css'; // Import the styles
import axios from "axios";
// Import components
import { Header } from './components/Header';
// import Footer from './components/Footer';
// import FQAS from './components/Faqs';
import ChatbotIcon from './components/ChatbotIcon';
// Import pages
import Home from './components/Home';
// Add more page imports as needed
import ConnectPage from './pages/ConnectPage';
import SignupPage from './components/SignUp';
import LoginPage from './components/Login';
import Frontend from './pages/Frontend';
import NavbarTask from './pages/tasks/task-navbar';
import Carousal from './pages/tasks/carousel-task-btn'
import Grid from './pages/tasks/grid';
import Fetch from './pages/tasks/fetch';
import FlexNavbar from './pages/tasks/task-flexbox-navbar';
import Cssani from './pages/tasks/css-animations';
import Form from './pages/tasks/form-validation';
import Pwa from './pages/tasks/pwa';
import Quizzes from './pages/tasks/quizes/QuizzesPage';
import Quize from './pages/tasks/quizes/HtmlQuize';
// import Head from './components/Header';
// import Backend from './pages/Backend';
// import Frameworks from './pages/Frameworks';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3001/user', { withCredentials: true })
      .then(response => {
        if (response.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div className="App">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/home" /> : <SignupPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/frontend" element={<Frontend />} />
          <Route path="/task-navbar" element={<NavbarTask />} />
          <Route path="/carousel-task-btn" element={<Carousal />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/task-flexbox-navbar" element={<FlexNavbar />} />
          <Route path="/css-animations" element={<Cssani />} />
          <Route path="/form-validation" element={<Form />} />
          <Route path="/pwa" element={<Pwa />} />
          <Route path="/QuizzesPage" element={<Quizzes />} />
          <Route path="/HtmlQuize" element={<Quize />} />

          {/* Uncomment and add more routes as needed */}
          {/* 

          <Route path="/backend" element={<Backend />} />
          <Route path="/frameworks" element={<Frameworks />} /> */}
        </Routes>
        {/* <FQAS/> */}
        <ChatbotIcon />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;


