
export const HANDLER_SEARCH_SINGLE_DEV_DETAILS = 'HANDLER_SEARCH_SINGLE_DEV_DETAILS'
export const HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV = 'HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV'
export const HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV = 'HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV'
export const RESET_DEV_DATA = 'RESET_DEV_DATA'

export function searchSingleDevOnGithub(username) {
    return {
        type: HANDLER_SEARCH_SINGLE_DEV_DETAILS,
        username
    }
}

export function calculeOfDistanceBtUserAndDev(userLatLng, devLatLng) {
    return {
        type: HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV,
        coordinates: { userLatLng, devLatLng }
    }
}

export function drawDistanceBtUserAndDev(userLatLng, devLatLng) {
    return {
        type: HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV,
        coordinates: { userLatLng, devLatLng }
    }
}

export function resetDevData() {
    return {
        type: RESET_DEV_DATA,
        data: true
    }
}