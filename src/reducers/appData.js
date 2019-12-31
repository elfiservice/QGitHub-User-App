import { SET_LOCATION_OF_USER, SET_POSITION_OF_DEV } from '../actions/appActions'

const INITIAL_STATE = {
    currentLocationOfUser: null,
    positionOfDev: null
}

function appData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOCATION_OF_USER :
            return {
                        ...state,
                        currentLocationOfUser: action.nameOfTheCity,
                    }

        case SET_POSITION_OF_DEV :
            return {
                        ...state,
                        positionOfDev: action.position,
                    }
        default :
            return state
    }
}
 export default appData