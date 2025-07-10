import { useRef } from "react";
import "./Agenda.scss";
import { Section } from "../"
import { motion } from "motion/react";
import { useInView } from "motion/react"

const SVGContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    }
}

const triangleVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, transition: { duration: 0.5 }, scale: 1 },
};

const Agenda = () => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const isInView = useInView(svgRef, {
        amount: 0.5,
        once: true
    });

    return (
        <Section heading="AGENDA" className="agenda-section" id="agenda">
            <div className="agenda-container orbitron">
                <div className="agenda-left">
                    <p className="agenda-events">Otvaranje prijava <br /> 28.02.2025.</p>
                    <p className="agenda-events">Moodle test <br /> 17.03.2025.</p>
                    <p className="agenda-events">Hakaton <br /> 30.03.2025.</p>
                </div>
                <motion.svg
                    ref={svgRef}
                    xmlns="http://www.w3.org/2000/svg"
                    width="411"
                    height="681"
                    fill="none"
                    viewBox="0 0 411 681"
                    variants={SVGContainerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <g id="Kvadrati">
                        <g fill="#F3F2FF">
                            <path d="M409.762 384.5 358.668 355l-51.095 29.5v59l51.094 29.5.001-.001 51.094-29.499v-59Z" />
                            <path d="M1.001 266.5 52.095 237l51.096 29.5v59L52.096 355v-.001L1 325.5v-59Z" />
                            <path d="M409.762 148.5 358.668 119l-51.095 29.5v59l51.094 29.5.001-.001 51.094-29.499v-59Z" />
                            <path d="M1.001 30.5 52.095 1l51.096 29.5v59L52.096 119v-.001L1 89.5v-59Z" />
                            <path d="M256.478 532v59l-51.095 29.5-51.096-29.5v-59l51.096-29.5 51.095 29.5Z" />

                        </g>
                        <g stroke="#24BDDE" strokeLinejoin="bevel" strokeWidth="1.53">
                            <path d="M205.383 561.5v-59m0 59L154.287 532m51.096 29.5L154.287 591m51.096-29.5v59m0-59 51.095 29.5m-51.095-29.5 51.095-29.5m-51.095-29.5L154.287 532m51.096-29.5 51.095 29.5m-102.191 0v59m0 0 51.096 29.5m0 0 51.095-29.5m0 0v-59" />
                            <path d="M409.762 384.5 358.668 355m51.094 29.5v59m0-59-102.189 59m51.095-88.5-51.095 29.5m51.095-29.5v117.999M307.573 384.5v59m0-59 102.189 59m-102.189 0 51.094 29.5.001-.001m51.094-29.499-51.094 29.499" />
                            <path d="M1.001 266.5 52.095 237M1.001 266.5v59m0-59 102.19 59M52.095 237l51.096 29.5M52.095 237v117.999m51.096-88.499v59m0-59-102.19 59m102.19 0L52.096 355v-.001M1 325.5l51.094 29.499" />
                            <path d="M409.762 148.5 358.668 119m51.094 29.5v59m0-59-102.189 59m51.095-88.5-51.095 29.5m51.095-29.5v117.999M307.573 148.5v59m0-59 102.189 59m-102.189 0 51.094 29.5.001-.001m51.094-29.499-51.094 29.499" />
                            <path d="M1.001 30.5 52.095 1M1.001 30.5v59m0-59 102.19 59M52.095 1l51.096 29.5M52.095 1v117.999M103.191 30.5v59m0-59-102.19 59m102.19 0L52.096 119v-.001M1 89.5l51.094 29.499" />
                        </g>
                    </g>
                    <g id="Okvir" fill="#24BDDE">
                        <motion.path variants={triangleVariants} d="M307.574 561.497L256.479 531.997L307.574 502.497L307.574 561.497Z" />
                        <motion.path variants={triangleVariants} d="M256.479 531.997L256.479 590.997L307.574 561.497L256.479 531.997Z" />
                        <motion.path variants={triangleVariants} d="M307.574 620.497L256.479 590.997L307.574 561.497L307.574 620.497Z" />
                        <motion.path variants={triangleVariants} d="M256.479 650L256.479 591L307.574 620.5L256.479 650Z" />
                        <motion.path variants={triangleVariants} d="M256.478 591L205.383 620.5L256.478 650L256.478 591Z" />
                        <motion.path variants={triangleVariants} d="M256.478 650L205.383 679.5L205.383 620.5L256.478 650Z" />
                        <motion.path variants={triangleVariants} d="M154.287 650L205.383 679.5L205.383 620.5L154.287 650Z" />
                        <motion.path variants={triangleVariants} d="M154.287 591L205.383 620.5L154.287 650L154.287 591Z" />
                        <motion.path variants={triangleVariants} d="M154.287 650L154.287 591L103.191 620.5L154.287 650Z" />
                        <motion.path variants={triangleVariants} d="M103.19 620.497L154.285 590.997L103.191 561.497L103.19 620.497Z" />
                        <motion.path variants={triangleVariants} d="M154.285 531.997L154.285 590.997L103.19 561.497L154.285 531.997Z" />
                        <motion.path variants={triangleVariants} d="M103.19 561.497L154.285 531.997L103.191 502.497L103.19 561.497Z" />
                        <motion.path variants={triangleVariants} d="M154.287 473L154.287 532L103.191 502.5L154.287 473Z" />
                        <motion.path variants={triangleVariants} d="M154.287 532L205.383 502.5L154.287 473L154.287 532Z" />
                        <motion.path variants={triangleVariants} d="M154.287 473L205.383 443.5L205.383 502.5L154.287 473Z" />
                        <motion.path variants={triangleVariants} d="M256.478 473L205.383 443.5L205.383 502.5L256.478 473Z" />
                        <motion.path variants={triangleVariants} d="M256.478 532L205.383 502.5L256.478 473L256.478 532Z" />
                        <motion.path variants={triangleVariants} d="M256.479 473L256.479 532L307.574 502.5L256.479 473Z" />
                    </g>
                    <g id="Trouglovi" fill="#24BDDE" stroke="#24BDDE" strokeLinejoin="bevel" strokeWidth="1.53">
                        <motion.path variants={triangleVariants} d="M307.574 502.5 256.479 473l51.095-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="M307.574 502.5v-59l51.095 29.5-51.095 29.5Z" />
                        <motion.path variants={triangleVariants} d="M307.574 384.5v-59l51.095 29.5-51.095 29.5Z" />
                        <motion.path variants={triangleVariants} d="M307.574 384.5 256.479 355l51.094-29.5.001 59Z" />
                        <motion.path variants={triangleVariants} d="M256.478 355v59l51.096-29.5-51.096-29.5Z" />
                        <motion.path variants={triangleVariants} d="m256.478 414-51.096-29.5 51.096-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="m256.478 355-51.095-29.5v59l51.095-29.5Z" />
                        <motion.path variants={triangleVariants} d="m154.287 355 51.095-29.5v59L154.287 355Z" />
                        <motion.path variants={triangleVariants} d="m154.287 414 51.096-29.5-51.096-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="M154.286 355v59l-51.095-29.5 51.095-29.5Z" />
                        <motion.path variants={triangleVariants} d="m103.191 384.5 51.095-29.5-51.095-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="M103.191 384.5v-59L52.095 355l51.096 29.5Z" />
                        <motion.path variants={triangleVariants} d="M103.191 266.5v-59L52.095 237l51.096 29.5Z" />
                        <motion.path variants={triangleVariants} d="m103.191 266.5 51.095-29.5-51.095-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="M154.286 237v59l-51.095-29.5 51.095-29.5Z" />
                        <motion.path variants={triangleVariants} d="m154.287 296 51.096-29.5-51.096-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="m154.287 237 51.095-29.5v59L154.287 237Z" />
                        <motion.path variants={triangleVariants} d="m256.478 237-51.095-29.5v59l51.095-29.5Z" />
                        <motion.path variants={triangleVariants} d="m256.478 296-51.096-29.5 51.096-29.5v59Z" />
                        <motion.path variants={triangleVariants} d="M256.478 237v59l51.096-29.5-51.096-29.5Z" />
                        <motion.path variants={triangleVariants} d="M307.574 266.5 256.479 237l51.094-29.5.001 59Z" />
                        <motion.path variants={triangleVariants} d="M307.574 266.5v-59l51.095 29.5-51.095 29.5Z" />
                        <motion.path variants={triangleVariants} d="M307.574 89.5v59l51.095-29.5-51.095-29.5Z" />
                        <motion.path variants={triangleVariants} d="M307.574 89.5 256.479 119l51.094 29.5.001-59Z" />
                        <motion.path variants={triangleVariants} d="M256.478 119V60l51.096 29.5-51.096 29.5Z" />
                        <motion.path variants={triangleVariants} d="m256.478 60-51.096 29.5 51.096 29.5V60Z" />
                        <motion.path variants={triangleVariants} d="m256.478 119-51.095 29.5v-59l51.095 29.5Z" />
                        <motion.path variants={triangleVariants} d="m154.287 119 51.095 29.5v-59L154.287 119Z" />
                        <motion.path variants={triangleVariants} d="m154.287 60 51.096 29.5-51.096 29.5V60Z" />
                        <motion.path variants={triangleVariants} d="M154.286 119V60l-51.095 29.5 51.095 29.5Z" />
                        <motion.path variants={triangleVariants} d="m103.191 89.5 51.095 29.5-51.095 29.5v-59Z" />
                        <motion.path variants={triangleVariants} d="M103.191 89.5v59L52.095 119l51.096-29.5Z" />
                    </g>
                    <path
                        stroke="#24BDDE"
                        strokeLinejoin="bevel"
                        strokeWidth="1.53"
                        d="M409.764 561.5 1 325.5l408.764-236L256.477 1m153.287 560.5-204.382 118m204.382-118-.001-531M1 561.5l408.764-236L1 89.5 154.286 1M1 561.5l204.382 118M1 561.5v-531m204.382 649v-649M256.477 1v649L1 502.5l408.764-236L1 30.5M256.477 1 1 148.5l408.764 236L52.095 591V1m255.478 29.5v590L1 443.5l408.763-236L52.095 1m306.573 0v590L1 384.5l408.763-236L154.286 1m204.382 0L1 207.5l408.764 236-306.573 177v-590M358.668 1l51.095 29.5M154.286 1v649l255.478-147.5L1 266.5l408.763-236M52.095 1 1 30.5"
                    />
                </motion.svg>
                <div className="agenda-right">
                    <p className="agenda-events">Zatvaranje prijava <br /> 13.03.2025.</p>
                    <p className="agenda-events">Tehnički intervju <br /> 21.03.2025.</p>
                </div>
            </div>
        </Section >
    );
};

export default Agenda;