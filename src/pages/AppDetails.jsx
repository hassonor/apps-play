import GoogleAppsContext from "../context/googleApps/GoogleAppsContext";

import {useContext, useEffect} from "react";
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import Spinner from "../components/layout/Spinner";

function AppDetails() {
    const {getApp, app, loading} = useContext(GoogleAppsContext)

    const params = useParams()

    useEffect(() => {

        getApp(params.name)
    }, [])

    const {
        title,
        description,
        summary,
        installs,
        score,
        reviews,
        developer,
        developerEmail,
        developerWebsite,
        genre,
        icon,
        url,
    } = app

    if (loading) {
        return <Spinner/>
    }

    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost'>
                        Back To Home
                    </Link>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                    <div className='custom-card-image mb-6 md:mb-0'>
                        <div className='rounded-lg shadow-xl card image-full'>
                            <figure>
                                <img src={icon} alt=''/>
                            </figure>
                            <div className='card-body justify-end'>
                                <h2 className='card-title mb-0'>{title}</h2>
                                <p>{genre}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppDetails