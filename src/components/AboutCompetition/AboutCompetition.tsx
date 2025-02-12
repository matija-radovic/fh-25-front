import TextBox from "../-shared/TextBox/TextBox";
import './AboutCompetition.scss';

const AboutCompetition = () => {
    return (
    <>
        <div className="heksagoni">
            <svg width="1515" height="2109" viewBox="0 0 1515 2109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path d="M295.332 1449.26L632.128 1447.75L799.216 1740.18L629.503 2034.13L292.707 2035.65L125.619 1743.22L295.332 1449.26Z" stroke="#24BDDE" />
                </g>
                <g>
                    <path d="M241.603 1350.32L310.226 1350.01L344.271 1409.6L309.688 1469.5L241.065 1469.8L207.02 1410.22L241.603 1350.32Z" stroke="#24BDDE" />
                </g>
                <g>
                    <path d="M851.945 744.775L1213.6 743.15L1393.03 1057.17L1210.78 1372.82L849.127 1374.44L669.705 1060.42L851.945 744.775Z" stroke="#24BDDE" />
                </g>
                <g>
                    <path d="M294.332 75.2643L631.128 73.7513L798.216 366.182L628.503 660.133L291.707 661.646L124.619 369.215L294.332 75.2643Z" stroke="#24BDDE" />
                </g>
                <g>
                    <path d="M236.603 635.321L305.226 635.013L339.271 694.596L304.688 754.496L236.065 754.804L202.02 695.22L236.603 635.321Z" stroke="#24BDDE" />
                </g>
                <g>
                    <path d="M1196.86 1350.32L1265.49 1350.01L1299.53 1409.6L1264.95 1469.5L1196.32 1469.8L1162.28 1410.22L1196.86 1350.32Z" stroke="#24BDDE" />
                </g>
            </svg>
        </div>
            

        <div className="about-competition">
            <div className="comp about-hackathon">
                <div className="about-hachathon-text">
                    
                    <h2>O HAKATONU</h2>
                    <TextBox className="text-box-about-competition txt1">   
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas interdum nisi, mollis varius nisi accumsan vitae. Aliquam at velit vel nunc ullamcorper dictum. Sed sagittis nunc eros, a placerat ante cursus rutrum. Duis suscipit nisl purus, ac condimentum turpis varius quis. Phasellus odio augue, lobortis ut libero ac, consequat iaculis neque. Fusce scelerisque faucibus tellus, at accumsan neque iaculis et. Nulla vitae suscipit.</p>
                    </TextBox>
                </div>

                <div className="about-hachathon-arrows"></div>
            </div>

            <div className="comp web3-challenge">
                <div className="web3-challenge-text">
                    <h2>O WEB3 IZAZOVU</h2>
                    <TextBox className="text-box-about-competition txt2">   
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas interdum nisi, mollis varius nisi accumsan vitae. Aliquam at velit vel nunc ullamcorper dictum. Sed sagittis nunc eros, a placerat ante cursus rutrum. Duis suscipit nisl purus, ac condimentum turpis varius quis. Phasellus odio augue, lobortis ut libero ac, consequat iaculis neque. Fusce scelerisque faucibus tellus, at accumsan neque iaculis et. Nulla vitae suscipit.</p>
                    </TextBox>
                </div>
                <div className="web3-challenge-arrows"></div>
            </div>

            <div className="comp why-to-join">
                <div className="why-to-join-text">
                    <h2>ZAŠTO SE PRIJAVITI?</h2>
                    <TextBox className="text-box-about-competition txt3">   
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas interdum nisi, mollis varius nisi accumsan vitae. Aliquam at velit vel nunc ullamcorper dictum. Sed sagittis nunc eros, a placerat ante cursus rutrum. Duis suscipit nisl purus, ac condimentum turpis varius quis. Phasellus odio augue, lobortis ut libero ac, consequat iaculis neque. Fusce scelerisque faucibus tellus, at accumsan neque iaculis et. Nulla vitae suscipit.</p>
                    </TextBox>
                </div>
                <div className="why-to-join-arrows"></div>
            </div>
        </div>
    </>

        
    );
}

export default AboutCompetition;