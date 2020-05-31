import { call, put, takeLatest } from 'redux-saga/effects';
import { searchUsersByFullname, searchUsersByLogin } from '../utils/githubApi'

import { HANDLER_SEARCH_LIST_OF_DEVS } from '../actions/searchActions'

export const SET_LIST_OF_DEVS = 'SET_LIST_OF_DEVS'

function* setSeachingMsg(data) {
    yield put({
        type: SET_LIST_OF_DEVS,
        listOfDevs: data
    })
}

function* searchListOfDevs(action) {
    try {
        yield setSeachingMsg('searching')
        const result = yield call(searchUsersByFullname, action.searchTerm)
        if(result.total_count > 0) {
            yield setSeachingMsg(result.items)
        } else {
           const result = yield call(searchUsersByLogin, action.searchTerm)
           yield setSeachingMsg(result.items)
        }

    } catch (err) {
        yield setSeachingMsg('error')
    }
}

export default function* handlerSearchListOfDevs() {
    yield takeLatest(HANDLER_SEARCH_LIST_OF_DEVS, searchListOfDevs);
}