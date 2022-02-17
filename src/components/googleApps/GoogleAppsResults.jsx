import {useEffect, useContext} from "react";
import Spinner from "../layout/Spinner";
import GoogleAppItem from "./GoogleAppItem";
import GoogleAppsContext from "../../context/googleApps/GoogleAppsContext";


function GoogleAppsResults() {
    const {apps, loading} = useContext(GoogleAppsContext)

    // useEffect(() => {
    //
    //     fetchUsers()
    // }, []) // eslint-disable-line react-hooks/exhaustive-deps
    //

    if (!loading) {
        return (<div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {apps.map((app) => (
                    <GoogleAppItem key={app.id} app={app}/>
                )
            )}
        </div>)
    } else {
        return <Spinner/>
    }
}

export default GoogleAppsResults;