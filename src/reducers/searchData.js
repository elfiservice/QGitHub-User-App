import { SET_SEARCH_INPUT } from '../actions/searchActions'
import { SET_LIST_OF_DEVS } from '../sagas/searchSaga'

const INITIAL_STATE = {
    searchInput: '',
    listOfDevs: null,
}

function searchData (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SEARCH_INPUT :
            return {
                        ...state,
                        searchInput: action.query,
                    }
        case SET_LIST_OF_DEVS :
            return {
                        ...state,
                        listOfDevs: action.listOfDevs,
                    }                    
        default :
            return state
    }
}
 export default searchData