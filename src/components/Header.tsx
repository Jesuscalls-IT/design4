import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const img = `${process.env.PUBLIC_URL}/jcc.png`;

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={img} alt="Jesus Calls Logo" />
      </div>
      <nav className="nav-bar">
        <ul>
        <li><Link to="/" style={{color:'white'}}>Jesus Calls</Link></li>
        <li><Link to="/dr-paul" style={{color:'white'}}>Dr. Paul Dhinakaran</Link></li>
        <li><Link to="/evang" style={{color:'white'}}>Sis Evangline Dhinakaran</Link></li>
        <li><Link to="/DGS" style={{color:'white'}}>Dr.DGS Dhinakaran</Link></li>
        <li><Link to="/Stella" style={{color:'white'}}>Stella Dhinakaran</Link></li>
        <li><Link to="/Sam" style={{color:'white'}}>Samuel Dhinakaran</Link></li>
        <li><Link to="/Shilpa" style={{color:'white'}}>Dr. Shilpa Dhinakaran</Link></li>
        <li><Link to="/Stellar" style={{color:'white'}}>Stella Remola</Link></li>
          {/* <li>About</li>
          <li>Blessing Plans</li>
          <li>Prayer Towers</li>
          <li>Job Opportunities</li>
          <li>Contact</li>
          <li>Programs</li>
          <li>Blogs</li> */}
        </ul>
       
      </nav>
    </header>
  );
};

export default Header;
