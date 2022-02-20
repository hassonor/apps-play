import GoogleAppsContext from "../../context/googleApps/GoogleAppsContext";
import {ReactComponent as FullStar} from '../../assets/full-star.svg';
import {ReactComponent as EmptyStar} from '../../assets/empty-star.svg';
import {useContext, useEffect} from "react";
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import {MdOutlineReviews} from "react-icons/md";
import Carousel from "../../components/layout/Carousel";
import Collapsible from "react-collapsible";

function AppDetails() {
    const {getApp, app, loading} = useContext(GoogleAppsContext)

    const params = useParams()

    useEffect(() => {

        getApp(params.name)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const {
        title,
        genre,
        headerImage,
        developer,
        ratings,
        score
    } = app

    if (loading) {
        return <Spinner/>
    }

    const formatNumber = (num) => {

        return num.toLocaleString()
    }

    const rating = (number) => {
        let container = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= number) {
                container.push(
                    <li key={i}>
                        <FullStar key={i}/>
                    </li>
                );
            } else {
                container.push(
                    <li key={i}>
                        <EmptyStar key={i}/>
                    </li>
                );
            }
        }
        return container;
    };

    return (
        <>
            <div className="w-full  mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/' className='btn btn-ghost'>
                        Back
                    </Link>
                </div>
                <div className="p-4 rounded">
                    <img
                        src={headerImage}
                        alt="header"
                    />
                    <h2 className="mt-3 text-lg">{title}</h2>
                    <p className="text-sm text-gray-400">{developer}</p>
                    <p className="text-sm text-gray-300">{genre}</p>
                    <ul className="flex items-center">
                        {rating(parseInt(score))}
                        <li className="ml-2 text-xs text-gray-100">{formatNumber(ratings)}</li>
                        <MdOutlineReviews className='inline text-2xl pl-3'/>
                    </ul>
                    <Carousel app={app}/>
                    <br/>
                    <Collapsible className="bg-cyan-700 hover:bg-cyan-600 w-20" trigger="Read more">
                        <p>
                            {app.description}
                        </p>

                    </Collapsible>

                </div>

            </div>
        </>
    )
}

export default AppDetails