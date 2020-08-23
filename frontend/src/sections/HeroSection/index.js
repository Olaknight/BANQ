import React from "react";
import "./index.css";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div>
        <h1 className="heading">Decentralized Transparent Donations Banks</h1>
      </div>
      <div>
        <p className="paragraph">
          we leverage on blockchain to ensure security and transparency in
          donations banking
        </p>
      </div>
      <div>
        <Button type="link">
          <div className="btn-started">
            <p className="btn-white left">
              Get Started <span className="ascii"> &rarr;</span>
            </p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
