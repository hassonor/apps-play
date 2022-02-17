const googleAppsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_APPS':
            return {
                ...state,
                apps: action.payload,
                loading: false
            }
        case 'GET_APP_DETAILS':
            return {
                ...state,
                app: action.payload,
                loading: false
            }

        case 'GET_APP_WITH_SEARCH':
            return {
                ...state,
                apps: action.payload,
                loading: false
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}

export default googleAppsReducer