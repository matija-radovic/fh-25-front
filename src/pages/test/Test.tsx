
import OrgTeam2 from "../../components/OrgTeam/OrgTeam";
import { orgTeams } from "../../utils/constants/orgteam/teams";
import "./Test.scss";

/**
 * This component should be used to test your components, shared components or pages.
 * Inside of the `Test.scss` are predefined styles just delete the `/*` to apply them
 */

const Test = () => {
  return (
    <>
      <OrgTeam2 teams={orgTeams} />
      
    </>
  );
};

export default Test;
