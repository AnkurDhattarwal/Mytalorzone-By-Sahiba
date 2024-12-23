import Layout from '../../components/layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-page">
        <section className="contact-intro">
          <h2 className="title">Contact Us</h2>
          <p className="description">
            We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to get in touch with us.
          </p>
        </section>

        <section className="contact-form-section">
          <h3 className="section-title">Get in Touch</h3>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>

        <section className="contact-details">
          <h3 className="section-title">Our Details</h3>
          <p className="description">Feel free to reach out to us through the following channels:</p>
          <ul className="details-list">
            <li><strong>Email:</strong> support@mytalorzonebysahiba.com</li>
            <li><strong>Phone:</strong> +123 456 7890</li>
            <li><strong>Address:</strong> abc road, jaipur, rajasthan</li>
          </ul>
        </section>

        <style jsx>{`
          .contact-page {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            font-family: 'Roboto', sans-serif;
            color: #444;
            line-height: 1.6;
          }

          .title {
            font-size: 3em;
            text-align: center;
            color: #333;
            margin-bottom: 20px;
            font-weight:bold;
          }

          .description {
            font-size: 1.2em;
            text-align: justify;
            margin-bottom: 15px;
          }

          .section-title {
            font-size: 2em;
            margin-top: 40px;
            margin-bottom: 20px;
            color: #007BFF;
            border-bottom: 2px solid #007BFF;
            display: inline-block;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            font-size: 1.1em;
            margin-bottom: 5px;
          }

          .form-group input,
          .form-group textarea {
            padding: 10px;
            font-size: 1em;
            border: 1px solid #ddd;
            border-radius: 5px;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #007BFF;
            outline: none;
          }

          .submit-button {
            padding: 10px 20px;
            font-size: 1.1em;
            color: #fff;
            background-color: #007BFF;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .submit-button:hover {
            background-color: #0056b3;
          }

          .details-list {
            list-style-type: none;
            padding: 0;
            font-size: 1.1em;
          }

          .details-list li {
            margin: 10px 0;
            padding: 10px;
            background: #f9f9f9;
            border-left: 4px solid #007BFF;
            border-radius: 5px;
          }

          @media (max-width: 768px) {
            .title {
              font-size: 2.5em;
            }

            .description {
              font-size: 1em;
            }

            .section-title {
              font-size: 1.5em;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default ContactPage;
