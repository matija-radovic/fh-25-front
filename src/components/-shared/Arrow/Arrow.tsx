import { forwardRef, memo, SVGProps, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import { paths } from '../../../utils/constants/arrow/path'
import './Arrow.scss'
import { useInView } from 'motion/react'
import useVisibility from '../../../hooks/useVisibility'


interface ArrowProps {
    flippedX?: boolean,
    flippedY?: boolean,
    color?: "blue" | "purple"
    className?: string | string[]
}

const LIGHT_UP_INTERVAL = 300

const Arrow: React.NamedExoticComponent<ArrowProps> = memo(({
    className,
    color = "blue",
    flippedX = false,
    flippedY = false
}) => {
    const fill = useMemo(() => color === "blue" ? "#24BDDE" : "#832091", [color]);
    const pathsRef = useRef<(PathRef | null)[]>([]);
    const arrowRef = useRef<SVGSVGElement>(null);
    const isInView = useInView(arrowRef);
    const isVisible = useVisibility();
    const classes = useMemo(() => Array.isArray(className) ? className.join(' ').trim() : className, [className]);

    useEffect(() => {
        if (!isInView || !isVisible || !pathsRef.current) return;
        const paths = pathsRef.current
        const interval = setInterval(() => {
            const amount = Math.floor(1 + Math.random() * 10);
            const i = getRandomIndexes(0, paths.length, amount);
            i.forEach((v) => paths[v]?.turnOn());
        }, LIGHT_UP_INTERVAL);

        return () => clearInterval(interval);
    }, [isInView, isVisible])

    return (
        <svg ref={arrowRef} className={`big-arrow${flippedX ? " flipped-x" : ""}${flippedY ? " flipped-y" : ""}${classes ? " " + classes : ""}`}
            width="597" height="330" viewBox='0 0 597 330' xmlns="http://www.w3.org/2000/svg"
            fill="none" stroke={fill} strokeWidth="1.53" strokeMiterlimit="5.01585" strokeLinecap="round" strokeLinejoin="round"
            style={{ '--fill-color': fill } as React.CSSProperties}
        >
            {paths.map((v, i) =>
                <Path ref={(inst) => { pathsRef.current[i] = inst }}
                    d={v} key={i} />)
            }
        </svg>
    )
})

interface PathRef {
    turnOn: () => void,
}

interface PathProps extends SVGProps<SVGPathElement> {
    d: string
}

const Path = memo(forwardRef<PathRef, PathProps>(({ d, ...props }, ref) => {
    const pathRef = useRef<SVGPathElement>(null);
    const timeoutRef = useRef<number>();

    useImperativeHandle(ref, () => ({
        turnOn: () => {
            pathRef.current?.classList.add('active');
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                pathRef.current?.classList.remove('active');
            }, 1000);
        }
    }), []);

    return <path ref={pathRef} d={d} {...props} />;
}));

const getRandomIndexes = (min: number, max: number, amount: number) => {
    const indexes = new Set<number>();
    while (indexes.size < amount) {
        indexes.add(Math.floor(min + Math.random() * (max - min)));
    }
    return Array.from(indexes);
}

export default Arrow