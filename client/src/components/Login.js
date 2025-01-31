import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";

function Login({ setIsLoggedIn, isLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                              setIsLoggedIn(true);
                              navigate("/", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login failed");
                }
            })
            .catch(err => console.log(err));
    };

    const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
    const heading = { fontSize: "2.5rem", fontWeight: "600" };
    const row = { display: "flex", marginTop: "2rem" };
    const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
    const label = { fontWeight: "700" };

    return (
        <div>
            <Grid align="center" className="wrapper">
                <Paper style={paperStyle} sx={{ width: { xs: '80vw', sm: '50vw', md: '40vw', lg: '30vw', xl: '20vw' }, height: { lg: '50vh' } }}>
                    <Typography component="h1" variant="h5" style={heading}>Login</Typography>
                    <form onSubmit={handleLogin}>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} style={label} label="Email" fullWidth variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </span>
                        <span style={row}>
                            <TextField sx={{ label: { fontWeight: '700', fontSize: "1.3rem" } }} label="Password" fullWidth variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)} />
                        </span>
                        <Button style={btnStyle} variant="contained" type="submit">Login</Button>
                    </form>
                    <p>Don't have an account? <Link href="/signup">SignUp</Link></p>
                </Paper>
            </Grid>
        </div>
    );
}

export default Login;


// import React, { useState } from 'react';
// // import './Auth.css'; // Reuse the same stylesheet for consistency

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });

//       if (response.ok) {
//         const result = await response.json();
//         window.location.href = `/home?email=${encodeURIComponent(result.email)}`;
//       } else {
//         const error = await response.json();
//         alert('Error logging in user: ' + error.error);
//       }
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       alert('Error logging in user: ' + error.message);
//     }
//   };

//   return (
//     <>
//       <header className="header">
//         <nav className="navbar">
//           <div className="logo">
//             <h1>CodeRecall</h1>
//           </div>
//           <ul className="nav-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/connect">Connect</a></li>
//             <li><a href="/frontend">Frontend</a></li>
//             <li><a href="/backend">Backend</a></li>
//             <li><a href="#frameworks">Frameworks</a></li>
//           </ul>
//           <div className="auth-links">
//             <button onClick={() => window.location.href = '/signup'}>Sign Up</button>
//           </div>
//         </nav>
//       </header>
//       <main className="auth-main">
//         <section className="auth-container">
//           <h2>Login</h2>
//           <form onSubmit={handleLogin}>
//             <div className="form-group">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit">Login</button>
//           </form>
//         </section>
//       </main>
//       <footer className="footer">
//         <p>&copy; 2024 CodeRecall</p>
//       </footer>
//     </>
//   );
// };

// export default LoginPage;
