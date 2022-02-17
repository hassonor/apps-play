import {createContext, useReducer} from "react";
import googleAppsReducer from "./GoogleAppsReducer";
import all_apps from '../../mocks/all_apps';

const GoogleAppsContext = createContext()


export const AppsProvider = ({children}) => {
    const initialState = {
        apps: [],
        app: {},
        loading: false
    }

    const [state, dispatch] = useReducer(googleAppsReducer, initialState)


    // const searchUsers = async (text) => {
    //     setLoading()
    //
    //     const params = new URLSearchParams({
    //         q: text
    //     })
    //
    //     const response = await fetch(`${GITHUB_URL}/search/googleApps?${params}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //
    //     const {items} = await response.json()
    //
    //     dispatch({
    //         type: 'GET_USERS_WITH_SEARCH',
    //         payload: items
    //     })
    // }





    // const getApp = async (login) => {
    //     setLoading()
    //
    //
    //     const response = await fetch(`${GITHUB_URL}/googleApps/${login}`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //
    //     if (response.status === 404) {
    //         window.localation = '/notfound'
    //     } else {
    //         const data = await response.json()
    //
    //         dispatch({
    //             type: 'GET_USER',
    //             payload: data
    //         })
    //     }
    //
    //
    // }


    const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GoogleAppsContext.Provider value={{
        apps: all_apps,
        loading: state.loading,
        app: state.app,

    }}>
        {children}
    </GoogleAppsContext.Provider>
}

export default GoogleAppsContext