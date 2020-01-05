import { SET_SINGLE_DEV_DATA, 
        SET_POSITION_OF_DEV, 
        SET_REPORS_STARRED_OF_DEV, 
        RESET_DEV_DATA, 
        SET_DIST_BETWEEN_USER_AND_DEV,
        DRAW_MAP } from '../actions/devDetailsActions'

const INITIAL_STATE = {
    devData: null,
    positionOfDev: null,
    reposSttaredList: [],
    distanceBtwUserAndDev: null,
    drawMap: null
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
        case SET_DIST_BETWEEN_USER_AND_DEV :
            return {
                        ...state,
                        distanceBtwUserAndDev: action.distanceBtwUserAndDev,
                    }
        case DRAW_MAP :
            return {
                        ...state,
                        drawMap: action.heading,
                    }
        case RESET_DEV_DATA :
            return {
                        ...state,
                        devData: null,
                        positionOfDev: null,
                        reposSttaredList: [],
                        distanceBtwUserAndDev: null,
                        drawMap: null
                    }
        default :
            return state
    }
}
 export default devDetailsData