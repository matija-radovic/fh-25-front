import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.replace("#", "");
        if (hash) {
            setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" })
            }, 50)
        }
    }, [location.hash])

    return <Outlet />
}

export default Layout