import React from 'react';


function ContactPage() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>
        Have questions or need a quote? Feel free to reach out to us using the form below. We typically respond to inquiries within three business days.

      </p>
      
      <form className="contact-form">
        <h3>Contact form</h3>

        {/* Name Input */}
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" 
          required 
        />

        {/* Email Input */}
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
        />

        {/* Subject Input */}
        <label htmlFor="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          placeholder="Enter the subject" 
        />

        {/* Message Textarea */}
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Write your message here..." 
          required 
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactPage;
