import React, { MouseEventHandler, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimationDefinition, motion } from 'motion/react'
import './Modal.scss'

interface ModalProps {
    className?: string | undefined,
    children?: React.ReactNode | undefined,
    disableScroll?: boolean | undefined,
    animateInitial?: boolean | undefined,
    onBackgroundClick?: (() => void) | undefined,
    onAnimationComplete?: ((definition: AnimationDefinition) => void) | undefined,
}
/** To animate exit just wrap in `<AnimatePresence />` */
const Modal: React.FC<ModalProps> = ({ className, children, onBackgroundClick, animateInitial, onAnimationComplete }) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === e.currentTarget) onBackgroundClick?.();
    }

    useLayoutEffect(() => {
        document.body.style.overflowY = "hidden"
        return () => { document.body.style.overflowY = "auto" }
    }, [])
    console.log('asd')

    return createPortal(
        <motion.div className={`modal${className ? ` ${className}` : ''}`} onClick={handleClick}
            initial={animateInitial ? { opacity: 0 } : undefined} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: .2, ease: 'easeOut' }}
            onAnimationComplete={onAnimationComplete}
        >
            {children}
        </motion.div>,
        document.body,
    )
}

export default Modal