import { SET_SINGLE_DEV_DATA, } from '../actions/devDetailsActions'

const INITIAL_STATE = {
    devData: null,
}

function devDetailsData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SINGLE_DEV_DATA :
            return {
                        ...state,
                        devData: action.devData,
                    }
                   
        default :
            return state
    }
}
 export default devDetailsData