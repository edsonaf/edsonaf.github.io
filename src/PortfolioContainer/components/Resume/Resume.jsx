import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.scss";

import educationIcon from "./assets/education.svg";
import workHistoryIcon from "./assets/work-history.svg";
import programmingSkillsIcon from "./assets/programming-skills.svg";
import interestsIcon from "./assets/interests.svg";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div className="heading-date">
              {props.toDate}
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Work History", logoSrc: workHistoryIcon },
    { label: "Education", logoSrc: educationIcon },
    { label: "Programming Skills", logoSrc: programmingSkillsIcon },
    { label: "Interests", logoSrc: interestsIcon },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "C#", ratingPercentage: 95 },
    { skill: "React / Angular / Typescript", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 60 },
  ];

  const resumeDetails =
    [
      /* WORK EXPERIENCE */
      <div className="resume-screen-container" key="work-experience">
        <div className="experience-container">
          <ResumeHeading
            subHeading={"YANGA Sportswater, Breda"}
            heading={"External Software Developer"}
            fromDate={"2023"}
            toDate={"present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              .NET - ASP.NET - WinUI - C#; Angular - Typescript; SQL; Scrum - Agile; Azure DevOps; Git; JSON;
            </span>
            <br />
          </div>
        </div>

        <div className="experience-container">
          <ResumeHeading
            subHeading={"Canon Production Printing, Venlo"}
            heading={"External Software Developer"}
            fromDate={"2019"}
            toDate={"2023"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              .NET - ASP.NET - C#; Regex; Angular - Typescript; T4 scripts;
              Agile; Azure DevOps; Git; TDD; BDD; Gherkin; Specflow; JSON; XML;
            </span>
            <br />
          </div>
        </div>
        <div className="experience-container">
          <ResumeHeading
            subHeading={"Ellips, Eindhoven"}
            heading={"Full Stack .NET Developer"}
            fromDate={"2015"}
            toDate={"2019"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              .NET - ASP.NET - WPF - MVVM - C#; T4 scripts; Scrum - Agile; SVN - TBD - Git; TDD;
              BDD; Gherkin; Specflow; JSON;
            </span>
            <br />
          </div>
        </div>
      </div>,

      /* EDUCATION */
      <div className="resume-screen-container" key="education">
        <ResumeHeading
          heading={"Introduction to Artificial Inteligence"}
          subHeading={"LinkedIn"}
          toDate={"November 2023"} />

        <ResumeHeading
          heading={"Sales Training"}
          subHeading={"Exellior B.V."}
          toDate={"February 2021"} />

        <ResumeHeading
          heading={"Bachelor of Science Information Technology"}
          subHeading={"Fontys University of Applied Sciences, Eindhoven"}
          fromDate={"2011"}
          toDate={"2015"}
        />

        <ResumeHeading
          heading={"High School"}
          subHeading={"Maria Immaculate Lyceum, Willemstad"}
          fromDate={"2004"}
          toDate={"2010"}
        />
      </div>,

      /* PROGRAMMING SKILLS */
      <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {programmingSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span className="skill">{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

      /* Interests */
      <div className="resume-screen-container" key="interests">
        <ResumeHeading
          heading="Reading"
          description="Crime; Mystery; Philosophy; Science Fiction"
        />
        <ResumeHeading
          heading="Gaming"
          description="Action; Adventure; MOBA; RPG;"
        />
        <ResumeHeading heading="Music" description="" />
        <ResumeHeading heading="Programming" description="" />
      </div>,
    ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img className="bullet-logo" src={bullet.logoSrc} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal bio details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
