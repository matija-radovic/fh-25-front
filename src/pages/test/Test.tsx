import "./Test.scss";
import OrgTeam from "../../components/OrgTeam/OrgTeam";

/**
 * This component should be used to test your components, shared components or pages.
 * Inside of the `Test.scss` are predefined styles just delete the `/*` to apply them
 */

const orgTeams = [
  {
    coordinatorImage: "images/kordilog.jpg",
    coordinatorFirstName: "Filip",
    coordinatorLastName: "Lazarević",
    coordinatorRole: "Koordinator takmičenja",
    teamImage: "images/LOGISTIKA.jpg",
    teamName: "Tim Koordinatora",
  },
  {
    coordinatorImage: "images/PRKordi.jpg",
    coordinatorFirstName: "Mina",
    coordinatorLastName: "Vuković",
    coordinatorRole: "Tim za odnose sa kompanijama",
    teamImage: "images/PR.jpg",
    teamName: "Tim za odnose sa kompanijama",
  },
  {
    coordinatorImage: "images/kordilog.jpg",
    coordinatorFirstName: "Anastasija",
    coordinatorLastName: "Rus",
    coordinatorRole: "Tim za odnose s javnošću",
    teamImage: "images/LOGISTIKA.jpg",
    teamName: "Tim za odnose s javnošću",
  },
  {
    coordinatorImage: "images/PRKordi.jpg",
    coordinatorFirstName: "Matija",
    coordinatorLastName: "Vujić",
    coordinatorRole: "Tim za ljudske resurse",
    teamImage: "images/PR.jpg",
    teamName: "Tim za ljudske resurse",
  },
  {
    coordinatorImage: "images/kordilog.jpg",
    coordinatorFirstName: "Danica",
    coordinatorLastName: "Živković",
    coordinatorRole: "Tim za dizajn",
    teamImage: "images/LOGISTIKA.jpg",
    teamName: "Tim za dizajn",
  },
  {
    coordinatorImage: "images/PRKordi.jpg",
    coordinatorFirstName: "Emilija",
    coordinatorLastName: "Simić",
    coordinatorRole: "Tim za logistiku",
    teamImage: "images/PR.jpg",
    teamName: "Tim za logistiku",
  },
  {
    coordinatorImage: "images/kordilog.jpg",
    coordinatorFirstName: "Matija",
    coordinatorLastName: "Radović",
    coordinatorRole: "Tim za informacione tehnologije",
    teamImage: "images/LOGISTIKA.jpg",
    teamName: "Tim za informacione tehnologije",
  },
];
const Test = () => {
  return (
    <>
      {/* Put your component here */}
      <OrgTeam teams={orgTeams}></OrgTeam>
    </>
  );
};

export default Test;
