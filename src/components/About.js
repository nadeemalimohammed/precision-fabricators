import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-page"> 
      <section className="about-us-section">
        <h2>About Us</h2>
        <p>
          Welcome to <strong>Precision Fabricators</strong>, where craftsmanship meets precision. With over 10 years of experience in the fabrication industry, we have established ourselves as a trusted partner for businesses and individuals alike. Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success.
        </p>
        <p>
          From humble beginnings, we’ve grown into a leading fabrication company specializing in custom metalwork, structural fabrication, and industrial solutions. Over the years, we’ve collaborated with clients from various sectors, delivering projects that range from intricate ornamental designs to large-scale industrial builds.
        </p>
        <p>
          At Precision Fabricators, we pride ourselves on:
        </p>
        <ul>
          <li> Expertise: A skilled team of professionals dedicated to delivering top-notch results.
          </li>
          <li>Reliability: Timely project delivery without compromising on quality.</li>
          <li>Innovation: Leveraging the latest technologies to bring your visions to life.</li>
        </ul>
        <p>
          Our mission is simple: to turn your ideas into reality with precision, efficiency, and unmatched craftsmanship. Whether you’re looking for custom metal fabrication, equipment repair, or decorative metalwork, we’re here to bring your project to life.
        </p>
        <p>
          Let’s build something great together.
        </p>
      </section>

      <section className="testimonials-section">
        <h3>What Our Clients Say</h3>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="testimonial-text">
              "We had a complex design for a custom metal structure, and Precision Fabricators brought it to life flawlessly. Their attention to detail and quality craftsmanship were beyond our expectations. Highly recommend them for any custom fabrication needs!"
            </p>
            <p><strong>– Alex R., Project Manager</strong></p>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">
              "Our warehouse construction required precise and durable steel frames. Precision Fabricators delivered outstanding results on time and within budget. Their expertise in structural fabrication is unmatched!"
            </p>
            <p><strong>– Linda T., Construction Contractor</strong></p>
          </div>

          <div className="testimonial">
            <p className="testimonial-text">
              "The team at Precision Fabricators helped us with urgent welding repairs on our heavy machinery. They responded quickly and fixed the issue perfectly. Excellent service and professionalism!"
            </p>
            <p><strong>– Michael H., Manufacturing Supervisor</strong></p>
          </div>

          <div className="testimonial">
            <p>
              "The custom gate they designed for our home is a true masterpiece. It’s both functional and stunningly beautiful. We’ve received so many compliments on it. Thank you for the exceptional work!"
            </p>
            <p><strong>– Samantha J., Homeowner</strong></p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default AboutUs;
