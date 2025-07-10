import { useState } from "react";
import { expiriences } from "@/utils/constants/expiriences/expiriences"
import Section from "../-shared/Section/Section"
import Slider from "../-shared/Slider/Slider"
import TextBox from "../-shared/TextBox/TextBox";
import './Expiriences.scss'
import Hexagon from "../-shared/Hexagon/Hexagon";

const imagesonly = expiriences.map(v => v.image);
const INITIAL_INDEX = 0;

// TODO: implement swipe cause design is weird and buttons are so small....
const Expiriences = () => {
    const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

    return (
        <Section className="expiriences" heading="ISKUSTVA" id="iskustva">
            <div className="expiriences-wrapper">
                <Slider values={imagesonly} initial={INITIAL_INDEX} onChange={setCurrentIndex} />
                <TextBox>
                    <Hexagon className="small hex1" />
                    <div className="hexagon-group">
                        <Hexagon className="small" />
                        <Hexagon className="x-small speedy bottom-right" />
                    </div>
                    <h2>{expiriences[currentIndex].name}</h2>
                    <div className="expiriences-content">
                        <img src={expiriences[currentIndex].image} alt={expiriences[currentIndex].name} />
                        <p>{expiriences[currentIndex].description}</p>
                    </div>
                </TextBox>
            </div>
        </Section>
    )
}

export default Expiriences