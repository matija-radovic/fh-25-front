import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import PageNotFound from "./PageNotFound/PageNotFound";
import DefaultError from "./Default/DefaultError";
import './Error.scss'

const Error: React.FC = () => {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404: return <PageNotFound />
        }
    }

    return <DefaultError/>
}

export default Error