import { getUserData, } from '../utils/githubApi'

export const SET_SINGLE_DEV_DATA = 'SET_SINGLE_DEV_DATA'
export const SET_POSITION_OF_DEV = 'SET_POSITION_OF_DEV'

export function searchSingleDevOnGithub(username) {
    return dispatch => {
        setTimeout(() =>  {
            return getUserData(username)
                .then(result => {
                    dispatch(setSingleDevData(result))
                    if(result.location) {
                        dispatch(mountMapToDeveloperSelected(result.location))
                    }
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

export function mountMapToDeveloperSelected(address) {
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
                    var marker = new window.google.maps.Marker({
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