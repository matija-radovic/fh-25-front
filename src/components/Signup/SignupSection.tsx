import { Link } from "react-router-dom";
import TextBox from "../-shared/TextBox/TextBox";
import "./SignupSection.scss";
import hexagon from "../../assets/hexagon.svg";
import { Section } from "../"



const SignupSection = () => {
  return (
    <Section className="signup-section">
      <TextBox className="text-box-w-650 signup-text-box" variant="white">
        <img className="hexagon hex1" src={hexagon} alt="" />
        <img className="hexagon hex2" src={hexagon} alt="" />
        <img className="hexagon hex3" src={hexagon} alt="" />
        <img className="hexagon hex4" src={hexagon} alt="" />
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
