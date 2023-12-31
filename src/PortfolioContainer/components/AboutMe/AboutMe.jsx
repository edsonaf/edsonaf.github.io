import React, { useEffect } from "react";
import { Tooltip } from "@mui/material";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.scss";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const years = new Date().getFullYear() - 2015;

  const SCREEN_CONSTANTS = {
    description:
      years + "+ years experienced .NET Developer; from Windows Forms to Windows Presentation Foundation; \n" +
      "ASP.Net backend + Angular frontend in the day; Currently excited about Artificial Intelligence. Constantly working on improving the basics",

    highlights: {
      heading: "A Few Highlights:",
      bullets: [
        "Full stack windows, web and mobile development",
        "Interactive and rich user interfaces as per design",
        "Building REST API",
        "Pirate of the Caribbean ☠️",
      ],
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Get to know me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <Tooltip title="Currently not available" className="btn">
                <button
                  onClick={() => {
                    console.log("I am currently unavailable unless we are talking about a minimum of $10000 per day/month (it depends)");
                  }}
                  className="primary-btn"
                >
                  Hire me
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
