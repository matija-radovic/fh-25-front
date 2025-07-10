import { createContext } from "react";

interface BackgroundContextT {
    isDark: boolean,
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

const BackgroundContext = createContext<BackgroundContextT>({
    isDark: true,
    setIsDark: () => {}
});

export default BackgroundContext