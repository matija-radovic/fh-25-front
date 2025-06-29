import { useEffect, useState } from "react";

/**
 * `useVisibility` returns a `boolean` value depending on if `document.hidden` is true or not
 */
const useVisibility = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return isVisible;
}

export default useVisibility