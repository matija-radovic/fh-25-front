import React, { MouseEventHandler, useLayoutEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimationDefinition, motion } from 'motion/react'
import './Modal.scss'
import { documentManager } from '@/utils/dom/documentManager'
import { getScrollbarWidth } from '@/utils/dom/getScrollBarWidth'
import debounce from 'lodash.debounce'

interface ModalProps {
    className?: string | undefined,
    children?: React.ReactNode | undefined,
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
        const width = getScrollbarWidth();
        const handleResize = debounce(() => {
            document.body.classList.add('modal-open');
            document.body.style.setProperty('--scrollbar-width', `${width}px`);
        }, 300, { leading: true });

        const lock = documentManager.lockScroll('hidden');
        handleResize();

        window.addEventListener('resize', handleResize)
        return () => {
            lock.release();
            window.removeEventListener('resize', handleResize);
            document.body.classList.remove('modal-open');
            document.body.style.removeProperty('--scrollbar-width');
        };
    }, []);

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