import { call, put, select, takeLatest } from 'redux-saga/effects';

import { GET_CURRENT_USER_LOCATION } from '../actions/appActions'

export const SET_LOCATION_OF_USER = 'SET_LOCATION_OF_USER'
export const SET_LAT_LNG_OF_USER = 'SET_LAT_LNG_OF_USER'

function* getUserLocation() {
    if (navigator.geolocation) {
        const response = yield call(checkLocation)
        if(typeof response === 'object') {
            yield setLocationOfUser(response.nameOfTheCity)
            yield setLAtLngOfUser(response.userLocation)
        } else {
            yield setLocationOfUser(response)
        }
        
    } else {
        alert("Browser does not suport Geolocation!")
        yield setLocationOfUser('a mistery :P')
    }
}

function checkLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
            //const latlon = position.coords.latitude + "," + position.coords.longitude;
        getNameOfTheUsersCity(position.coords.latitude, position.coords.longitude)
        }, error => showError(error));
    
        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("Geolocation request denied! Please give the browser permission to access your location.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("Ops! Location information currently unavailable. Please try again later.")
                    break;
                case error.TIMEOUT:
                    alert("Timeout, maybe it's the Internet connection. Please try again later.")
                    break;
                case error.UNKNOWN_ERROR:
                    alert("Ops! An unknown error happened while trying to get your current location. Please try again. :)")
                    break;
                default:
                alert("Ops! Something went wrong trying to locate you. Please try again.")
            }
            reject('a mistery :P')
        }

        function getNameOfTheUsersCity(lat, lng) {
            console.log('no saga');
        
                let map
                let service;
               
                if(window.google !== undefined) {
                    let userLocation = new window.google.maps.LatLng(lat,lng)
                    map = new window.google.maps.Map(document.getElementById('mapHidden'));
        
                    var request = {
                        location: userLocation,
                        radius: '500',
                        query: 'restaurant'
                    };
                    
                    service = new window.google.maps.places.PlacesService(map);
                    service.textSearch(request, callback);
                    
                    function callback(results, status) {    
        
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        var place = results[0];
                        let placeSplited = place.formatted_address.split(',')
                            const nameOfTheCity = placeSplited[2]
                            resolve({nameOfTheCity, userLocation})
                           
                        } else {
                            resolve('not found')
                        }
                    }
                } else {
                    resolve('Error trying Google Api')
                }
        }
    })
}


function* setLocationOfUser(nameOfTheCity) {
    yield put({
        type: SET_LOCATION_OF_USER,
        nameOfTheCity,
    })
}

function* setLAtLngOfUser(latLng) {
    yield put({
        type: SET_LAT_LNG_OF_USER,
        latLng,
    })
}

export default function* getCurrentUserLocation() {
    yield takeLatest(GET_CURRENT_USER_LOCATION, getUserLocation);
}