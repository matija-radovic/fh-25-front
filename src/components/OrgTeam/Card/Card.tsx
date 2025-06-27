import { clamp, motion, MotionStyle, SpringOptions, useSpring, useTransform, Variants } from "framer-motion";
import { forwardRef, MouseEvent, useEffect, useMemo, useRef } from "react";
import { adjust } from "../../../utils/math/math";
import './Card.scss'

interface CardProps {
    children?: React.ReactNode | React.ReactNode[],
    className?: string,
    /** Allowed values are `(0, +inf]`. Default is 1, if 0 or less then 1.*/
    sensitivity?: number,
    enterDirection?: -1 | 1
}

const variants: Variants = {
    enter: (dir: number) => ({
        rotateY: dir * 90,
        opacity: 0
    }),
    visible: {
        rotateY: 0,
        opacity: 1
    },
    exit: (dir: number) => ({
        rotateY: -dir * 90,
        opacity: 0
    })
}

const springInteractSettings: SpringOptions = { stiffness: 400, damping: 20 };

const Card: React.FC<CardProps> = forwardRef(({ children, className, sensitivity = 1, enterDirection = 1 }, ref: React.Ref<HTMLDivElement>) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<number | null>(null);
    const sens = useMemo(() => 15 / (sensitivity <= 0 ? 1 : sensitivity), [sensitivity])

    // rotation values
    const rotateX = useSpring(0, springInteractSettings);
    const rotateY = useSpring(0, springInteractSettings);

    // background offset values
    const backgroundX = useSpring(50, springInteractSettings)
    const backgroundY = useSpring(50, springInteractSettings)

    // glare values
    const glareX = useSpring(0, springInteractSettings)
    const glareY = useSpring(0, springInteractSettings)
    const glareO = useSpring(0, springInteractSettings) // opacity

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // rotation calculation (inverted axis)
        const targetRotateY = (centerX - x) / sens;
        const targetRotateX = (y - centerY) / sens;

        rotateX.set(targetRotateX);
        rotateY.set(targetRotateY);

        // background calculation (holo etc.)
        const percentX = clamp(0, 100, (x / rect.width) * 100)
        const percentY = clamp(0, 100, (y / rect.height) * 100)

        backgroundX.set(adjust(percentX, 0, 100, 33, 67))
        backgroundY.set(adjust(percentY, 0, 100, 67, 33))

        // glare calculation
        glareX.set(percentX)
        glareY.set(percentY)
        glareO.set(1)

    };

    // Animate to default
    const handleMouseLeave = () => {
        if (timeout.current != null) clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            rotateX.set(0);
            rotateY.set(0);
            backgroundX.set(50);
            backgroundY.set(50);
            glareX.set(0)
            glareY.set(0)
            glareO.set(0)
        }, 500)
    };

    const handleMouseEnter = () => {
        if (timeout.current != null) clearTimeout(timeout.current);
    }

    useEffect(() => {
        return () => { if (timeout.current != null) clearTimeout(timeout.current) }
    }, []);

    const displayStyle = {
        rotateX: rotateX,
        rotateY: rotateY,
        '--background-x': useTransform(backgroundX, (x) => `${x}%`),
        '--background-y': useTransform(backgroundY, (y) => `${y}%`),
        '--glare-x': useTransform(glareX, (x) => `${x}%`),
        '--glare-y': useTransform(glareY, (y) => `${y}%`),
        '--glare-o': glareO
    } as MotionStyle


    return (
        <>
            <motion.div className={`card${className !== undefined ? `${" " + className}` : undefined}`}
                ref={ref}
                variants={variants}
                initial='enter'
                animate='visible'
                exit='exit'
                transition={{
                    duration: .15,
                    ease: "linear"
                }}
                custom={enterDirection}
            >
                <motion.div
                    ref={cardRef}
                    className="card-rotate"
                    style={displayStyle}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="card-content">
                        {children}
                    </div>
                    <motion.div className="card-shine" />
                    <motion.div className="card-glare" />
                </motion.div>
            </motion.div>
        </>
    );
});

export default Card;