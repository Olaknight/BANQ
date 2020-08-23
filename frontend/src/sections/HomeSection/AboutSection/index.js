import React from "react";
import "./index.css";
import { SectionLayout, SubSectionLayout } from "../../../Layouts";
import { Button } from "antd";

const AboutSection = () => {
  return (
    <SectionLayout>
      <SubSectionLayout>
        <div id="about">
          <h2 className="about">About Us</h2>
        </div>
        <div>
          <h2 className="paragraph2">
            Decentralized transparent <br /> donations bank
          </h2>
        </div>
        <div>
          <Button type="primary" className="btn-learn" size="large">
            Learn More &rarr;
          </Button>
        </div>
      </SubSectionLayout>
      <SubSectionLayout>
        <div>
          <h2 className="h2-speech">
            Donations bank for generous contributions towards movements
          </h2>
        </div>
        <div>
          <p className="p-speech">
            With banq, non-governmental organizations, governmental
            organizations, philanthropic individuals, can make donations, track
            donations made and be sure it was properly utilized. All in a secure
            and transparent process.
          </p>
        </div>
        <div>
          <h3 class="lorem-title">Awotide Isaiah</h3>
          <p className="lead-title">Team Lead</p>
        </div>
        <div>
          <h3 className="text-name fashion">Isaiah</h3>
        </div>
      </SubSectionLayout>
    </SectionLayout>
  );
};

export default AboutSection;
