import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About Section */}
        <div className="footer-address">
          <h3>Our Address</h3>
          <p>
            <strong>Precision Fabricators</strong><br />
            123 Fabrication Avenue, Industrial Zone,<br />
            Metalworks City, ST 45678,<br />
            USA
          </p>
        </div>

        {/* Email Section */}
        <div className="footer-email">
          <h3>Email Us</h3>
          <p>
            We typically respond to e-mail inquiries within five business days.

            <p>
              Please use our{' '}
              <Link to="/contact">Contact Form</Link> or send an email to{' '}
              <a href="mailto:CustomerCare@precisionfabricators.com">contact@precisionfabricators.com</a>
            </p>
          </p>
        </div>

        {/* Call Us Section */}
        <div className="footer-phone">
          <h3>Call Us</h3>
          <p>
            Customer Care: <strong>1-234-567-8900</strong>
          </p>
          <p>
            <strong>Hours of Operation:</strong> Monday - Friday, 8:00am - 5:00pm EST
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Precision Fabricators | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;