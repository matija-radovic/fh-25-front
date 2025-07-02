import Section from '@/components/-shared/Section/Section'
import Slider from '../-shared/Slider/Slider'
import './Partners.scss'
import EBS from '@/assets/partners/godisnji/EBS.png';
import Arrow from '../-shared/Arrow/Arrow';

const yearly: string[] = Object.values(import.meta.glob('@/assets/partners/godisnji/*', { eager: true, query: '?url', import: 'default' }))
const natural: string[] = Object.values(import.meta.glob('@/assets/partners/robni/*', { eager: true, query: '?url', import: 'default' }))
const media: string[] = Object.values(import.meta.glob('@/assets/partners/medijski/*', { eager: true, query: '?url', import: 'default' }))

const Partners = () => {
    return (
        <Section heading='PARTNERI' className="partners">
            <Arrow className="top half-offset" />
            <Arrow className="top half-offset" flippedX/>
            <div className='competition-sponsor'>
                <h3>POKROVITELj TAKMIČENJA</h3>
                <img src={EBS} alt="Erste Bank" />
            </div>
            <div className='partners-sliders'>
                <div>
                    <h3>GODIŠNjI PARTNERI</h3>
                    <Slider values={yearly} autoScroll mobileStyleType='short' />
                </div>
                <div>
                    <h3>ROBNI PARTNERI</h3>
                    <Slider values={natural} autoScroll mobileStyleType='short' />
                </div>
                <div>
                    <h3>MEDIJSKI PARTNERI</h3>
                    <Slider values={media} autoScroll mobileStyleType='short' />
                </div>
            </div>
        </Section>
    )
}

export default Partners
