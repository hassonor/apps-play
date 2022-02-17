import {createContext, useReducer} from "react";
import googleAppsReducer from "./GoogleAppsReducer";
import all_apps from '../../mocks/all_apps';

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
        console.log(name)
        const formatted_package = "booking"


        const response = await fetch(`${GOOGLE_APP_URL}/apps/${formatted_package}_app.metadata.json`)

        if (response.status === 404) {
            window.localation = '/notfound'
        } else {

            const data = await response.json()

            dispatch({
                type: 'GET_APP',
                payload: data
            })
        }


    }


    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GoogleAppsContext.Provider value={{
        apps: all_apps,
        loading: state.loading,
        app: state.app,
        fetchApps,
        getApp

    }}>
        {children}
    </GoogleAppsContext.Provider>
}

export default GoogleAppsContext