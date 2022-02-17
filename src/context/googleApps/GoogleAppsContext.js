import {createContext, useReducer} from "react";
import googleAppsReducer from "./GoogleAppsReducer";
import all_apps from '../../mocks/all_apps';
import booking_app_metadata from '../../mocks/booking_app_metadata';

const GoogleAppsContext = createContext()

const GOOGLE_APP_URL = process.env.REACT_APP_GOOGLE_APP_DETAILS_URL


export const AppsProvider = ({children}) => {
    const initialState = {
        apps: [],
        app: {},
        loading: false
    }

    const [state, dispatch] = useReducer(googleAppsReducer, initialState)


    const fetchApps = () => {
        setLoading()
        dispatch({
            type: 'GET_APPS',
            payload: all_apps
        })
    }


    const getApp = async (name) => {
        setLoading()

        dispatch({
            type: 'GET_APP_DETAILS',
            payload: booking_app_metadata
        })

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
        apps: all_apps,
        loading: state.loading,
        app: booking_app_metadata,
        fetchApps,
        getApp

    }}>
        {children}
    </GoogleAppsContext.Provider>
}

export default GoogleAppsContext