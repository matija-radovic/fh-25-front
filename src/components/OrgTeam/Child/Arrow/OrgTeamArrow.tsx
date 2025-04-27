import { useEffect, useState } from "react";
import "./OrgTeamArrow.scss";

const OrgTeamArrow = ({
  color = "#24BDDE",
  flippedX = false,
  flippedY = false,
  className = "",
}) => {
  const [colour, setColour] = useState(color);
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (color === "purple") {
      setAnimation("animation-purple");
    } else {
      setAnimation("animation-blue");
    }
    setColour(color);
  }, [color]);

  return (
    <div className={`arrow-container ${className}`}>
      <svg
        className={`big-arrow  ${flippedX == true ? "flippedX" : ""}  ${
          flippedY == true ? "flippedY" : ""
        } `}
        width="597"
        height="330"
        viewBox="0 0 597 330"
        stroke={colour}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M350 247L329.5 226.5H370.5L350 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 206L370.5 226.5H329.5L350 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 206L288.5 185.5H329.5L309 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 165L329.5 185.5H288.5L309 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 247L288.5 226.5H329.5L309 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 206L329.5 226.5H288.5L309 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 288L288.5 267.5H329.5L309 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 247L329.5 267.5H288.5L309 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 329L288.5 308.5H329.5L309 329Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 288L329.5 308.5H288.5L309 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 206L329.5 185.5H370.5L350 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 165L370.5 185.5H329.5L350 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 288L329.5 267.5H370.5L350 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-1`}
          d="M350 247L370.5 267.5H329.5L350 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 329L329.5 308.5H370.5L350 329Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-1`}
          d="M350 288L370.5 308.5H329.5L350 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 206L247.5 185.5H288.5L268 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 165L288.5 185.5H247.5L268 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-1`}
          d="M268 247L247.5 226.5H288.5L268 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 206L288.5 226.5H247.5L268 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 288L247.5 267.5H288.5L268 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 247L288.5 267.5H247.5L268 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-1`}
          d="M268 329L247.5 308.5H288.5L268 329Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 288L288.5 308.5H247.5L268 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 206L206.5 185.5H247.5L227 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 165L247.5 185.5H206.5L227 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 247L206.5 226.5H247.5L227 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 206L247.5 226.5H206.5L227 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 288L206.5 267.5H247.5L227 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 247L247.5 267.5H206.5L227 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 329L206.5 308.5H247.5L227 329Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 288L247.5 308.5H206.5L227 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 206L165.5 185.5H206.5L186 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 165L206.5 185.5H165.5L186 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 247L165.5 226.5H206.5L186 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 206L206.5 226.5H165.5L186 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 288L165.5 267.5H206.5L186 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 247L206.5 267.5H165.5L186 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 329L165.5 308.5H206.5L186 329Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 288L206.5 308.5H165.5L186 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 267.5L145 247H186L165.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 226.5L186 247H145L165.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 267.5L186 288H145L165.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 226.5L186 206H227L206.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 185.5L227 206H186L206.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 267.5L186 247H227L206.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 226.5L227 247H186L206.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 308.5L186 288H227L206.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 267.5L227 288H186L206.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 226.5L227 206H268L247.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 185.5L268 206H227L247.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 267.5L227 247H268L247.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 226.5L268 247H227L247.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 308.5L227 288H268L247.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 267.5L268 288H227L247.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 226.5L268 206H309L288.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 185.5L309 206H268L288.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 267.5L268 247H309L288.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 226.5L309 247H268L288.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 308.5L268 288H309L288.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 267.5L309 288H268L288.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 226.5L309 206H350L329.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 185.5L350 206H309L329.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 267.5L309 247H350L329.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 226.5L350 247H309L329.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 308.5L309 288H350L329.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 267.5L350 288H309L329.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M411.5 267.5L391 247H432L411.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 226.5L432 247H391L411.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 288L370.5 267.5H411.5L391 288Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 247L411.5 267.5H370.5L391 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 247L370.5 226.5H411.5L391 247Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 206L411.5 226.5H370.5L391 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 267.5L350 247H391L370.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 226.5L391 247H350L370.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 226.5L350 206H391L370.5 226.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 185.5L391 206H350L370.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 308.5L350 288H391L370.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 267.5L391 288H350L370.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 308.5L350 329H309L329.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 308.5L309 329H268L288.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 308.5L268 329H227L247.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 308.5L227 329H186L206.5 308.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 185.5L186 165H227L206.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 185.5L227 165H268L247.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 185.5L268 165H309L288.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M329.5 185.5L309 165H350L329.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M83.5 267.5L63 247H104L83.5 267.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 185.5L145 206H186L165.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M83.5 185.5L63 206H104L83.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M63 206L42.5 185.5H83.5L63 206Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 42L452.5 21.5H493.5L473 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M473 1L493.5 21.5H452.5L473 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 83L452.5 62.5H493.5L473 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M473 42L493.5 62.5H452.5L473 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 124L452.5 103.5H493.5L473 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 83L493.5 103.5H452.5L473 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 165L452.5 144.5H493.5L473 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M473 124L493.5 144.5H452.5L473 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 42L493.5 21.5H534.5L514 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 1L534.5 21.5H493.5L514 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 124L493.5 103.5H534.5L514 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 83L534.5 103.5H493.5L514 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 165L493.5 144.5H534.5L514 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M514 124L534.5 144.5H493.5L514 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 83L493.5 62.5H534.5L514 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M514 42L534.5 62.5H493.5L514 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 42L411.5 21.5H452.5L432 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 1L452.5 21.5H411.5L432 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 83L411.5 62.5H452.5L432 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 42L452.5 62.5H411.5L432 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-3`}
          d="M432 124L411.5 103.5H452.5L432 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 83L452.5 103.5H411.5L432 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 165L411.5 144.5H452.5L432 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M432 124L452.5 144.5H411.5L432 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 42L370.5 21.5H411.5L391 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 1L411.5 21.5H370.5L391 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-3`}
          d="M391 83L370.5 62.5H411.5L391 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 42L411.5 62.5H370.5L391 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 124L370.5 103.5H411.5L391 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 83L411.5 103.5H370.5L391 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 165L370.5 144.5H411.5L391 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M391 124L411.5 144.5H370.5L391 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 42L329.5 21.5H370.5L350 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-3`}
          d="M350 1L370.5 21.5H329.5L350 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 83L329.5 62.5H370.5L350 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 42L370.5 62.5H329.5L350 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 124L329.5 103.5H370.5L350 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 83L370.5 103.5H329.5L350 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M350 165L329.5 144.5H370.5L350 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-3`}
          d="M350 124L370.5 144.5H329.5L350 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 42L288.5 21.5H329.5L309 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 1L329.5 21.5H288.5L309 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 83L288.5 62.5H329.5L309 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-3`}
          d="M309 42L329.5 62.5H288.5L309 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 124L288.5 103.5H329.5L309 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 83L329.5 103.5H288.5L309 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 165L288.5 144.5H329.5L309 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M309 124L329.5 144.5H288.5L309 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 42L247.5 21.5H288.5L268 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 1L288.5 21.5H247.5L268 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 83L247.5 62.5H288.5L268 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 42L288.5 62.5H247.5L268 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 124L247.5 103.5H288.5L268 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 83L288.5 103.5H247.5L268 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 165L247.5 144.5H288.5L268 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M268 124L288.5 144.5H247.5L268 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 42L206.5 21.5H247.5L227 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 1L247.5 21.5H206.5L227 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 83L206.5 62.5H247.5L227 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 42L247.5 62.5H206.5L227 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 124L206.5 103.5H247.5L227 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 83L247.5 103.5H206.5L227 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 165L206.5 144.5H247.5L227 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M227 124L247.5 144.5H206.5L227 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 42L165.5 21.5H206.5L186 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 1L206.5 21.5H165.5L186 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 83L165.5 62.5H206.5L186 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 42L206.5 62.5H165.5L186 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 124L165.5 103.5H206.5L186 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 83L206.5 103.5H165.5L186 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 165L165.5 144.5H206.5L186 165Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M186 124L206.5 144.5H165.5L186 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M145 83L124.5 62.5H165.5L145 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M145 42L165.5 62.5H124.5L145 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 62.5L145 42H186L165.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 21.5L186 42H145L165.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 103.5L145 83H186L165.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 62.5L186 83H145L165.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 144.5L145 124H186L165.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 103.5L186 124H145L165.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 62.5L186 42H227L206.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 21.5L227 42H186L206.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 103.5L186 83H227L206.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 62.5L227 83H186L206.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 144.5L186 124H227L206.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 103.5L227 124H186L206.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 62.5L186 42H227L206.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 21.5L227 42H186L206.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 103.5L186 83H227L206.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 62.5L227 83H186L206.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 144.5L186 124H227L206.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 103.5L227 124H186L206.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 62.5L227 42H268L247.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 21.5L268 42H227L247.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 103.5L227 83H268L247.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 62.5L268 83H227L247.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 144.5L227 124H268L247.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 103.5L268 124H227L247.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 62.5L268 42H309L288.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 21.5L309 42H268L288.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 103.5L268 83H309L288.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 62.5L309 83H268L288.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 144.5L268 124H309L288.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 103.5L309 124H268L288.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 62.5L309 42H350L329.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 21.5L350 42H309L329.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 103.5L309 83H350L329.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 62.5L350 83H309L329.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 144.5L309 124H350L329.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 103.5L350 124H309L329.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 62.5L350 42H391L370.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 21.5L391 42H350L370.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 103.5L350 83H391L370.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 62.5L391 83H350L370.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 144.5L350 124H391L370.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 103.5L391 124H350L370.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 62.5L391 42H432L411.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 21.5L432 42H391L411.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 103.5L391 83H432L411.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 62.5L432 83H391L411.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 144.5L391 124H432L411.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 103.5L432 124H391L411.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 62.5L432 42H473L452.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 21.5L473 42H432L452.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 103.5L432 83H473L452.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 62.5L473 83H432L452.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 144.5L432 124H473L452.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 103.5L473 124H432L452.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 62.5L473 42H514L493.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 21.5L514 42H473L493.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 103.5L473 83H514L493.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 62.5L514 83H473L493.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 144.5L473 124H514L493.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 103.5L514 124H473L493.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M575.5 103.5L555 83H596L575.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className={` theChosenOne ${animation}-2`}
          d="M575.5 62.5L596 83H555L575.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M555 124L534.5 103.5H575.5L555 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M555 83L575.5 103.5H534.5L555 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M555 83L534.5 62.5H575.5L555 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M555 42L575.5 62.5H534.5L555 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 103.5L514 83H555L534.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 62.5L555 83H514L534.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 62.5L514 42H555L534.5 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 21.5L555 42H514L534.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 144.5L514 124H555L534.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M534.5 103.5L555 124H514L534.5 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 144.5L473 165H432L452.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 144.5L514 165H473L493.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 144.5L432 165H391L411.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 144.5L391 165H350L370.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 144.5L350 165H309L329.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 144.5L309 165H268L288.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 144.5L268 165H227L247.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 144.5L268 165H227L247.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 144.5L227 165H186L206.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M124.5 144.5L145 165H104L124.5 144.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M124.5 185.5L145 165H104L124.5 185.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M165.5 21.5L145 1H186L165.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M206.5 21.5L186 1H227L206.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M247.5 21.5L227 1H268L247.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M288.5 21.5L268 1H309L288.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M329.5 21.5L309 1H350L329.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M370.5 21.5L350 1H391L370.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M411.5 21.5L391 1H432L411.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M452.5 21.5L432 1H473L452.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M493.5 21.5L473 1H514L493.5 21.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.5 124L83 103.5H124L103.5 124Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M103.5 83L124 103.5H83L103.5 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M83 103.5L62.5 83H103.5L83 103.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M42 62.5L21.5 42H62.5L42 62.5Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.5 83L1 103.5H42L21.5 83Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M104 42L83.5 21.5H124.5L104 42Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M104 1L124.5 21.5H83.5L104 1Z"
          stroke={colour}
          stroke-width="1.53"
          stroke-miterlimit="5.01585"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default OrgTeamArrow;
