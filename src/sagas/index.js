import { fork } from 'redux-saga/effects';
import getCurrentUserLocation from './appSaga'
import handlerSearchListOfDevs from './searchSaga'
import handlerSearchSingleDevDetails from './devDetailsSaga'
import { handlerCalculeDistanceBtwUserAndDev, handlerDrawDistanceBtwUserAndDev } from './drawMapSaga'

export default function* root() {
    yield fork(getCurrentUserLocation);
    yield fork(handlerSearchListOfDevs);
    yield fork(handlerSearchSingleDevDetails);
    yield fork(handlerCalculeDistanceBtwUserAndDev);
    yield fork(handlerDrawDistanceBtwUserAndDev);
}