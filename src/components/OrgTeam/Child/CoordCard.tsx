import React, { useRef } from "react";
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

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X pozicija miša unutar kartice
    const y = e.clientY - rect.top; // Y pozicija miša unutar kartice
    const h = rect.height;
    const w = rect.width;

    // Izračunaj relativnu poziciju miša u odnosu na centar kartice
    const px = Math.abs(Math.floor((100 / w) * x) - 100);
    const py = Math.abs(Math.floor((100 / h) * y) - 100);
    const pa = 50 - px + (50 - py);

    // Izračunaj poziciju za gradient i sparkle efekat
    const lp = 50 + (px - 50) / 1.5;
    const tp = 50 + (py - 50) / 1.5;
    const pxSpark = 50 + (px - 50) / 7;
    const pySpark = 50 + (py - 50) / 7;
    const opacity = 20 + Math.abs(pa) * 1.5;

    // Povećani faktori rotacije
    const ty = ((tp - 50) / 2) * -3; // Povećano sa -1 na -3
    const tx = ((lp - 50) / 1.5) * 1.5; // Povećano sa 0.5 na 1.5

    // Dinamički ažuriraj CSS promenljive
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
      className="coord-card eevee animated"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="coord-card-wrapper">
        <div className="left">
          <div className="left-upper">
            <span className="vertical-text">{coordinatorFirstName}</span>
            <img className="clouds" src={Clouds} alt="Clouds" />
          </div>
          <img
            className="center-image"
            src={coordinatorImage}
            alt="Coordinator"
          />

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
