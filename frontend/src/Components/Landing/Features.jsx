import React from "react";
import "./LandingCss/Features.css";

const Features = () => {
  const features = [
    {
      title: "Secure Voting",
      desc: "Every vote is encrypted and secured using advanced cryptographic algorithms, ensuring full voter confidence.",
      icon: "🔒",
    },
    {
      title: "Transparency",
      desc: "All processes are publicly verifiable, making elections transparent and trustworthy for every participant.",
      icon: "🌐",
    },
    {
      title: "Accessibility",
      desc: "Voters can cast their ballots from anywhere with an internet connection, without physical barriers.",
      icon: "📱",
    },
    {
      title: "Scalability",
      desc: "Our system can handle millions of votes without performance issues, ensuring smooth elections worldwide.",
      icon: "⚡",
    },
  ];

  return (
    <section className="features">
      <h2>Our Features</h2>
      <h3>Discover some of the incredible Blockchain features that "Dvote" leverages to enhance Decentralised Vote.</h3>
      <hr />
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h2>{feature.title}</h2>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
