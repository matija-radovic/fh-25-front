import './Application.scss'
import Modal from "@/components/-shared/Modal/Modal"
import { getRandomCat } from "@/utils/constants/cats/cats";
import { useNavigate } from "react-router-dom"

const Application = () => {
    const navigate = useNavigate();

    // TODO: Add focus lock manualy, or: https://www.npmjs.com/package/react-focus-lock
    return (
        <Modal className="application-modal" onBackgroundClick={() => navigate('/')} animateInitial>
            <div className="application">
                <p>Work in progress!<br/>Check back in few days or months!</p>
                <img src={getRandomCat()} alt="cat" />
            </div>
        </Modal>
    )
}

export default Application