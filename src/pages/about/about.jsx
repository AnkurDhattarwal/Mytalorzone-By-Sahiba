import Layout from '../../components/layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        <section className="about-intro">
          <h2 className="title">About Mytalorzone By Sahiba</h2>
          <p className="description">
            Mytalorzone By Sahiba is a clothing brand that offers creative, unique, and diverse clothing for girls, including traditional, western, and trendy styles.
          </p>
          <p className="description">
            Our mission is to celebrate individuality and empower young girls to express themselves through fashion. Whether you're looking for a classic ethnic outfit for special occasions or stylish everyday wear, Mytalorzone By Sahiba has something for every taste and preference.
          </p>
        </section>

        <section className="our-values">
          <h3 className="section-title">Our Values</h3>
          <ul className="values-list">
            <li><strong>Creativity:</strong> Bringing innovative designs to life.</li>
            <li><strong>Quality:</strong> Ensuring every garment is crafted with care.</li>
            <li><strong>Inclusivity:</strong> Designing for diverse tastes and occasions.</li>
          </ul>
        </section>

        <section className="why-choose-us">
          <h3 className="section-title">Why Choose Us?</h3>
          <p className="description">
            At Mytalorzone By Sahiba, we pride ourselves on offering exceptional customer service and a seamless shopping experience. Our designs blend comfort with style, making them perfect for young fashion enthusiasts. 
          </p>
          <p className="description">
            Join us on our journey to redefine fashion for girls, one outfit at a time.
          </p>
        </section>

        <style jsx>{`
          .about-page {
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

          .values-list {
            list-style-type: none;
            padding: 0;
            font-size: 1.1em;
          }

          .values-list li {
            margin: 10px 0;
            padding: 10px;
            background: #f9f9f9;
            border-left: 4px solid #007BFF;
            border-radius: 5px;
          }

          .why-choose-us {
            margin-top: 40px;
            background: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

export default AboutPage;
