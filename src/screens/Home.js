import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousal from '../components/Carousal';
// import { useLocation } from 'react-router-dom';


export default function Home() {
  // const location=useLocation()
  return (
    <>
    {/* <h1>{location.state.id}</h1> */}
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div><Footer/></div>
    </>
  );
}
