import {createContext, useReducer} from "react";
import googleAppsReducer from "./GoogleAppsReducer";
import all_apps from '../../mocks/all_apps';
import booking_app_metadata from '../../mocks/booking_app_metadata';

const GoogleAppsContext = createContext()

// const GOOGLE_APP_URL = process.env.REACT_APP_GOOGLE_APP_DETAILS_URL


export const AppsProvider = ({children}) => {
    const initialState = {
        apps: [],
        app: {},
        app_searched: [],
        loading: false
    }

    const [state, dispatch] = useReducer(googleAppsReducer, initialState)


    const fetchApps = () => {
        setLoading()
        const data = all_apps
        dispatch({
            type: 'GET_APPS',
            payload: data
        })
    }

    const searchApps = async (text) => {
        setLoading()

        const items = all_apps.filter(x => x.title.toLowerCase().includes(text.toLowerCase()))

        dispatch({
            type: 'GET_APP_WITH_SEARCH',
            payload: items
        })
    }


    const getApp = async (name) => {
        setLoading()

        const package_name = name.split('.')[1]

        // Cache for 1 minute
        let data = localStorage.getItem(package_name)

        if (data != null) {
            data = JSON.parse(data)

            dispatch({
                type: 'GET_APP_DETAILS',
                payload: data
            })
        } else {

            dispatch({
                type: 'GET_APP_DETAILS',
                payload: booking_app_metadata
            })
            localStorage.setItem(package_name, JSON.stringify(booking_app_metadata))
            setTimeout(function () {
                localStorage.removeItem(package_name);
            }, 60 * 1000);
        }


        dispatch({
            type: 'GET_APP_DETAILS',
            payload: booking_app_metadata
        })


        // With API:
        // const package_name = name.split('.')[1]
        //
        // const response = await fetch(`${GOOGLE_APP_URL}/${package_name}_app.metadata.json`)

        // if (response.status === 404) {
        //     window.localation = '/notfound'
        // } else {
        //
        //     const data = await response.json()
        //
        //     dispatch({
        //         type: 'GET_APP',
        //         payload: data
        //     })
        // }

    }


    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GoogleAppsContext.Provider value={{
        apps: state.apps,
        loading: state.loading,
        app: booking_app_metadata,
        fetchApps,
        getApp,
        searchApps

    }}>
        {children}
    </GoogleAppsContext.Provider>
}

export default GoogleAppsContext