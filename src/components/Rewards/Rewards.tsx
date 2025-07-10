import Section from '../-shared/Section/Section'
import Pillar from './Pillar/Pillar'
import stand from '@/assets/rewards/stand.svg'
import './Rewards.scss'
import Arrow from '../-shared/Arrow/Arrow'
import { useInView } from 'motion/react'
import { useRef } from 'react'

const Rewards = () => {
    const pillarsRef = useRef<HTMLDivElement>(null);
    const inView = useInView(pillarsRef, { once: true });

    return (
        <Section heading='NAGRADE' className='rewards' id='nagrade'>
            <div className='pillars' ref={pillarsRef}>
                <img className='stand' src={stand} alt='' />
                <Pillar no={1} prize={1000} inView={inView} animationDuration={2.6} />
                <Pillar no={2} prize={800} inView={inView} animationDuration={1.8} />
                <Pillar no={3} prize={500} inView={inView} animationDuration={1.1} />
            </div>
            <div className='arrows-wrapper'>
                <Arrow className="half-offset" />
                <Arrow className="half-offset" flippedX />
            </div>
        </Section>
    )
}

export default Rewards