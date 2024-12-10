import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import images
import homePageImage from '../images/homepage.jpg';
import customMetalFabrication from '../images/custom-metal-fabrication.jpg';
import weldingServices from '../images/welding-services.jpg';
import sheetMetalWork from '../images/sheet-metal-work.jpg';
import certificate1 from '../images/certificate-1.jpg';
import certificate2 from '../images/certificate-2.jpg';
import certificate3 from '../images/certificate-3.jpg';



function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      {/* Background Image Section */}
      <div
        className="home-banner"
        style={{
          backgroundImage: `url(${homePageImage})`,
        }}
      >
        <h1>Precision Fabricators</h1>
      </div>

      {/* Content Below the Background Image */}
      <div className="home-content">
        <h1>Welcome to Precision Fabricators</h1>
        <p>
          Your trusted partner in delivering precision and excellence. With over a decade of experience, we specialize in custom metalwork, professional welding, and tailored industrial solutions. From concept to creation, we bring your ideas to life with unmatched quality and dedication. Explore our services, and let us help you build something extraordinary!
        </p>
      </div>

      {/* Services at a Glance */}
      <section className="services-section">
        <h2>Services at a Glance</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={customMetalFabrication} alt="Custom Fabrication" />
            <h3>Custom Metal Fabrication</h3>
            <p>
              Tailored metal fabrication solutions to meet your exact needs, ensuring precision and quality.
            </p>
            <button onClick={() => navigate('/contact')}>Get Quote</button>
          </div>
          <div className="service-card">
            <img src={weldingServices} alt="Welding Services" />
            <h3>Welding Services</h3>
            <p>
              Professional MIG, TIG, and arc welding services for custom projects and urgent repairs.
            </p>
            <button onClick={() => navigate('/contact')}>Get Quote</button>
          </div>
          <div className="service-card">
            <img src={sheetMetalWork} alt="Sheet Metal Work" />
            <h3>Sheet Metal Work</h3>
            <p>
              Expert sheet metal solutions, including cutting, bending, and shaping for various industries.
            </p>
            <button onClick={() => navigate('/contact')}>Get Quote</button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <h2>Our Achievements</h2>
        <div className="statistics-grid">
          <div className="stat-card">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Satisfied Clients</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Years in Business</p>
          </div>
        </div>
      </section>

      {/* Certifications and Clients */}
      <section className="certifications-section">
        <h2>Awards and Recognitions</h2>
        <div className="certifications-grid">
          <img src={certificate1} alt="Certification 1" />
          <img src={certificate2} alt="Certification 2" />
          <img src={certificate3} alt="Certification 3" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
