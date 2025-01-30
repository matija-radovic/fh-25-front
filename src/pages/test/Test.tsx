import "./Test.scss";
import OrgTeam from "../../components/OrgTeam/OrgTeam";

/**
 * This component should be used to test your components, shared components or pages.
 * Inside of the `Test.scss` are predefined styles just delete the `/*` to apply them
 */

const orgTeams = [
  {
    coordinatorImage: "images/kordilog.jpg",
    coordinatorFirstName: "Aleksandra",
    coordinatorLastName: "Đorđević",
    coordinatorRole: "Koordinator logistike",
    teamImage: "images/LOGISTIKA.jpg",
    teamName: "Tim za logistiku",
  },
  {
    coordinatorImage: "images/PRKordi.jpg",
    coordinatorFirstName: "Miloš",
    coordinatorLastName: " Mijatović",
    coordinatorRole: "Koordinator PR-a",
    teamImage: "images/PR.jpg",
    teamName: "Tim za PR",
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
