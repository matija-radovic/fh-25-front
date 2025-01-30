import React, { useState, useEffect } from "react";
import "./OrgTeam.scss";
import Section from "../-shared/Section/Section";

import CoordCard from "./Child/CoordCard";
import TeamCard from "./Child/TeamCard";

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
    <Section heading="ORGANIZACIONI TIM">
      <div className="org-team-slider">
        <div className="org-team-slider-content">
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
        </div>
        <div className="slider-controls">
          <button onClick={goToPrevious}>&lt;</button>
          <button onClick={goToNext}>&gt;</button>
        </div>
      </div>
    </Section>
  );
};

export default OrgTeam;
