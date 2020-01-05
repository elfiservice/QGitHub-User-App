import { getUserData, getUserReporStarred } from '../utils/githubApi'

export const SET_SINGLE_DEV_DATA = 'SET_SINGLE_DEV_DATA'
export const SET_POSITION_OF_DEV = 'SET_POSITION_OF_DEV'
export const SET_REPORS_STARRED_OF_DEV = 'SET_REPORS_STARRED_OF_DEV'
export const RESET_DEV_DATA = 'RESET_DEV_DATA'
export const SET_DIST_BETWEEN_USER_AND_DEV = 'SET_DIST_BETWEEN_USER_AND_DEV'

export function searchSingleDevOnGithub(username) {
    return dispatch => {
        setTimeout(() =>  {
            return getUserData(username)
                .then(result => {
                    dispatch(setSingleDevData(result))
                    if(result.location) {
                        dispatch(mountMapToDeveloperSelected(result.location))
                    }
                    dispatch(searchReporStarredOnGithub(result.login))
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

export function resetDevData() {
    return {
        type: RESET_DEV_DATA,
        data: true
    }
}

function mountMapToDeveloperSelected(address) {
    return dispatch => {
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

                    dispatch(setPositionOfDEV(results[0].geometry.location))
                } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                    dispatch(setPositionOfDEV('Error occured'))
                }
            });

        } else {
            dispatch(setPositionOfDEV('Error on Google Api'))
        }

    
     }
}

function setPositionOfDEV(position) {
    return {
        type: SET_POSITION_OF_DEV,
        position
    }
}

function searchReporStarredOnGithub(username) {
    return dispatch => {
        return getUserReporStarred(username)
            .then(result => {
                dispatch({
                    type: SET_REPORS_STARRED_OF_DEV,
                    result
                })
            })
            .catch(error => {
                dispatch({
                    type: SET_REPORS_STARRED_OF_DEV,
                    result: [{name: 'API error'}]
                })
            })   
    }
}

export function calculeOfDistanceBtUserAndDev(userLatLng, devLatLng) {
    return dispatch => {

        const distanceBtwUserAndDevMeters = window.google.maps.geometry.spherical.computeDistanceBetween(userLatLng, devLatLng);
        const distanceBtwUserAndDevKm = parseInt(distanceBtwUserAndDevMeters / 1000)
        dispatch({
            type: SET_DIST_BETWEEN_USER_AND_DEV,
            distanceBtwUserAndDev: distanceBtwUserAndDevKm
        })

    }
}