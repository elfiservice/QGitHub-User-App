import { getUserData, } from '../utils/githubApi'

export const SET_SINGLE_DEV_DATA = 'SET_SINGLE_DEV_DATA'

export function searchSingleDevOnGithub(username) {
    return dispatch => {
        setTimeout(() =>  {
            return getUserData(username)
                .then(result => {
                    dispatch(setSingleDevData(result))
                })   
       } , 1500) 
    }
}

export function setSingleDevData(devData) {
    return {
        type: SET_SINGLE_DEV_DATA,
        devData
    }
}