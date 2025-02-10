import React, { useState, useEffect, useRef } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null); // Ref za dodatni wrapper

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.5, // 50% vidljivosti
      }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: number;
    if (isVisible) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teams.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isVisible, teams.length]);

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
    <div ref={wrapperRef}>
      {" "}
      {/* Dodatni wrapper sa ref */}
      <Section className="org-team-section" heading="ORGANIZACIONI TIM">
        <div className="org-team-slider">
          <Hexagon
            width={650}
            height={650}
            rotate={0}
            className="bottom-left"
          />
          <Hexagon
            width={163}
            height={163}
            rotate={0}
            className="bottom-right"
          />
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
            <button
              className="slider-left-arrow"
              onClick={goToPrevious}
            ></button>
            <button className="slider-right-arrow" onClick={goToNext}></button>
          </div>
        </div>
        <div className="mobile-org-team-slider">
          <HexagonMobile
            top="-20px"
            right="-120px"
            width="290px"
            height="310px"
          />
          <HexagonMobile
            bottom="0"
            left="-100px"
            width="290px"
            height="310px"
          />
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
              <button
                className="slider-right-arrow"
                onClick={goToNext}
              ></button>
            </div>

            <TeamCard team={{ teamImage, teamName }} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default OrgTeam;
