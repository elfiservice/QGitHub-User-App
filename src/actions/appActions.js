export const SET_LOCATION_OF_USER = 'SET_LOCATION_OF_USER'
export const SET_POSITION_OF_DEV = 'SET_POSITION_OF_DEV'

export function getCurrentLocationOfUser() {
    if (navigator.geolocation) {
        return locationIsSuported()
    } else {
        alert("O seu navegador não suporta Geolocalização!")
        const latlon = '0,0'
        return {
            type: SET_LOCATION_OF_USER,
            latlon
            }
    }
}

function locationIsSuported() {
    return dispatch => {
       return navigator.geolocation.getCurrentPosition(position => {
            //const latlon = position.coords.latitude + "," + position.coords.longitude;
            dispatch(getNameOfTheUsersCity(position.coords.latitude, position.coords.longitude))

         }, showError);
    }
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("Solicitação de geolocalização negada! :o  Favor tentar novamente.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Ops! Informações de localização indisponíveis no momento. Favor tentar novamente. :)")
                break;
            case error.TIMEOUT:
                alert("Tempo excedido, talvez seja a conexão com a Internet. Favor tentar novamente :)")
                break;
            case error.UNKNOWN_ERROR:
                alert("Ops! Um error desconhecido aconteceu ao tentar obter sua localização atual. Favor tentar novamente :)")
                break;
            default:
            alert("Ops! Algo desconhecido ao tentar lhe localizar ocorreu. Favor tentar novamente :)")
        }
        return {
            type: SET_LOCATION_OF_USER,
            latlon: 'error'
         }
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
                    dispatch (setLocationOfUser(nameOfTheCity))
                   
                } else {
                    dispatch (setLocationOfUser('not found'))
                }
            }
        } else {
            dispatch (setLocationOfUser('Error trying Google Api'))
        }
    
    }
}

function setLocationOfUser(nameOfTheCity) {
    return {
        type: SET_LOCATION_OF_USER,
        nameOfTheCity
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