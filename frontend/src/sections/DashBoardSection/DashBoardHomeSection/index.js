import React from "react";
import { Statistic } from "antd";
import "./index.css";
const DashBoardHomeSection = () => {
  const { styledValue } = styles;
  return (
    <div className="dashboard__home">
      <div className="balance__dash">
        <div className="box__dash">
          <Statistic
            title="Available balance"
            value={`$0`}
            valueStyle={styledValue}
          />
        </div>
        <div className="box___dash">
          <Statistic title="Tokens" value={0} valueStyle={styledValue} />
        </div>
      </div>
      <div className="card__dash">
        <h1 className="quick__link">Quick Links</h1>
        <div className="card__container">
          <div className="card__box"></div>
          <div className="card__box blue"></div>
          <div className="card__box"></div>
        </div>
      </div>

      <div className="report__dash">
        <h1 className="quick__link">Transaction Summary</h1>
        <div className="reporting__dash">
          <div className="activity__dash"></div>
          <div className="status__dash"></div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  styledValue: {
    color: "#112A6B",
    textAlign: "left",
    font: "Bold 28px Neurial Grotesk",
    letterSpacing: "0px",
    opacity: 1,
  },
};

export default DashBoardHomeSection;
