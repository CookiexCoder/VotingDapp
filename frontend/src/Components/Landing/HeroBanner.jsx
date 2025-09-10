import React from "react";
import "./LandingCss/Hero.css";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Power to the People</h1>
        <h3>Proven by the Chain</h3>
        <p>
          “Tired of wondering if your vote really counted? DVote uses secure
          blockchain technology to guarantee that your vote is recorded exactly
          as you cast it. It's a simpler, safer, and more transparent way to run
          elections, polls, and surveys. See for yourself how it works and be
          part of the future of voting.”
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Explore More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
