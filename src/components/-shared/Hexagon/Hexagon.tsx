import { memo } from 'react'
import './Hexagon.scss'
import { SIZE_DURATIONS } from '../../../utils/constants/hexagon/sizeDurations';

interface HexagonProps extends React.SVGProps<SVGSVGElement> {
    /** Time that takes to make one whole rotation in seconds */
    duration?: number | undefined;
}

const getAnimationDuration = (className: string): number | null => {
    const classes = className.split(' ');
    const matchedClass = classes.find(cls => SIZE_DURATIONS[cls]);
    return matchedClass ? SIZE_DURATIONS[matchedClass] : null;
}

const Hexagon: React.NamedExoticComponent<HexagonProps> = memo(({ duration, ...props }) => {
    const c = "hexagon" + (props.className ? " " + props.className : "");
    const finalDuration = getAnimationDuration(c) ?? duration;
    const style: React.CSSProperties | undefined = finalDuration ? {
        animationDuration: `${finalDuration}s`,
        animationDelay: `${Math.random() * -finalDuration}s`
    } : undefined;
    return (
        <svg
            {...props} className={c} style={style}
            width="89" height="102" viewBox="0 0 89 102" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
            <path
                vectorEffect="non-scaling-stroke"
                d="M44.3013 1L87.6025 26V76L44.3013 101L1 76V26L44.3013 1Z" strokeWidth="1" />
        </svg>
    )
})

export default Hexagon