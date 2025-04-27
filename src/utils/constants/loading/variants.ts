import { Variant } from "motion/react";

export const animationStates = { initial: "hidden", animate: "visible" } as const;
export type VariantNames = typeof animationStates[keyof typeof animationStates];
export type StrokePart = "full" | "start" | "end";

const strokeDrawDuration = 1.2;
export const strokeVariants: Record<StrokePart, Record<VariantNames, Variant>> = {
    "full": {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: strokeDrawDuration, ease: "easeInOut" } }
    },
    "start": {
        hidden: { pathLength: 0 },
        visible: { pathLength: 1, transition: { duration: strokeDrawDuration / 2, ease: "easeIn" } }
    },
    "end": {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1, opacity: 1,
            transition: {
                opacity: { duration: 0, delay: strokeDrawDuration / 2 },
                pathLength: { duration: strokeDrawDuration / 2, ease: "easeOut", delay: strokeDrawDuration / 2 }
            }
        }
    }
} as const
export const fillVariants: Record<VariantNames, Variant> = {
    hidden: { opacity: 0, },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: strokeDrawDuration,
            ease: "easeOut"
        }
    }
} as const