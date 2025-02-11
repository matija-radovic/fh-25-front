import globeIcon from './../../assets/Globe.png'
import fonisLogo from './../../assets/FONIS LOGO.png'
import locationIcon from './../../assets/Location.png'
import linkedInIcon from './../../assets/LinkedIn.png'
import instagramIcon from './../../assets/Instagram.png'
import tiktokIcon from './../../assets/TikTok.png'
import mailIcon from './../../assets/Mail.png'
import './Footer.scss'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-left">
                    <a href="https://www.fonis.rs" target="_blank">
                        <img src={globeIcon} alt="" />
                        www.fonis.rs
                    </a>
                    <a href="https://www.elab.fon.bg.ac.rs" target="_blank">
                        <img src={globeIcon} alt="" />
                        www.elab.fon.bg.ac.rs
                    </a>
                    <a href="https://bc.elab.fon.bg.ac.rs" target="_blank">
                        <img src={globeIcon} alt="" />
                        bc.elab.fon.bg.ac.rs
                    </a>
                </div>
                <div className="footer-center">
                    <img src={fonisLogo} alt="fonis logo" />
                </div>
                <div className="footer-right">
                    <div className='footer-location'>
                        <p>
                            Fakultet organizacionih nauka <br />
                            Jove Ilića 154, Beograd
                        </p>
                        <img src={locationIcon} alt="location" />
                    </div>
                    <div className="footer-icons">
                        <a href="https://www.linkedin.com/company/fonis" target="_blank">
                            <img src={linkedInIcon} alt="linked-in" />
                        </a>
                        <a href="https://www.instagram.com/fonis_fon/" target="_blank">
                            <img src={instagramIcon} alt="instagram" />
                        </a>
                        <a href="https://www.tiktok.com/@fonis_fon " target="_blank">
                            <img src={tiktokIcon} alt="tiktok" />
                        </a>
                        <a href="mailto:hakaton@fonis.rs" target="_blank">
                            <img src={mailIcon} alt="email" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer