import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      {/* Card with Contact Details */}
      <div className="card text-center shadow-lg" style={{ width: "60%", margin: "auto" }}>
        <img 
          src="https://static-assets.business.amazon.com/assets/in/7th-april-2022/shutterstock_1450_664_0704.jpg.transform/1450x664/image.jpg" 
          className="card-img-top" 
          alt="Contact Us"
        />
        <div className="card-body">
          <h1 className="card-title text-primary">REACH OUT TO US!</h1>
          <p className="card-text">We'd love to hear from you. Feel free to get in touch using the details below.</p>

          {/* Contact Information */}
          <div className="text-start">
            <p><strong>📍 Address:</strong> 123 Beauty Street, Glamour City, USA</p>
            <p><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>📧 Email:</strong> support@makeup.com</p>
            <p><strong>⏳ Working Hours:</strong> Mon - Sat (9:00 AM - 8:00 PM)</p>
          </div>

          {/* Contact Form */}
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="3" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-dark">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
