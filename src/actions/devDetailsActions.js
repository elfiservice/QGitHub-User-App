import { getUserData, } from '../utils/githubApi'

export const SET_SINGLE_DEV_DATA = 'SET_SINGLE_DEV_DATA'

export function searchSingleDevOnGithub(username) {
    return dispatch => {
        dispatch(setSingleDevData('searching'))
        setTimeout(() =>  {
            return getUserData(username)
                .then(result => {
                    console.log(result);
                    dispatch(setSingleDevData(result))
                })   
       } , 1500) 
    }
}

function setSingleDevData(devData) {
    return {
        type: SET_SINGLE_DEV_DATA,
        devData
    }
}