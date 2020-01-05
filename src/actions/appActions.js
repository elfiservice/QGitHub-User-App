export const SET_LOCATION_OF_USER = 'SET_LOCATION_OF_USER'
export const SET_LAT_LNG_OF_USER = 'SET_LAT_LNG_OF_USER'

export function getCurrentLocationOfUser() {
    if (navigator.geolocation) {
       return locationIsSuported()
    } else {
        alert("Browser does not suport Geolocation!")
        return setLocationOfUser('a mistery :P')
    }
}

function locationIsSuported() {
    return dispatch => {
        return navigator.geolocation.getCurrentPosition(position => {
            //const latlon = position.coords.latitude + "," + position.coords.longitude;
            dispatch(getNameOfTheUsersCity(position.coords.latitude, position.coords.longitude))

         }, error => showError(error, dispatch));
    }
    function showError(error, dispatch) {
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
        return dispatch(setLocationOfUser('a mistery :P'))
    }
}

function getNameOfTheUsersCity(lat, lng) {
    return dispatch => {
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
                    dispatch(setLocationOfUser(nameOfTheCity))
                    dispatch(setLAtLngOfUser(userLocation))
                   
                } else {
                    dispatch(setLocationOfUser('not found'))
                }
            }
        } else {
            dispatch(setLocationOfUser('Error trying Google Api'))
        }
    
    }
}

function setLocationOfUser(nameOfTheCity) {
    return {
        type: SET_LOCATION_OF_USER,
        nameOfTheCity,
    }
}

function setLAtLngOfUser(latLng) {
    return {
        type: SET_LAT_LNG_OF_USER,
        latLng
    }
}