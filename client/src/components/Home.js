// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

// function Home() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [user, setUser] = useState(location.state?.user);
//     const [loading, setLoading] = useState(!user);
//     useEffect(() => {
//         if (!user) {
//             axios.get('http://localhost:3001/user', { withCredentials: true })
//                 .then(response => {
//                     if (response.data.user) {
//                         setUser(response.data.user);
//                     } else {
//                         navigate("/login");
//                     }
//                 })
//                 .catch(() => navigate("/login"))
//                 .finally(() => setLoading(false));
//         } else {
//             setLoading(false);
//         }
//     }, [user, navigate]);

//     if (loading) {
//         return <center><h1>Loading...</h1></center>;
//     }

//     return (
//         <center>
//             <h1 style={{color:"white", fontSize:"5rem"}}>Welcome Home {user && user.name} !!!</h1>
//         </center>
//     );
// }

// export default Home;



// src/pages/Home.js
import React from 'react';
import ContentSection from '../components/ContentSection';

const Home = () => {
  return (
    <div style={{ backgroundColor: "#0a0909", minHeight: "100vh" }}>
      <section className="intro" id="home" style={{ backgroundColor: "#0a0909", margin: "-1rem;" }}>
        <h2 style={{ 
          fontSize: "2.5rem", 
          lineHeight: "1",
          fontFamily: "Sixtyfour Convergence", 
          fontOpticalSizing: "auto", 
          fontWeight: "400", 
          fontStyle: "normal",
          fontVariationSettings: '"BLED" 0, "SCAN" 0, "XELA" 0, "YELA" 0',
        }}>
          Welcome to CodeRecall
        </h2>
        <p>Brush up on your web development skills with small, interactive tasks.</p>
      </section>
      <ContentSection />
    </div>
  );
};

export default Home;
