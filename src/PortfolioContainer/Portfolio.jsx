import React from "react";
import { PORTFOLIO_SCREENS } from "./PortfolioPages";
import "./Portfolio.scss";

export default function PortfolioContainer() {
  window.dataLayer.push({
    event: 'pageview'
  });

  const mapAllScreens = () => {
    return PORTFOLIO_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : (
        <div key={screen.screen_name}></div>
      )
    );
  };

  return <div className="portfolio-container">
    {mapAllScreens()}
    </div>;
}
