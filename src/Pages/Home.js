
import React from 'react';
import Slider from './Slider';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <Slider />
      <section className="section">
        <h2>Join our community in creating a more sustainable future for everyone</h2>
        <p>
          At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.
        </p>
        <p>
          Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
        </p>
      </section>
      <section className="section">
        <h2>Carefully curated Eco-friendly products</h2>
        <p>
          We believe that every purchase you make can have a positive impact on the planet and the future.
        </p>
        <p>
          Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.
        </p>
      </section>
      <section className="section">
        <h2>For businesses that care deeply about sustainability</h2>
        <p>
          Do you run a business that is committed to sustainability in every aspect of your work?
        </p>
        <p>
          Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
        </p>
        <p>
          If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:
        </p>
        <a href="#">Contact Us</a>
      </section>
    
    </div>
  );
}

export default Home;
