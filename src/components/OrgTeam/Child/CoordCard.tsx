import React from "react";
import "./CoordCard.scss";
import FHLogo from "../../../assets/OrgTeam/fhlogo.svg";
import Star from "../../../assets/OrgTeam/star.svg";
import Clouds from "../../../assets/OrgTeam/Clouds.svg";

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
    <div className="coord-card">
      <div className="coord-card-wrapper">
        <div className="left">
          <div className="left-upper">
            <span className="vertical-text">{coordinatorFirstName}</span>
            <img className="clouds" src={Clouds} alt="Clouds" />
          </div>
          <div className="center">
            <img src={coordinatorImage} alt="Coordinator" />
          </div>

          <div className="left-lower">
            <div className="name">
              <h1>{coordinatorFirstName}</h1>
              <h1>{coordinatorLastName}</h1>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="star-image" src={Star} alt="Star" />
          <p className="role">{coordinatorRole}</p>
          <img className="FHLogo-image" src={FHLogo} alt="FH Logo" />
        </div>
      </div>
    </div>
  );
};

export default CoordCard;
