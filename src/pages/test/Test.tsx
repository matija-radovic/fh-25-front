import "./Test.scss";
import OrgTeam from "../../components/OrgTeam/OrgTeam";

/**
 * This component should be used to test your components, shared components or pages.
 * Inside of the `Test.scss` are predefined styles just delete the `/*` to apply them
 */

const orgTeams = [
  {
    coordinatorImage: "images/FILIP_LAZAREVIC.png",
    coordinatorFirstName: "Filip",
    coordinatorLastName: "Lazarević",
    coordinatorRole: "Koordinator takmičenja",
    teamImage: "images/CORE_TIM.jpg",
    teamName: "Tim Koordinatora",
  },
  {
    coordinatorImage: "images/MINA_VUKOVIC.png",
    coordinatorFirstName: "Mina",
    coordinatorLastName: "Vuković",
    coordinatorRole: "Koordinator tima za odnose sa kompanijama",
    teamImage: "images/CR_TIM.jpg",
    teamName: "Tim za odnose sa kompanijama",
  },
  {
    coordinatorImage: "images/ANASTASIJA_RUS.png",
    coordinatorFirstName: "Anastasija",
    coordinatorLastName: "Rus",
    coordinatorRole: "Koordinator tima za odnose s javnošću",
    teamImage: "images/PR_TIM.png",
    teamName: "Tim za odnose s javnošću",
  },
  {
    coordinatorImage: "images/MATIJA_VUJIC.png",
    coordinatorFirstName: "Matija",
    coordinatorLastName: "Vujić",
    coordinatorRole: "Koordinator tima za ljudske resurse",
    teamImage: "images/HR_TIM.jpg",
    teamName: "Tim za ljudske resurse",
  },
  {
    coordinatorImage: "images/DANICA_ZIVKOVIC.png",
    coordinatorFirstName: "Danica",
    coordinatorLastName: "Živković",
    coordinatorRole: "Koordinator tima za dizajn",
    teamImage: "images/DIZAJN_TIM.jpg",
    teamName: "Tim za dizajn",
  },
  {
    coordinatorImage: "images/EMILIJA_SIMIC.png",
    coordinatorFirstName: "Emilija",
    coordinatorLastName: "Simić",
    coordinatorRole: "Koordinator tima za logistiku",
    teamImage: "images/LOGISTIKA_TIM.jpg",
    teamName: "Tim za logistiku",
  },
  {
    coordinatorImage: "images/MATIJA_RADOVIC.png",
    coordinatorFirstName: "Matija",
    coordinatorLastName: "Radović",
    coordinatorRole: "Koordinator tima za informacione tehnologije",
    teamImage: "images/IT_TIM.jpg",
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
