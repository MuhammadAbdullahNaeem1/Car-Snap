import React from 'react';
import '../styles/developers.css'; // Import your stylesheet
import abdullah from '../images/abdullah.png';
import user from '../images/user.png';
// import mousa from '../images/user.png';
// import rameez from '../images/rameez.png';
import Footer from "./Footer.jsx";

const Developers = () => {
  const developersData = [
    { name: 'Muhammad Abdullah Naeem (LEAD)', photo: abdullah },
    { name: 'Sayyeda Fatima Masood', photo: user },
    { name: 'Aatiqa Hussain', photo: user },
    { name: 'Abdul Aziz', photo: user},
  ];

  return (
    <>
    <h1 className='developers-heading'> Meet the team!</h1>
    <div className="developers-container">
      {developersData.map((developer, index) => (
        <div key={index} className="developer-box">
          <img src={developer.photo} alt={developer.name} className="developer-photo" />
          <p className="developer-name">{developer.name}</p>
        </div>
      ))}
    </div>
    <Footer/>
    </>

  );
};

export default Developers;
