import { useState } from "react"
import BackgroundContext from "./BackgroundContext";

const BackgroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    return (
        <BackgroundContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </BackgroundContext.Provider>
    )
}

export default BackgroundProvider