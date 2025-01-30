import React from "react";
import "./TeamCard.scss";

interface TeamCardProps {
  team: {
    teamImage: string;
    teamName: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <div>
      <div className="right-card">
        <img src={team.teamImage} alt="Right" />
      </div>
    </div>
  );
};

export default TeamCard;
