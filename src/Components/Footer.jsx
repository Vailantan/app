import React from 'react'
import "../style/Footer.css"
export default function Footer() {
    const handleRedirect = (url) => {
        window.open(url, '_blank'); // Open the link in a new tab
      };
  return (
    <>
    <div className="footer-centered-container">
    <div className="footer-centered-text1">Dhara Global Solutions</div>
    <div className="footer-centered-text">dharaglobalsolutions@gmail.com</div>
    <div className="footer-icons-container">
    <div className="footer-icon" onClick={() => handleRedirect('https://www.linkedin.com/company/dhara-global-solutions/')}>
      <img src='linked-in-logo-of-two-letters.png' alt="LinkedIn Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('https://mail.google.com/mail/u/0/#inbox')}>
      <img src='link.png' alt="External Link Icon" />
    </div>
    <div className="footer-icon" onClick={() => handleRedirect('https://www.instagram.com/dharaglobalsolutions/')}>
      <img src='instagram.png' alt="Instagram Icon" />
    </div>
  </div>
    <div className="footer-centered-text">©2023 by Dhara Global Solutions.</div>
  </div>
    </>
  )
}
