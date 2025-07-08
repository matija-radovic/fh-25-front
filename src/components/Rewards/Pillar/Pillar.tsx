import pillar from '@/assets/rewards/pilar.png'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect } from 'react'
import './Pillar.scss'

interface PillarProps {
    /** What place is it? */
    no: number,
    /** What prize is for that place? */
    prize: number,
    /** If in view start animation else don't*/
    inView?: boolean | undefined,
    /** As it says, duration to animate number from `0` to `prize`*/
    animationDuration?: number
}
const formatter = Intl.NumberFormat('de-DE', { currency: "EUR", style: "currency", unitDisplay: "narrow", currencyDisplay: "narrowSymbol", minimumFractionDigits: 0, maximumFractionDigits: 0 })

const Pillar: React.FC<PillarProps> = ({ no, prize, inView, animationDuration = 1 }) => {
    const count = useMotionValue(prize);
    const rounded = useTransform(() => formatter.format(count.get()));

    useEffect(() => {
        console.log(inView)
        if (inView === undefined) return;
        if (inView === false) return;
        count.set(0);
        const controls = animate(count, prize, { duration: animationDuration, ease: [0, 1, 0, 1] });
        return () => controls.stop();
    }, [count, inView, prize, animationDuration]);

    return (
        <div className='pillar orbitron'>
            <motion.h2 className="money">{rounded}</motion.h2>
            <div className='pillar-image'>
                <img src={pillar} alt='' />
                <svg viewBox='0 0 20 20' className='orbitron'>
                    <text x="10" y="10" textAnchor='middle' dominantBaseline='middle' fontSize="20" color='red'>{no}</text>
                </svg>
                {/*<h2 className='num'>{no}</h2>*/}
            </div>
        </div>
    )
}

export default Pillar