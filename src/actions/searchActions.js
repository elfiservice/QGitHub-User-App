export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT'
export const HANDLER_SEARCH_LIST_OF_DEVS = 'HANDLER_SEARCH_LIST_OF_DEVS'

export function handleInputChange(query) {
    return {
            type: SET_SEARCH_INPUT,
            query
        }
}

export function searchDevOnGithub(searchTerm) {
    return {
        type: HANDLER_SEARCH_LIST_OF_DEVS,
        searchTerm
    }
}