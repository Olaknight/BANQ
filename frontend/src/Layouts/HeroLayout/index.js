import React from "react";
import "./index.css";
import { HeaderBar } from "../../components";

const HeroLayout = ({ children }) => {
  const { banner } = styles;
  return (
    <div style={banner} className="home_layout">
      <HeaderBar />
      {children}
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: "transparent",
    backgroundImage: 'url("/images/banner.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
};

export default HeroLayout;
