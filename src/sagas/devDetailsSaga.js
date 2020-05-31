import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserData, getUserReporStarred } from '../utils/githubApi'

import { HANDLER_SEARCH_SINGLE_DEV_DETAILS } from '../actions/devDetailsActions'
export const SET_SINGLE_DEV_DATA = 'SET_SINGLE_DEV_DATA'
export const SET_REPORS_STARRED_OF_DEV = 'SET_REPORS_STARRED_OF_DEV'
export const SET_POSITION_OF_DEV = 'SET_POSITION_OF_DEV'


function* setSingleDevData(devData) {
    yield put( {
        type: SET_SINGLE_DEV_DATA,
        devData
    });
}

function* setUserRepoStarred(result) {
    yield put( {
        type: SET_REPORS_STARRED_OF_DEV,
        result
    });
}

function* setPositionOfDEV(position) {
    yield put( {
        type: SET_POSITION_OF_DEV,
        position
    });
}

function* searchSingleDevDetails(action) {
    try {
        const resultUserData = yield call(getUserData, action.username);
        yield setSingleDevData(resultUserData);
        if(resultUserData.location) {
          const resultMountMapToDev =  yield call(mountMapToDeveloperSelected, resultUserData.location);
          yield setPositionOfDEV(resultMountMapToDev);
        }
        const resultUserRepoStarred =  yield call(getUserReporStarred, resultUserData.login);
        yield setUserRepoStarred(resultUserRepoStarred);
        
    } catch(err) {
        alert('Some error occured trying get details of dev., please try again later.');
    }
}

export default function* handlerSearchSingleDevDetails() {
    yield takeLatest(HANDLER_SEARCH_SINGLE_DEV_DETAILS, searchSingleDevDetails);
}

function mountMapToDeveloperSelected(address) {
    return new Promise((resolve, reject) => {
        let map
        let geocoder
        if(window.google !== undefined) {

            geocoder = new window.google.maps.Geocoder();
            map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 8
            });

            geocoder.geocode( { 'address': address}, function(results, status) {
                if (status === 'OK') {
                    map.setCenter(results[0].geometry.location);
                    new window.google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location
                    });

                    resolve(results[0].geometry.location);
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                    resolve('Error occured');
                }
            });

        } else {
            resolve('Error on Google Api');
        }
    });
}
