import React, { useState, useEffect } from "react";
import "./OrgTeam.scss";
import Section from "../-shared/Section/Section";

import CoordCard from "./Child/CoordCard";
import TeamCard from "./Child/TeamCard";
import Hexagon from "./Child/Hexagon";
import HexagonMobile from "./Child/HexagonMobile";

interface OrgTeamProps {
  teams: {
    coordinatorImage: string;
    coordinatorFirstName: string;
    coordinatorLastName: string;
    coordinatorRole: string;
    teamImage: string;
    teamName: string;
  }[];
}

const OrgTeam: React.FC<OrgTeamProps> = ({ teams }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval: number = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const {
    coordinatorImage,
    coordinatorFirstName,
    coordinatorLastName,
    coordinatorRole,
    teamImage,
    teamName,
  } = teams[currentIndex];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teams.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section className="org-team-section" heading="ORGANIZACIONI TIM">
      <div className="org-team-slider">
        <Hexagon width={650} height={650} rotate={0} className="bottom-left" />
        <Hexagon width={163} height={163} rotate={0} className="bottom-right" />
        <div className="org-team-cards">
          <CoordCard
            coordinator={{
              coordinatorImage,
              coordinatorFirstName,
              coordinatorLastName,
              coordinatorRole,
            }}
          />
          <TeamCard team={{ teamImage, teamName }} />
        </div>
        <div className="slider-controls">
          <button className="slider-left-arrow" onClick={goToPrevious}></button>
          <button className="slider-right-arrow" onClick={goToNext}></button>
        </div>
      </div>
      <div className="mobile-org-team-slider">
        <div className="org-team-cards">
          <div className="upper-section">
            <button
              className="slider-left-arrow"
              onClick={goToPrevious}
            ></button>
            <CoordCard
              coordinator={{
                coordinatorImage,
                coordinatorFirstName,
                coordinatorLastName,
                coordinatorRole,
              }}
            />
            <button className="slider-right-arrow" onClick={goToNext}></button>
          </div>

          <TeamCard team={{ teamImage, teamName }} />
        </div>
      </div>
    </Section>
  );
};

export default OrgTeam;
