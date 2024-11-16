import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="menu-footer">
        <p>© 2024 Boba. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy policy</a>
          <a href="/imprint">Imprint</a>
        </div>
        <div className="footer-social">
          <a href="/facebook">Facebook</a>
          <a href="/instagram">Instagram</a>
        </div>
      </footer>
    );
};

export default Footer;
