import { call, put, takeLatest } from 'redux-saga/effects'

import { HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV, HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV } from '../actions/devDetailsActions'
export const SET_DIST_BETWEEN_USER_AND_DEV = 'SET_DIST_BETWEEN_USER_AND_DEV'
export const DRAW_MAP = 'DRAW_MAP'

function* calculeDistanceBtwUserAndDev(action) {
    const resultCalculate = yield call(calculate, action.coordinates)
    yield put(resultCalculate)
}

function* drawDistanceBtwUserAndDev(action) {
    const resultDraw = yield call(draw, action.coordinates)
    yield put(resultDraw)
}

export function* handlerCalculeDistanceBtwUserAndDev() {
    yield takeLatest(HANDLER_CALCULE_DISTANCE_BTW_USER_AND_DEV, calculeDistanceBtwUserAndDev);
}

export function* handlerDrawDistanceBtwUserAndDev() {
    yield takeLatest(HANDLER_DRAW_DISTANCE_BTW_USER_AND_DEV, drawDistanceBtwUserAndDev);
}

function calculate({ userLatLng, devLatLng }) {
    return new Promise((resolve) => {
        const distanceBtwUserAndDevMeters = window.google.maps.geometry.spherical.computeDistanceBetween(userLatLng, devLatLng);
        const distanceBtwUserAndDevKm = parseInt(distanceBtwUserAndDevMeters / 1000)
        resolve({
            type: SET_DIST_BETWEEN_USER_AND_DEV,
            distanceBtwUserAndDev: distanceBtwUserAndDevKm
        })
    }); 
}

function draw({ userLatLng, devLatLng }) {
    return new Promise( resolve => {
        var marker1, marker2;
        var geodesicPoly;
        const googleMaps = window.google.maps
        var map = new googleMaps.Map(document.getElementById('map'), {
            zoom: 4,
            center: devLatLng
        });
        marker1 = new googleMaps.Marker({
            map: map,
            position: userLatLng
        });

        marker2 = new googleMaps.Marker({
            map: map,
            position: devLatLng
        });
        var bounds = new googleMaps.LatLngBounds(
            marker1.getPosition(), marker2.getPosition());
        map.fitBounds(bounds);

        geodesicPoly = new googleMaps.Polyline({
            strokeColor: '#CC0099',
            strokeOpacity: 1.0,
            strokeWeight: 3,
            geodesic: true,
            map: map
        });

        var path = [marker1.getPosition(), marker2.getPosition()];
        geodesicPoly.setPath(path);
        var heading = googleMaps.geometry.spherical.computeHeading(path[0], path[1]);
        resolve({
            type: DRAW_MAP,
            heading
        })
    })
}
