import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(result => {
                if (result.status === 201) {
                    navigate("/login");
                }
            })
            .catch(err => {
                if (err.response && err.response.status === 400) {
                    window.alert("Email already exists. Please use a different email.");
                } else {
                    console.log(err);
                }
            });
    };
    const paperStyle = {padding: "2rem", margin: "100px auto", borderRadius:"1rem", boxShadow: "10px 10px 10px"};
    const heading = {fontSize:"2.5rem", fontWeight:"600"}
    const row = {display:"flex", marginTop:"2rem"}
    const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"};
    return (
        <div>
            <Grid align="center" className="wrapper">
                <Paper style={paperStyle} sx={{width: {
                    xs: '80vw',     // 0
                    sm: '50vw',     // 600
                    md: '40vw',     // 900
                    lg: '30vw',     // 1200
                    xl: '20vw',     // 1536 
                },
                height:{
                    lg: '60vh',     // 1200px and up
                }}}>
                    <Typography component="h1" variant="h5" style={heading}> Signup </Typography>
                    <form onSubmit={handleSignup}>
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth type="text" label="Enter Name" name="name" onChange={(e)=>setName(e.target.value)}></TextField>
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email" name="email" onChange={(e)=>setEmail(e.target.value)}/>                    
                        <TextField style={row} sx={{label: { fontWeight: '700', fontSize:"1.3rem" }}} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
                        <Button style={btnStyle} variant="contained" type="submit">SignUp</Button>
                    </form>
                    <p>Already have an account?<Link href="/login"> Login</Link></p>
                </Paper>
            </Grid>
        </div>
    )
}
export default SignUp;


// import React, { useState } from 'react';
// import '../styles.css'; // Ensure this path is correct for your styles

// const SignupPage = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignup = async (event) => {
//     event.preventDefault();
  
//     try {
//       const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, email, password })
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         window.location.href = `/fronend`;
//       } else {
//         // Check if the response is in JSON format
//         const contentType = response.headers.get('content-type');
//         if (contentType && contentType.includes('application/json')) {
//           const error = await response.json();
//           alert('Error signing up user: ' + error.error);
//         } else {
//           const errorText = await response.text(); // Read as text if not JSON
//           alert('Error signing up user: ' + errorText);
//         }
//       }
//     } catch (error) {
//       console.error('Error signing up user:', error);
//       alert('Error signing up user: ' + error.message);
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
//             <button onClick={() => window.location.href = '/login'}>Login</button>
//           </div>
//         </nav>
//       </header>
//       <main className="auth-main">
//         <section className="auth-container">
//           <h2>Signup</h2>
//           <form onSubmit={handleSignup}>
//             <div className="form-group">
//               <label htmlFor="username">Username:</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
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
//             <button type="submit">Signup</button>
//           </form>
//         </section>
//       </main>
//       <footer className="footer">
//         <p>&copy; 2024 CodeRecall</p>
//       </footer>
//     </>
//   );
// };

// export default SignupPage;
