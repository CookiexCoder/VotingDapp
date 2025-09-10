import React from "react";
import "./LandingCss/WhatWeDoSection.css";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <h2>What We Do?</h2>
      <h3>Securing Democracy, One National Digital Voting</h3>
      <hr />
      <div className="cards">
        <div className="card">
          <h3>The Immutable Ballot Box</h3>
          <h4>Cryptographic Sealing</h4>
          <p>
            Each vote is not merely "recorded", it is converted into a unique
            digital fingerprint (a hash) that is cryptographically sealed.
            Thinks should be like this. Each new block is linked to the previous
            one using these same cryptographic hashes, creating an unbreakable
            chain.
          </p>
        </div>

        <div className="card">
          <h3>A Publicly Auditable Process</h3>
          <h4>End-to-End Auditability</h4>
          <p>
            This is a revolutionary shift from traditional elections. While your
            individual vote remains private, the act of casting it and its
            encrypted outcome are recorded on the public blockchain. Anyone in
            the world—a voter, journalist, or international observer—can
            download the entire blockchain ledger.
          </p>
        </div>

        <div className="card">
          <h3>Democracy Without Borders</h3>
          <h4>Borderless Participation</h4>
          <p>
            A voter no longer needs to travel to a specific polling station, or
            request a mail-in ballot. They can vote from their home computer or
            smartphone from any location with an internet connection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
