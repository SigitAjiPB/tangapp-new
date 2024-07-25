import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <div className="w-full h-screen bg-sky-400 flex justify-center items-center">
                <p className="text-white font-bold">Oops!</p>
                <p className="text-white font-bold">Tersesat Maniezzz?</p>
                <p className="">{error.statusText || error.message}</p>
            </div>
        </>
    )
}

export default ErrorPage
