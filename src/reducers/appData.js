import { SET_LOCATION_OF_USER, } from '../actions/appActions'

const INITIAL_STATE = {
    currentLocationOfUser: null,
}

function appData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_LOCATION_OF_USER :
            return {
                        ...state,
                        currentLocationOfUser: action.nameOfTheCity,
                    }

        default :
            return state
    }
}
 export default appData