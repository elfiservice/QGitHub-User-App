import { SET_SINGLE_DEV_DATA, SET_POSITION_OF_DEV, SET_REPORS_STARRED_OF_DEV } from '../actions/devDetailsActions'

const INITIAL_STATE = {
    devData: null,
    positionOfDev: null,
    reposSttaredList: []
}

function devDetailsData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SINGLE_DEV_DATA :
            return {
                        ...state,
                        devData: action.devData,
                    }
        case SET_POSITION_OF_DEV :
            return {
                        ...state,
                        positionOfDev: action.position,
                    }
        case SET_REPORS_STARRED_OF_DEV :
            return {
                        ...state,
                        reposSttaredList: action.result,
                    }
        default :
            return state
    }
}
 export default devDetailsData