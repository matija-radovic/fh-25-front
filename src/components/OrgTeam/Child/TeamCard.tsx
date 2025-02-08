import React, { useRef } from "react";
import "./TeamCard.scss";
import trapezoid from "../../../assets/OrgTeam/trapezoid.svg";

interface TeamCardProps {
  team: {
    teamImage: string;
    teamName: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X pozicija miša unutar kartice
    const y = e.clientY - rect.top; // Y pozicija miša unutar kartice
    const h = rect.height;
    const w = rect.width;

    // RELATIVNA POZICIJA MIŠA U ODNOSU NA CENTAR
    const px = Math.abs(Math.floor((100 / w) * x) - 100);
    const py = Math.abs(Math.floor((100 / h) * y) - 100);
    const pa = 50 - px + (50 - py);

    // OVO JE ZA GRADIENT I SPARKLE EFEKAT
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const pxSpark = 50 + (px - 50) / 7;
    const pySpark = 50 + (py - 50) / 7;
    const opacity = 20 + Math.abs(pa) * 1.5;

    // OVA DVA MENJAŠ ZA JAČINU ROTACIJE
    const ty = ((tp - 50) / 2) * -1;
    const tx = ((lp - 50) / 1.5) * 0.5;

    card.style.setProperty("--gradient-pos", `${lp}% ${tp}%`);
    card.style.setProperty("--sparkle-pos", `${pxSpark}% ${pySpark}%`);
    card.style.setProperty("--opacity", `${opacity / 100}`);
    card.style.transform = `rotateX(${ty}deg) rotateY(${tx}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
    card.style.setProperty("--gradient-pos", "50% 50%");
    card.style.setProperty("--sparkle-pos", "50% 50%");
    card.style.setProperty("--opacity", "0.5");
  };

  return (
    <div
      className="team-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img className="trapezoid" src={trapezoid} alt="Trapezoid" />
      <img src={team.teamImage} alt="Team" className="team-image" />
      <h1 className="team-name">{team.teamName}</h1>
    </div>
  );
};

export default TeamCard;
