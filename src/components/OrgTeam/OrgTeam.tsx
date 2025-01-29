import React, { useState } from "react";
import "./OrgTeam.scss";
import Section from "../-shared/Section/Section";
import FHLogo from "../../assets/OrgTeam/fhlogo.svg";
import Star from "../../assets/OrgTeam/star.svg";

const OrgTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      leftImage: "path/to/left-image-1.jpg",
      rightImage: "path/to/right-image-1.jpg",
      name: "FILIP",
      role: "Koordinator takmičenja",
    },
    {
      leftImage: "path/to/left-image-2.jpg",
      rightImage: "path/to/right-image-2.jpg",
      name: "LAZANAVIC",
      role: "Tim koordinator",
    },
    // Dodajte više članova po potrebi
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section heading="ORGANIZACIONI TIM">
      <div className="org-team-slider">
        <div className="org-team-slider-content">
          <div className="org-team-cards">
            <div className="left-card">
              <div className="left">
                <div className="background"></div>
                <span className="vertical-text">Filip</span>
                <div className="center">
                  <img src={teamMembers[currentIndex].leftImage} alt="Left" />
                  <div className="name">
                    <h2>Filip</h2>
                    <h2>Lazarević</h2>
                  </div>
                </div>
              </div>
              <div className="right">
                <img className="star-image" src={Star} alt="Star" />
                <p className="role">Koordinator takmičenja</p>
                <img className="FHLogo-image" src={FHLogo} alt="FH Logo" />
              </div>
            </div>
            <div className="right-card">
              <img src={teamMembers[currentIndex].rightImage} alt="Right" />
            </div>
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
