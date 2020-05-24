import { fork } from 'redux-saga/effects';
import getCurrentUserLocation from './appSaga'
import handlerSearchListOfDevs from './searchSaga'

export default function* root() {
    yield fork(getCurrentUserLocation);
    yield fork(handlerSearchListOfDevs);

}