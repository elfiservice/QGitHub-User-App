import { searchUsersByFullname, searchUsersByLogin } from '../utils/githubApi'

export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
export const SET_LIST_OF_DEVS = 'SET_LIST_OF_DEVS'

export function handleInputChange(query) {
    return {
            type: SET_SEARCH_INPUT,
            query
        }
}

export function searchDevOnGithub(searchTerm) {
    return dispatch => {
       return searchUsersByFullname(searchTerm)
        .then(result => {
            if(result.total_count === 0) {
                dispatch(searchDevOnGithubByLogin(searchTerm))
            } else {
                dispatch({type: SET_LIST_OF_DEVS, listOfDevs: result.items })
            }
            
        })
    }

}

function searchDevOnGithubByLogin(searchTerm) {
    return dispatch => {
       return searchUsersByLogin(searchTerm)
        .then(result => {
            dispatch({type: SET_LIST_OF_DEVS, listOfDevs: result.items })
        })
    }

}