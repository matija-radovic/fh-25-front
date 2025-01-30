import React from "react";
import "./TeamCard.scss";
import trapezoid from "../../../assets/OrgTeam/trapezoid.svg";

interface TeamCardProps {
  team: {
    teamImage: string;
    teamName: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div>
      <div className="team-card">
        <img className="trapezoid" src={trapezoid} alt="Trapezoid" />
        <img src={team.teamImage} alt="Right" />
        <h1 className="team-name">{team.teamName}</h1>
      </div>
    </div>
  );
};

export default TeamCard;
