import { Link } from "react-router-dom";
import TextBox from "../-shared/TextBox/TextBox";
import "./SignupSection.scss";
import { Section } from "../"
import Hexagon from "../-shared/Hexagon/Hexagon";

const SignupSection = () => {
  return (
    <Section className="signup-section">
      <div className="hexagon-group one">
        <Hexagon className="medium" />
        <Hexagon className="small top-right" />
      </div>
      <div className="hexagon-group two">
        <Hexagon className="medium" />
        <Hexagon className="small bottom-left" />
      </div>
      <TextBox className="text-box-w-650 signup-text-box" variant="white">
        <h3>ČEKAMO TVOJU PRIJAVU!</h3>
        <p>
          Prijavi se i budi deo... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas interdum nisi, mollis varius nisi accumsan vitae. Aliquam at velit vel nunc ullamcorper dictum.
        </p>
        <Link to="/prijava" className="signup-button">
          PRIJAVI SE
        </Link>
        {/*<a href="#" className="signup-button">PRIJAVI SE</a>*/}
      </TextBox>
    </Section>
  );
};

export default SignupSection;
