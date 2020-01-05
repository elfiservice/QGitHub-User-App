import { SET_LOCATION_OF_USER, SET_LAT_LNG_OF_USER } from '../actions/appActions'

const INITIAL_STATE = {
    currentLocationOfUser: null,
    latLng: null
}

function appData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOCATION_OF_USER :
            return {
                        ...state,
                        currentLocationOfUser: action.nameOfTheCity,
                    }
        case SET_LAT_LNG_OF_USER :
            return {
                        ...state,
                        latLng: action.latLng
                    }
            
        default :
            return state
    }
}
 export default appData