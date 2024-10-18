import React from 'react';
// import '../../public/styles.css';
import '../styles.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <h1>Jesus Calls</h1>
        <p>
          Jesus Calls is a global ministry founded by Late Brother D.G.S. Dhinakaran and led by Dr. Paul Dhinakaran. Jesus Calls serves to bring comfort and healing to the broken-hearted without distinction through prayer offered 24/7 throughout the year.
        </p>
      </div>
      <div className="footer-right">
        <h2>Want to know more?</h2>
        <div className="contact-info">
          <p>
            <strong>24/7 Prayers</strong><br />
            <span className="phone">8546999000</span>
          </p>
          <p>
            <strong>For Queries, Call</strong><br />
            <span className="phone">04423456677</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
