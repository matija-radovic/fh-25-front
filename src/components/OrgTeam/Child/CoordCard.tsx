import React from "react";
import "./CoordCard.scss";
import FHLogo from "../../../assets/OrgTeam/fhlogo.svg";
import Star from "../../../assets/OrgTeam/star.svg";

interface CoordCardProps {
  coordinator: {
    coordinatorImage: string;
    coordinatorFirstName: string;
    coordinatorLastName: string;
    coordinatorRole: string;
  };
}

const CoordCard: React.FC<CoordCardProps> = ({ coordinator }) => {
  const {
    coordinatorImage,
    coordinatorFirstName,
    coordinatorLastName,
    coordinatorRole,
  } = coordinator;

  return (
    <div className="left-card">
      <div className="left">
        <div className="background"></div>
        <span className="vertical-text">{coordinatorFirstName}</span>
        <div className="center">
          <img src={coordinatorImage} alt="Coordinator" />
          <div className="name">
            <h2>{coordinatorFirstName}</h2>
            <h2>{coordinatorLastName}</h2>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="star-image" src={Star} alt="Star" />
        <p className="role">{coordinatorRole}</p>
        <img className="FHLogo-image" src={FHLogo} alt="FH Logo" />
      </div>
    </div>
  );
};

export default CoordCard;
