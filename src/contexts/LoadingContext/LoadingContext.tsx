import { createContext } from "react";

const LoadingContext = createContext({
    isLoading: true,
    completeLoading: () => { }
});

export default LoadingContext