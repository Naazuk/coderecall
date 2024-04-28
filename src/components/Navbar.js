import React from 'react';
import {Link} from 'react-router-dom';
import './style2.css';
export default function Navbar() {
  return (
    <div>
      <header>
         <ul>
           <div className="nav">
             <ul>
             <li><img src="logo.png" className="logo" alt="oops" /></li>
               <li><Link to="/">Home</Link></li>
               <li><Link to="about">About</Link></li>
               <li><Link to="/projects">Projects</Link></li>
               {/* <li><Link to="connect">CONNECT</Link></li> */}
               <li><Link to="/editorial">Editorial</Link></li>
               <Link to="/login"><button id="login">Login</button></Link>
               <Link to="/signup"><button id="signup">SignUp</button></Link>
             </ul>
           </div>
         </ul>
       </header>
    </div>
  )
}
