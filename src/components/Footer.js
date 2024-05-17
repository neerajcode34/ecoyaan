// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file for styling

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      
      <div className="back-to-top" onClick={scrollToTop} title="Back to top">
        <span>&#8593;</span>
      </div>
      
      <div>
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Sell on Ecoyaan</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <h3>Links</h3>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
      <div>
        <h3>Follow Us</h3>
        
      </div>
      <div>
        <h3>Subscribe</h3>
        <p>Subscribe to receive updates on blogs, future launches and more!</p>
        
      </div>
      <div>
        <h3>Registered Address</h3>
        <address>
          1-N-12T-781/1<br />
          Sri Krishna Vilasa, Urvastores, Ashoknagar(MR),<br />
          Mangalore, Dakshina Kannada- 575006,<br />
          Karnataka, India
        </address>
      </div>
      <div>
        <h3>Legal Business Name</h3>
        <p>Kindkarma E-Retail Private Limited</p>
        <p>CIN: U47912KA2023PTC182592</p>
        <p>Telephone: +91 9980490777</p>
      </div>
      <div>
        <p>© 2023 - 2024, Ecoyaan TM</p>
      </div>
    </footer>
  );
}

export default Footer;
