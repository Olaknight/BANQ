import React from "react";
import "./index.css";
import { SectionLayout, SubSectionLayout } from "../../../Layouts";

const DetialSection = () => {
  return (
    <SectionLayout classname="box__content">
      <SubSectionLayout>
        <div className="stack">
          <div className="user ">
            <img src="./images/user.png" alt="" className="image__box" />
          </div>
          <div className="card ">
            <img src="./images/card.png" alt="" className="image__box" />
          </div>
        </div>
      </SubSectionLayout>

      <SubSectionLayout>
        <div>
          <h2 className="heading_head">We leverage on Blockchain technology</h2>
        </div>
        <div>
          <p className="paragraph__details ">
            Banq is a block chain based donations bank which aims to ensure
            transparency in the non-for profit industry and beyond.
          </p>
        </div>
        <div>
          <h2 className="heading__details ">Our mission</h2>
        </div>
        <div>
          <p className="paragraph__details ">
            We are on a mission to make donations available to every cause while
            ensuring accountability, openness and security at the sides of all
            parties involved
          </p>
        </div>
        <div>
          <h2 className="heading__details ">Our vision</h2>
        </div>
        <div>
          <p className="paragraph__details ">
            To create an open, decentralized and trust based donations banking
            system
          </p>
        </div>
      </SubSectionLayout>
    </SectionLayout>
  );
};

export default DetialSection;
