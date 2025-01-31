import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import Logout from './Logout';

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const location = useLocation(); // Get current path
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? '#121212' : '#fff';
        document.body.style.color = darkMode ? '#fff' : '#000';
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const handleThemeToggle = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const buttonStyle = {
        marginRight: '20px',
        fontSize: '1.2rem',
        fontWeight: '700',
        padding: '0.3rem 1.4rem'
    };

    // ✅ Define pages where the Dark Mode button should be shown
    const showDarkModeButton = isLoggedIn && (
        location.pathname.startsWith("/Frontend") || 
        location.pathname.startsWith("/carousel-task-btn") || 
        location.pathname.startsWith("/task-navbar") ||
        location.pathname.startsWith("/grid") || 
        location.pathname.startsWith("/fetch") ||
        location.pathname.startsWith("/task-flexbox-navbar") ||
        location.pathname.startsWith("/css-animations") ||
        location.pathname.startsWith("/form-validation") ||
        location.pathname.startsWith("/pwa") ||
        location.pathname.startsWith("/QuizzesPage") ||
        location.pathname.startsWith("/HtmlQuize")
    );

    return (
        <AppBar sx={{ bgcolor: darkMode ? '#222' : '#333' }}>
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    CodeRecall
                </Typography>

                {/* ✅ Show Dark Mode Toggle Button on specific pages */}
                {showDarkModeButton && (
                    <IconButton onClick={handleThemeToggle} color="inherit" sx={{ marginRight: '10px' }}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                )}

                {!isLoggedIn ? (
                    <>
                    <IconButton onClick={handleThemeToggle} color="inherit" sx={{ marginRight: '10px' }}>
                        {darkMode ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                        <Button variant="contained" style={buttonStyle} color="error" component={Link} to="/login">
                            Login 
                        </Button>
                        <Button variant="contained" style={buttonStyle} color="success" component={Link} to="/signup">
                            Signup
                        </Button>
                    </>
                ) : (
                    <Logout setIsLoggedIn={setIsLoggedIn} />
                )}
            </Toolbar>
        </AppBar>
    );
};




// margin-top: 45px;
//     margin-right: 34px;
//     margin-left: 24px;
//     /* margin: 43px; */
//     padding: 19px;
//     flex: 1 1 126px;
//     background-color: #252424;
//     color: white;
//     border-radius: 10px;
//     border: 2px solid transparent;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     text-align: center;
//     max-width: 300px;
//     scroll-snap-align: center;
//     transition: transform 0.3s ease-in-out;


// // src/components/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <header className="header" style={{backgroundColor: "#060d1b;"}}>
//       <nav className="navbar">
//         <div className="logo">
//           <h1>CodeRecall</h1>
//         </div>
//         {/* <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/connect">Connect</Link></li>
//           <li><Link to="/frontend">Frontend</Link></li>
//           <li><Link to="/backend">Backend</Link></li>
//           <li><Link to="/framework">Frameworks</Link></li>
//         </ul> */}
//         <div className="auth-links">
//           <button onClick={() => window.location.href = '/signup'}>SignUp</button>
//           <button onClick={() => window.location.href = '/login'}>Login</button>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
