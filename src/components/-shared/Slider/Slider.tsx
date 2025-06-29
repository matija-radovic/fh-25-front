import { Dispatch, forwardRef, SetStateAction, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState, memo } from "react"
import useVisibility from "../../../hooks/useVisibility";
import { AnimatePresence, motion, useInView, Variants, wrap } from "motion/react";
import './Slider.scss'

type AutoScroll = {
    duration?: number,
    direction?: -1 | 1,
}
const asDefault = { duration: 1500, direction: 1 } as const;

export interface SliderRef {
    navigate: (num: number) => void
}

interface SliderProps {
    /** Array of links to an image resource */
    values: string[],
    /** Sets the initial index to be put in center position */
    initial?: number,
    /** Retrives the center index relative to provided array */
    onChange?: Dispatch<SetStateAction<number>> | undefined,
    /** Automatic scroll behaviour @see {@link asDefault | default} values for options*/
    autoScroll?: AutoScroll | true | undefined,
    /** If value is set to `"short"` three elements are displayed only when phone media query is hit. Check `/src/utils/css/_mediaqueries` scss utils file.*/
    mobileStyleType?: "long" | "short",
}

// Same as /src/utils/css/_mediaqueries.scss
const mqPhone = () => window.matchMedia("only screen and (max-width: 768px)").matches;

const minArrayLength = 10; // For smooth animation
const expandArray = <T,>(array: T[], minLength: number = minArrayLength): { id: number, val: T }[] => {
    if (array.length <= 0) throw new Error('Array length needs to be at least 1');
    const newArray = array.map((v, i) => ({ id: i, val: v }));
    if (array.length >= minLength + 1)
        return newArray
    else
        return Array(Math.ceil((minLength + 1) / newArray.length)).fill(newArray).flat();
}

const getItemClass = (index: number, max: 3 | 5): string => {
    const positions = {
        3: ['p-first', 'p-center', 'p-last'],
        5: ['first', 'second', 'center', 'second-last', 'last']
    };

    return positions[max as keyof typeof positions][index];
}

const duration = .3
const variants: Variants = {
    enter: (dir: number) => ({
        x: dir * 50,
        opacity: 0,
        scale: 0
    }),
    visible: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (dir: number) => ({
        x: dir * (-50),
        opacity: 0,
        scale: 0,
    })
}

/** Use `ref` and `navigate` function to navigate trough slider */
const Slider = memo(forwardRef<SliderRef, SliderProps>(({
    values,
    initial = 0,
    onChange,
    mobileStyleType = "long",
    autoScroll
}, ref) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const [isMouseOver, setIsMouseOver] = useState(false);
    const inView = useInView(sliderRef);
    const isVisible = useVisibility();
    const scroll = useMemo(() => autoScroll === true ? asDefault : autoScroll, [autoScroll]);

    const [mqMatches, setMqMatches] = useState(mqPhone);
    const displayCount = mobileStyleType === "short" && mqMatches ? 3 : 5;

    const expandedArray = useMemo(() => expandArray(values), [values]);
    const [currentIndex, setCurrentIndex] = useState(() => wrap(0, expandedArray.length, initial - Math.floor(displayCount / 2)));
    const [direction, setDirection] = useState(1);

    const navigate = useCallback((dir: -1 | 1 | number) => {
        setCurrentIndex(prev => wrap(0, expandedArray.length, prev + dir))
        setDirection(Math.sign(dir));
    }, [expandedArray]);

    useImperativeHandle(ref, () => ({
        navigate: (num: number) => navigate(num),
    }), [navigate]);

    const getItems = useCallback(() => {
        const array = [];
        for (let i = 0; i < displayCount; i++) {
            const index = wrap(0, expandedArray.length, currentIndex + i);
            array.push(
                <motion.img
                    key={index}
                    className={`slider-item si-${getItemClass(i, displayCount)}`}
                    initial='enter'
                    animate='visible'
                    exit='exit'
                    variants={variants}
                    layout
                    transition={{ duration: duration, type: "tween" }}
                    custom={direction}
                    src={expandedArray[index].val} alt=""
                />
            )
        }
        return array;
    }, [currentIndex, expandedArray, displayCount, direction]);


    // update media query
    useEffect(() => {
        const handleResize = () => setMqMatches(mqPhone);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    // onChange - will cause infinite rerenders if "onChange" prop is not a pure function
    useLayoutEffect(() => {
        if(!onChange) return;
        const center = wrap(0, expandedArray.length, currentIndex + Math.floor(displayCount / 2));
        onChange(expandedArray[center].id);
    }, [currentIndex, expandedArray, displayCount, onChange])

    // auto-scroll on off
    useEffect(() => {
        if (!scroll) return;
        if (!inView || !isVisible || isMouseOver) return;
        const interval = setInterval(() => navigate(scroll.direction ?? asDefault.direction), scroll.duration ?? asDefault.duration);
        return () => clearInterval(interval);
    }, [scroll, inView, isMouseOver, isVisible, navigate])

    return (
        <div className={`slider${displayCount === 3 ? " slider-short" : ""}`} ref={sliderRef} onMouseEnter={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
            <button type="button" className="prev" onClick={() => navigate(-1)} />
            <div className="slider-container">
                <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                    {getItems()}
                </AnimatePresence>
            </div>
            <button type="button" className="next" onClick={() => navigate(1)} />
        </div >
    )
}))

export default Slider