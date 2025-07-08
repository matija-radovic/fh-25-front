import { useCallback, useState } from "react"
import LoadingContext from "./LoadingContext";

const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const completeLoading = useCallback(() => setIsLoading(false), []);

    return (
        <LoadingContext.Provider value={{ isLoading, completeLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingProvider